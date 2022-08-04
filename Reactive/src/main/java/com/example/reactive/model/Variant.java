package com.example.reactive.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "variant")
public class Variant {

    @Id
    private Long id;

    private ProductDetail detail;

    private Product product;

}
