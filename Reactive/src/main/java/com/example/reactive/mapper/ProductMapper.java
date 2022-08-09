package com.example.reactive.mapper;

import com.example.reactive.model.Category;
import com.example.reactive.model.Product;
import com.example.reactive.model.ProductDetail;
import com.example.reactive.model.Variant;
import com.example.reactive.model.Vendor;
import io.r2dbc.spi.Row;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;


public class ProductMapper implements BiFunction<Row, Object, Product> {

    static Map<Long, Vendor> vendors = new HashMap<>();
    @Override
    public Product apply(Row row, Object o) {
        Long id = row.get("id", Long.class);
        return null;
    }



    public Product product(Map<String, Object> row) {
        Product product = new Product();
        product.setId((Long) row.get("id"));
        product.setName((String) row.get("name"));
        product.setDescription((String) row.get("description"));

        if(vendors.containsKey((Long) row.get("vendor_id"))) {
            product.setVendor(vendors.get((Long) row.get("vendor_id")));
        }
        else {
            vendors.put((Long) row.get("vendor_id"), new Vendor((Long) row.get("vendor_id"), (String) row.get("vendorname"), (String) row.get("contact_num"), (String) row.get("address")));
            product.setVendor(vendors.get((Long) row.get("vendor_id")));
        }
        product.setDetail(new ProductDetail((Long) row.get("detail_id"), (Double) row.get("price"), (String) row.get("image"), (String) row.get("size"), (String) row.get("color")));
        product.setVariants(new ArrayList<>());
        product.setCategories(new ArrayList<>());
        return product;

    }

    public Variant variant(Map<String, Object> row) {
        Variant variant = new Variant();
        variant.setId((Long) row.get("id"));
        variant.setDetail(new ProductDetail((Long) row.get("detail_id"), (Double) row.get("price"), (String) row.get("image"), (String) row.get("size"), (String) row.get("color")));
        variant.setProduct(new Product((Long) row.get("product_id")));

        return variant;
    }

    public Category category(Map<String, Object> row) {
        Category category = new Category();
        category.setId((Long) row.get("id"));
        category.setName((String) row.get("name"));

        return category;
    }

    public Long[] categoryProduct(Map<String, Object> row) {
        return new Long[]{(Long) row.get("product_id"), (Long) row.get("category_id")};
    }

    public Vendor vendor(Map<String, Object> row) {
        return new Vendor((Long) row.get("id"), (String) row.get("name"), (String) row.get("contact_num"), (String) row.get("address"));
    }
}
