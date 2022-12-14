package com.example.reactive.controller;

import com.example.reactive.model.Category;
import com.example.reactive.model.Product;
import com.example.reactive.model.Variant;
import com.example.reactive.model.Vendor;
import com.example.reactive.repository.category.CategoryRepository;
import com.example.reactive.repository.product.ProductRepository;
import com.example.reactive.repository.vendor.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private VendorRepository vendorRepository;
    @Autowired
    private CategoryRepository categoryRepository;


    @GetMapping("/products")
    private Mono<List<Product>> getProducts() {
        return productRepository.findAllProducts(50,0);
    }

    @GetMapping("/product/{id}")
    private Mono<Product> getProduct(@PathVariable Long id) {
        return productRepository.findProductById(id);
    }

    @PostMapping("/product")
    private Mono<Object> createProduct(@RequestBody Product product) {
        return productRepository.saveProduct(product);
    }

    @GetMapping("/vendor/{id}/products")
    private Mono<List<Product>> getProductsByVendor(@PathVariable Long id) {
        return productRepository.findAllProductsByVendorId(id,50,0);
    }
    @GetMapping("/vendors")
    private Flux<Vendor> getVendors() {
        return vendorRepository.findFirst50ByOrderByIdAsc();
    }
    @GetMapping("/vendor/{id}")
    private Mono<Vendor> getVendor(@PathVariable Long id) {
        return vendorRepository.findById(id);
    }
    @PostMapping("/vendor")
    private Mono<Vendor> createVendor(@RequestBody Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    @GetMapping("/category/{id}/products")
    private Mono<List<Product>> getProductsByCategory(@PathVariable Long id) {
        return productRepository.findAllProductsByCategoryId(id,50,0);
    }
    @GetMapping("/categories")
    private Flux<Category> getCategories() {
        return categoryRepository.findFirst50ByOrderByIdAsc();
    }
    @GetMapping("/category/{id}")
    private Mono<Category> getCategory(@PathVariable Long id) {
        return categoryRepository.findById(id);
    }
    @PostMapping("/category")
    private Mono<Category> createCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

}
