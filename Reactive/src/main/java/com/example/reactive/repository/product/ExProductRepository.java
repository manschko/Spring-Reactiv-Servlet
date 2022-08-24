package com.example.reactive.repository.product;

import com.example.reactive.model.Category;
import com.example.reactive.model.Product;
import com.example.reactive.model.Vendor;
import reactor.core.publisher.Mono;

import java.util.List;

public interface ExProductRepository {
    Mono<List<Product>> findAllProducts();
    Mono<List<Product>> findAllProductsByVendorId(Long vendorId);
    Mono<List<Product>> findAllProductsByCategoryId(Long categoryId);
    Mono<Product> findProductById(Long id);
    Mono<Object> saveProduct(Product product);
    Mono<List<Vendor>> findAllVendors();
    Mono<Vendor> findVendorById(Long id);
    Mono<Object> saveVendor(Vendor vendor);
    Mono<List<Category>> findAllCategories();
    Mono<Category> findCategoryById(Long id);
    Mono<Object> saveCategory(Category category);
}
