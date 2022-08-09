package com.example.reactive.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Variant {

    @Id
    private Long id;

    private ProductDetail detail;

    //private Long productId;
    private Product product;

}
