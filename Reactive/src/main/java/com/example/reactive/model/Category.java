package com.example.reactive.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Data
@Table("category")
public class Category {


    @Id
    private Long id;

    private String name;


    private List<Product> products;



}
