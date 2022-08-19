package com.example.reactive.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Variant {

    @Id
    private Long id;

    private ProductDetail detail;

    @JsonIgnore
    private Product product;

}
