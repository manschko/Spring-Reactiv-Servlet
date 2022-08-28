package com.example.reactive.repository.product;

import com.example.reactive.mapper.ProductMapper;
import com.example.reactive.model.Category;
import com.example.reactive.model.Product;
import com.example.reactive.model.Variant;
import com.example.reactive.model.Vendor;
import io.r2dbc.spi.Batch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class ExProductRepositoryImpl implements ExProductRepository {

    ProductMapper mapper = new ProductMapper();
    //two dependencies a
    @Autowired
    private DatabaseClient client;


    @Override
    public Mono<List<Product>> findAllProducts(Integer limit) {
        String productQuery = String.format("""
                SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num
                FROM product
                INNER JOIN product_detail pd
                ON product.detail_id = pd.id
                INNER JOIN vendor v
                ON product.vendor_id = v.id
                LIMIT %s
                """, limit);

        String variantQuery = """
                SELECT *
                FROM variant
                INNER JOIN product_detail pd
                ON variant.detail_id = pd.id
                WHERE variant.product_id IN %s
                """;

        String categoryQuery = """
                SELECT *
                FROM product_category
                INNER JOIN category
                ON product_category.category_id = category.id
                WHERE product_id IN %s
                """;
        //todo maybe do it another way instead of doing the call twice
        String productCategoryQuery = """
                SELECT *
                FROM product_category
                WHERE product_category.product_id IN %s
                """;

        return client
                .sql(productQuery)
                .fetch()
                .all().collectList().map(rows -> {
                    List<Product> products = rows.stream().map(mapper::product).toList();
                    List<String> productIds = new ArrayList<>();
                    products.forEach(product -> {
                        productIds.add(product.getId().toString());
                    });
                    Mono<List<Long[]>> productCategory = client
                            .sql(productCategoryQuery)
                            .fetch()
                            .all().collectList().map(rows2 -> rows.stream().map(mapper::categoryProduct).toList());


                    Mono<List<Category>> categories = client
                            .sql(String.format(categoryQuery, "(" + String.join(", ", productIds) + ")"))
                            .fetch()
                            .all().collectList().map(rows2 -> rows2.stream().map(mapper::category).toList());
                    Mono<List<Variant>> variants = client
                            .sql(String.format(variantQuery, "(" + String.join(", ", productIds) + ")"))
                            .fetch()
                            .all().collectList().map(row2 -> row2.stream().map(mapper::variant).toList());

                    return Mono.zip(categories, variants, productCategory).flatMap(data -> {
                        Map<Long, Product> p = products.stream().collect(Collectors.toMap(Product::getId, pr -> pr));
                        Map<Long, Category> c = data.getT1().stream().collect(Collectors.toMap(Category::getId, cr -> cr));

                        data.getT2().forEach(variant -> p.get(variant.getProduct().getId()).getVariants().add(variant));
                        data.getT3().forEach(cp -> p.get(cp[0]).getCategories().add(c.get(cp[1])));

                        return Mono.just(products);
                    });

                });

    }

    @Override
    public Mono<List<Product>> findAllProductsByVendorId(Long vendorId) {
        String productQuery = String.format("""
                SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num
                FROM product
                INNER JOIN product_detail pd
                ON product.detail_id = pd.id
                INNER JOIN vendor v
                ON product.vendor_id = v.id
                WHERE product.vendor_id = %s
                """, vendorId);
        String variantQuery = String.format("""
                SELECT *
                FROM variant
                INNER JOIN product_detail pd
                ON variant.detail_id = pd.id
                WHERE variant.product_id
                IN (SELECT id FROM product WHERE vendor_id = %s)
                """, vendorId);
        String categoryQuery = String.format("""
                SELECT *
                FROM category
                WHERE id
                IN (SELECT category_id FROM product_category WHERE product_id
                IN (SELECT id FROM product WHERE vendor_id = %s))
                """, vendorId);
        String catergoryProductQuery = String.format("""
                SELECT *
                FROM product_category
                WHERE product_id
                IN (SELECT id FROM product WHERE vendor_id = %s)
                """, vendorId);

        Mono<List<Variant>> variants = client
                .sql(variantQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::variant).toList());
        Mono<List<Product>> products = client
                .sql(productQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::product).toList());

        Mono<List<Category>> categories = client
                .sql(categoryQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::category).toList());
        Mono<List<Long[]>> categoryProduct = client
                .sql(catergoryProductQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::categoryProduct).toList());


        return Mono.zip(variants, products, categories, categoryProduct).flatMap(data -> {

            Map<Long, Product> p = data.getT2().stream().collect(Collectors.toMap(Product::getId, pr -> pr));
            Map<Long, Category> c = data.getT3().stream().collect(Collectors.toMap(Category::getId, cr -> cr));

            data.getT1().forEach(variant -> p.get(variant.getProduct().getId()).getVariants().add(variant));
            data.getT4().forEach(cp -> p.get(cp[0]).getCategories().add(c.get(cp[1])));

            return Mono.just(data.getT2());
        });
    }

    @Override
    public Mono<List<Product>> findAllProductsByCategoryId(Long categoryId) {
        String productQuery = """
                SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num 
                FROM product
                INNER JOIN product_detail pd
                ON product.detail_id = pd.id
                INNER JOIN vendor v
                ON product.vendor_id = v.id
                WHERE product.id
                IN (SELECT product_id FROM product_category WHERE category_id = " + categoryId + ")
                """;
        String variantQuery = """
                SELECT *
                FROM variant
                INNER JOIN product_detail pd
                ON variant.detail_id = pd.id
                WHERE variant.product_id
                IN (SELECT id FROM product WHERE id
                IN (SELECT product_id FROM product_category WHERE category_id = " + categoryId + "))
                """;
        String categoryQuery = String.format("""
                SELECT *
                FROM category
                WHERE id = %s
                """, categoryId);
        String catergoryProductQuery = String.format("""
                SELECT *
                FROM product_category
                WHERE category_id = %s
                """, categoryId);

        Mono<List<Variant>> variants = client
                .sql(variantQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::variant).toList());
        Mono<List<Product>> products = client
                .sql(productQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::product).toList());

        Mono<List<Category>> categories = client
                .sql(categoryQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::category).toList());
        Mono<List<Long[]>> categoryProduct = client
                .sql(catergoryProductQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::categoryProduct).toList());


        return Mono.zip(variants, products, categories, categoryProduct).flatMap(data -> {

            Map<Long, Product> p = data.getT2().stream().collect(Collectors.toMap(Product::getId, Function.identity()));
            Map<Long, Category> c = data.getT3().stream().collect(Collectors.toMap(Category::getId, Function.identity()));

            data.getT1().forEach(variant -> p.get(variant.getProduct().getId()).getVariants().add(variant));
            data.getT4().forEach(cp -> p.get(cp[0]).getCategories().add(c.get(cp[1])));

            return Mono.just(data.getT2());
        });
    }

    @Override
    public Mono<Product> findProductById(Long id) {
        final String productQuery = String.format("""
                SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num
                FROM product
                INNER JOIN product_detail pd ON product.detail_id = pd.id
                INNER JOIN vendor v on product.vendor_id = v.id WHERE product.id = %s
                """, id);
        final String variantQuery = String.format("""
                SELECT *
                FROM variant
                INNER JOIN product_detail pd ON variant.detail_id = pd.id
                WHERE variant.product_id = %s
                """, id);
        final String categoryQuery = String.format("""
                SELECT id, name
                FROM category
                INNER JOIN product_category pc on category.id = pc.category_id
                WHERE product_id = %s
                """, id);

        Mono<Product> product = client
                .sql(productQuery)
                .fetch()
                .first().map(mapper::product);

        Mono<List<Variant>> variants = client
                .sql(variantQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::variant).toList());

        Mono<List<Category>> categories = client
                .sql(categoryQuery)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::category).toList());


        return Mono.zip(variants, product, categories).flatMap(data -> {

            data.getT2().setVariants(data.getT1());
            data.getT2().setCategories(data.getT3());

            return Mono.just(data.getT2());
        });
    }

    @Transactional
    @Override
    public Mono<Object> saveProduct(Product product) {
        final String categoryQuery = """
                INSERT INTO category (id, name) VALUES (%s ,'%s')
                ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name RETURNING id
                """;
        final String vendorQuery = """
                INSERT INTO vendor (id, name, address, contact_num) VALUES (%s, '%s','%s','%s')
                ON CONFLICT (id) DO UPDATE
                SET name = EXCLUDED.name, address = EXCLUDED.address, contact_num = EXCLUDED.contact_num
                RETURNING id
                """;
        final String detailQuery = """
                INSERT INTO product_detail (color, image, price, size) VALUES ('%s','%s','%s','%s') RETURNING id
                """;
        final String productQuery = """
                INSERT INTO product (description, name, vendor_id, detail_id) VALUES ('%s','%s',%s,%s) RETURNING id
                """;

        final String productCategoryQuery = """
                INSERT INTO product_category (product_id, category_id) VALUES (%s, %s)
                """;
        final String variantQuery = """
                INSERT INTO variant (product_id, detail_id) VALUES (%s, %s)
                """;


        //batch
        Mono<List<Map<String, Object>>> category = client.inConnectionMany(connection -> {
            Batch batch = connection.createBatch();
            for (Category c : product.getCategories()) {

                batch.add(String.format(categoryQuery, c.getId() == null ? "DEFAULT" : c.getId(), c.getName()));
            }
            return Flux.from(batch.execute()).flatMap(rs -> rs.map(row -> {
                        Map<String, Object> map = new HashMap<>();
                        map.put("id", row.get("id"));
                        return map;
                    })
            );
        }).collectList();

        String sql = String.format(vendorQuery, product.getVendor().getId() == null ? "DEFAULT" : product.getVendor().getId(), product.getVendor().getName(), product.getVendor().getAddress(), product.getVendor().getContactNum());
        Mono<Map<String, Object>> vendor = client.sql(sql)
                .fetch().first();

        Mono<List<Map<String, Object>>> detail = client.inConnectionMany(connection -> {
            Batch batch = connection.createBatch();

            batch.add(String.format(detailQuery, product.getDetail().getColor(), product.getDetail().getImage(), product.getDetail().getPrice(), product.getDetail().getSize()));
            for (Variant v : product.getVariants()) {
                batch.add(String.format(detailQuery, v.getDetail().getColor(), v.getDetail().getImage(), v.getDetail().getPrice(), v.getDetail().getSize()));
            }
            return Flux.from(batch.execute()).flatMap(rs -> rs.map(row -> {
                        Map<String, Object> map = new HashMap<>();
                        map.put("id", row.get("id"));
                        return map;
                    })
            );
        }).collectList();
        return Mono.zip(vendor, detail, category).flatMap(data -> client
                .sql(String.format(productQuery, product.getDescription(), product.getName(), data.getT1().get("id"), data.getT2().get(0).get("id")))
                .fetch()
                .first()
                .flatMap(row -> client.inConnectionMany(connection -> {
                            Batch batch = connection.createBatch();
                            for (Map<String, Object> c : data.getT3()) {
                                batch.add(String.format(productCategoryQuery, row.get("id"), c.get("id")));
                            }
                            for (Map<String, Object> v : data.getT2()) {
                                batch.add(String.format(variantQuery, row.get("id"), v.get("id")));
                            }
                            return Flux.from(batch.execute());
                        }).collectList()
                )
        );
    }

    @Override
    public Mono<List<Vendor>> findAllVendors() {
        final String query = """
                SELECT * FROM vendor
                """;
        return client.sql(query)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::vendor).toList());
    }

    @Override
    public Mono<Vendor> findVendorById(Long id) {
        final String query = String.format("""
                SELECT * FROM vendor
                WHERE id = %s
                """, id);
        return client.sql(query).fetch()
                .first().map(mapper::vendor);
    }

    @Override
    public Mono<Object> saveVendor(Vendor vendor) {
        final String query = String.format("""
                INSERT INTO vendor (id, name, address, contact_num) VALUES (%s, '%s','%s','%s')
                ON CONFLICT (id) DO UPDATE
                SET name = EXCLUDED.name, address = EXCLUDED.address, contact_num = EXCLUDED.contact_num
                RETURNING id
                """, vendor.getId() == null ? "DEFAULT" : vendor.getId(), vendor.getName(), vendor.getAddress(), vendor.getContactNum());
        return client.sql(query).fetch().first().map(row -> row.get("id"));
    }

    @Override
    public Mono<List<Category>> findAllCategories() {
        final String query = """
                SELECT * FROM category
                """;
        return client.sql(query)
                .fetch()
                .all().collectList().map(rows -> rows.stream().map(mapper::category).toList());
    }

    @Override
    public Mono<Category> findCategoryById(Long id) {
        final String query = String.format("""
                SELECT * FROM category
                WHERE id = %s
                """, id);
        return client.sql(query).fetch()
                .first().map(mapper::category);
    }

    @Override
    public Mono<Object> saveCategory(Category category) {
        final String query = String.format("""
                INSERT INTO category (id, name) VALUES (%s, '%s')
                ON CONFLICT (id) DO UPDATE
                SET name = EXCLUDED.name
                RETURNING id
                """, category.getId() == null ? "DEFAULT" : category.getId(), category.getName());
        return client.sql(query).fetch().first().map(row -> row.get("id"));
    }
}

