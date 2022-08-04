package com.example.reactive.model;


import com.example.reactive.model.Variant;
import com.example.reactive.model.Vendor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Data
@Table(name = "product")
public class Product {

    @Id
    private Long id;

    private String name;

    private String description;

    private ProductDetail detail;

    private Vendor vendor;

    private List<Variant> variants;


    private List<Category> categories;


}
