package com.example.servlet.controller;

import com.example.servlet.model.Category;
import com.example.servlet.model.Product;
import com.example.servlet.model.Variant;
import com.example.servlet.model.Vendor;
import com.example.servlet.repository.CategoryRepository;
import com.example.servlet.repository.ProductRepository;
import com.example.servlet.repository.VendorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
public class ProductController {

    Logger logger = LoggerFactory.getLogger(ProductController.class);
    @Autowired
    private ProductRepository dataRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private VendorRepository vendorRepository;

    @GetMapping(path = "/products")
    public List<Product> getProduct() {
        return dataRepository.findAll();
    }

    @GetMapping(path = "/product/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return dataRepository.findById(id).orElse(null);
    }

    @PostMapping(path = "/product")
    public void createProduct(@RequestBody Product product) {
        //TODO not working, null
        logger.info("Creating product:");
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
    public List<Product> getVendorProducts(@PathVariable("id") Long id) {
        return dataRepository.findByVendorId(id);
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
    public List<Product> getProductsByCategoryId(@PathVariable("id") Long id) {
        return dataRepository.findByCategoriesId(id);
    }




//    private void cleanupProduct(Product product) {
//        product.getVendor().setProducts(null);
//        for(Variant variant : product.getVariants()) {
//            variant.setProduct(null);
//        }
//        for(Category category : product.getCategories()) {
//            category.setProducts(null);
//        }
//    }
}
