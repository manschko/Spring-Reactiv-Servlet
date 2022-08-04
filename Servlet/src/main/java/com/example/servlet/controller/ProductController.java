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
import org.springframework.web.bind.annotation.PathVariable;
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

    @RequestMapping(method = RequestMethod.GET, path = "/products")
    public List<Product> getProduct() {
        List<Product> products = dataRepository.findAll();
        for (Product product : products) {
            cleanupProduct(product);
        }
        return products;

    }

    @RequestMapping(method = RequestMethod.GET, path = "/product/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        Optional<Product> product = dataRepository.findById(id);
        product.ifPresent(this::cleanupProduct);
        return product.orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/product")
    public void createProduct(@RequestBody Product product) {
        //TODO not working, null
        logger.info("Creating product:");
        this.categoryRepository.saveAll(product.getCategories());
        this.dataRepository.save(product);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/vendors")
    public List<Vendor> getVendors() {
        List<Vendor> vendors = vendorRepository.findAll();
        for (Vendor vendor : vendors) {
            for (Product product : vendor.getProducts()) {
                cleanupProduct(product);
            }
        }
        return vendors;
    }
    @RequestMapping(method = RequestMethod.GET, path = "/vendor/{id}")
    public Vendor getVendorById(@PathVariable("id") Long id) {
        Vendor vendor = vendorRepository.findById(id).orElse(null);
        if(vendor == null) {
            return null;
        }
        for (Product product : vendor.getProducts()) {
            cleanupProduct(product);
        }
        return vendor;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/vendor/{id}/products")
    public List<Product> getVendorProducts(@PathVariable("id") Long id) {
        List<Product> products = dataRepository.findByVendorId(id);
        for (Product product : products) {
            cleanupProduct(product);
        }
        return products;
    }


    @RequestMapping(method = RequestMethod.POST, path = "/vendor")
    public void createVendor(@RequestBody Vendor vendor) {
        vendorRepository.save(vendor);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/categories")
    public List<Category> getCategories() {
        List<Category> categories = categoryRepository.findAll();
        for (Category category : categories) {
            for (Product product : category.getProducts()) {
                cleanupProduct(product);
            }
        }
        return categories;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/category")
    public void createCategory(@RequestBody Category category) {
        categoryRepository.save(category);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/category/{id}")
    public Category getCategoryById(@PathVariable("id") Long id) {
        Category category = categoryRepository.findById(id).orElse(null);
        if(category == null) {
            return null;
        }
        for (Product product : category.getProducts()) {
            cleanupProduct(product);
        }
        return category;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/category/{id}/products")
    public List<Product> getProductsByCategoryId(@PathVariable("id") Long id) {
        List<Product> products = dataRepository.findByCategoriesId(id);
        for (Product product : products) {
            cleanupProduct(product);
        }
        return products;
    }




    private void cleanupProduct(Product product) {
        product.getVendor().setProducts(null);
        for(Variant variant : product.getVariants()) {
            variant.setProduct(null);
        }
        for(Category category : product.getCategories()) {
            category.setProducts(null);
        }
    }
}
