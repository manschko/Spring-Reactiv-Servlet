package com.example.servlet.controller;

import com.example.servlet.model.Category;
import com.example.servlet.model.Product;
import com.example.servlet.model.Vendor;
import com.example.servlet.repository.CategoryRepository;
import com.example.servlet.repository.ProductRepository;
import com.example.servlet.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ProductController {

    @Autowired
    private ProductRepository dataRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private VendorRepository vendorRepository;

    @GetMapping(path = "/products")
    public Page<Product> getProduct(@RequestBody(required = false) com.example.servlet.model.PageRequest page) {

        if (page == null) {
            page = new com.example.servlet.model.PageRequest();
        }
        return dataRepository.findAllByOrderByIdAsc(PageRequest.of(page.getPage(), page.getSize()));
    }

    @GetMapping(path = "/product/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return dataRepository.findById(id).orElse(null);
    }

    @PostMapping(path = "/product")
    public void createProduct(@RequestBody Product product) {
        this.categoryRepository.saveAll(product.getCategories());
        this.dataRepository.save(product);
    }

    @GetMapping(path = "/vendors")
    public List<Vendor> getVendors() {
        return vendorRepository.findAll();
    }

    @GetMapping(path = "/vendor/{id}")
    public Vendor getVendorById(@PathVariable("id") Long id) {
        return vendorRepository.findById(id).orElse(null);
    }

    @GetMapping(path = "/vendor/{id}/products")
    public Page<Product> getVendorProducts(@PathVariable("id") Long id, @RequestBody(required = false) com.example.servlet.model.PageRequest page) {
        if (page == null) {
            page = new com.example.servlet.model.PageRequest();
        }
        return dataRepository.findByVendorId(id, PageRequest.of(page.getPage(), page.getSize()));
    }


    @PostMapping(path = "/vendor")
    public void createVendor(@RequestBody Vendor vendor) {
        vendorRepository.save(vendor);
    }

    @GetMapping(path = "/categories")
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping(path = "/category")
    public void createCategory(@RequestBody Category category) {
        categoryRepository.save(category);
    }

    @GetMapping(path = "/category/{id}")
    public Category getCategoryById(@PathVariable("id") Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @GetMapping(path = "/category/{id}/products")
    public Page<Product> getProductsByCategoryId(@PathVariable("id") Long id, @RequestBody(required = false) com.example.servlet.model.PageRequest page) {
        if (page == null) {
            page = new com.example.servlet.model.PageRequest();
        }
        return dataRepository.findByCategoriesId(id, PageRequest.of(page.getPage(), page.getSize()));
    }
}
