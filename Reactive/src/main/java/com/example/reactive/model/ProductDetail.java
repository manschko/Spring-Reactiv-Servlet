package com.example.reactive.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class ProductDetail {
    @Id
    private Long id;

    private Double price;

    private String image;

    private String size;

    private String color;


    public ProductDetail(Long id, Double price, String image, String size, String color) {
        this.id = id;
        this.price = price;
        this.image = image;
        this.size = size;
        this.color = color;
    }
}

