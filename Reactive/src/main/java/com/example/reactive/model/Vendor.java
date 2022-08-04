package com.example.reactive.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Data
@Table(name = "vendor")
public class Vendor {
    @Id
    private Long id;

    private String name;

    private String contactNum;

    private String address;

    private List<Product> products;

}
