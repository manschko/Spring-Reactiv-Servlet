package com.example.reactive.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "product_detail")
public class ProductDetail {
    @Id
    private Long id;

    private Double price;

    private String image;

    private String size;

    private String color;


}
