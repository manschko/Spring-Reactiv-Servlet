package com.example.servlet.model;


import lombok.Data;

import javax.persistence.Entity;
import java.util.List;

@Data
@Entity
public class Product(long id, String name, String description, double price, String image, String size, String color, Vendor vendor, List<Variant> variants, Category category) {

    private @Id @GeneratedValue
}
