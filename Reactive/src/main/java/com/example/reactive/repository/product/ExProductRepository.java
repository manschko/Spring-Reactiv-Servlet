package com.example.reactive.repository.product;

import com.example.reactive.model.Product;
import reactor.core.publisher.Flux;

public interface ExProductRepository {
    Flux<Product> findAllProducts();
    Flux<Product> findAllProductsByVendorId(Long vendorId);
    Flux<Product> findAllProductsByCategoryId(Long categoryId);
    Flux<Product> findProductById(Long id);
}
