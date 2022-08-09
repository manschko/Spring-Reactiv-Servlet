package com.example.reactive.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;


@Data
@Table("product")
public class Product {

    @Id
    private Long id;

    private String name;

    private String description;

    private ProductDetail detail;

    private Vendor vendor;

    public Product(Long product_id) {
        this.id = product_id;
    }

    public Product() {

    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }

    private List<Variant> variants;


    private List<Category> categories;


}
