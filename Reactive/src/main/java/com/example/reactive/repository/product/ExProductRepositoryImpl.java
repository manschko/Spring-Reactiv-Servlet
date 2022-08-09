package com.example.reactive.repository.product;

import com.example.reactive.mapper.ProductMapper;
import com.example.reactive.model.Category;
import com.example.reactive.model.Product;
import com.example.reactive.model.Variant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.r2dbc.core.DatabaseClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ExProductRepositoryImpl implements ExProductRepository {

    ProductMapper mapper = new ProductMapper();
    //two dependencies a
    @Autowired
    private DatabaseClient client;


    @Override
    public Mono<List<Product>> findAllProducts() {
        String productQuery = "SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num  FROM product INNER JOIN product_detail pd ON product.detail_id = pd.id INNER JOIN vendor v on product.vendor_id = v.id";
        String variantQuery = "SELECT * FROM variant INNER JOIN product_detail pd ON variant.detail_id = pd.id";
        String categoryQuery = "SELECT * FROM category";
        String catergoryProductQuery = "SELECT * FROM product_category";

        Mono<List<Variant>> variants =  client
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

            data.getT1().forEach(variant -> {
                p.get(variant.getProduct().getId()).getVariants().add(variant);
            });
            data.getT4().forEach(cp -> {
                p.get(cp[0]).getCategories().add(c.get(cp[1]));
            });

            return Mono.just(data.getT2());
        });
    }

    @Override
    public Mono<List<Product>> findAllProductsByVendorId(Long vendorId) {
        String productQuery = "SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num  FROM product INNER JOIN product_detail pd ON product.detail_id = pd.id INNER JOIN vendor v on product.vendor_id = v.id WHERE product.vendor_id = " + vendorId;
        String variantQuery = "SELECT * FROM variant INNER JOIN product_detail pd ON variant.detail_id = pd.id WHERE variant.product_id IN (SELECT id FROM product WHERE vendor_id = " + vendorId + ")";
        String categoryQuery = "SELECT * FROM category WHERE id IN (SELECT category_id FROM product_category WHERE product_id IN (SELECT id FROM product WHERE vendor_id = " + vendorId + "))";
        String catergoryProductQuery = "SELECT * FROM product_category WHERE product_id IN (SELECT id FROM product WHERE vendor_id = " + vendorId + ")";

        Mono<List<Variant>> variants =  client
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

            data.getT1().forEach(variant -> {
                p.get(variant.getProduct().getId()).getVariants().add(variant);
            });
            data.getT4().forEach(cp -> {
                p.get(cp[0]).getCategories().add(c.get(cp[1]));
            });

            return Mono.just(data.getT2());
        });
    }

    @Override
    public Mono<List<Product>> findAllProductsByCategoryId(Long categoryId) {
        String productQuery = "SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num  FROM product INNER JOIN product_detail pd ON product.detail_id = pd.id INNER JOIN vendor v on product.vendor_id = v.id WHERE product.id IN (SELECT product_id FROM product_category WHERE category_id = " + categoryId + ")";
        String variantQuery = "SELECT * FROM variant INNER JOIN product_detail pd ON variant.detail_id = pd.id WHERE variant.product_id IN (SELECT id FROM product WHERE id IN (SELECT product_id FROM product_category WHERE category_id = " + categoryId + "))";
        String categoryQuery = "SELECT * FROM category WHERE id = " + categoryId;
        String catergoryProductQuery = "SELECT * FROM product_category WHERE category_id = " + categoryId;

        Mono<List<Variant>> variants =  client
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

            data.getT1().forEach(variant -> {
                p.get(variant.getProduct().getId()).getVariants().add(variant);
            });
            data.getT4().forEach(cp -> {
                p.get(cp[0]).getCategories().add(c.get(cp[1]));
            });

            return Mono.just(data.getT2());
        });
    }

    @Override
    public Mono<Product> findProductById(Long id) {
        String productQuery = "SELECT v.name as vendorName, product.*, pd.color, pd.image, pd.price, pd.size, v.address, v.contact_num  FROM product INNER JOIN product_detail pd ON product.detail_id = pd.id INNER JOIN vendor v on product.vendor_id = v.id WHERE product.id = " + id;
        String variantQuery = "SELECT * FROM variant INNER JOIN product_detail pd ON variant.detail_id = pd.id WHERE variant.product_id = " + id;
        String categoryQuery = "SELECT id, name FROM category INNER JOIN product_category pc on category.id = pc.category_id WHERE product_id = " + id;

        Mono<Product> product = client
                .sql(productQuery)
                .fetch()
                .first().map(mapper::product);

        Mono<List<Variant>> variants =  client
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
}

