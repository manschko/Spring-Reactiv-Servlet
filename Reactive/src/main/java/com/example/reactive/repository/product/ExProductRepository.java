package com.example.reactive.repository.product;

import com.example.reactive.model.Product;
import reactor.core.publisher.Mono;

import java.util.List;

public interface ExProductRepository {
    Mono<List<Product>> findAllProducts();
    Mono<List<Product>> findAllProductsByVendorId(Long vendorId);
    Mono<List<Product>> findAllProductsByCategoryId(Long categoryId);
    Mono<Product> findProductById(Long id);
    Mono<Object> saveProduct(Product product);
}
