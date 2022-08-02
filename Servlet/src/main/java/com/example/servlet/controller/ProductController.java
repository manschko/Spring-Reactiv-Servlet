package com.example.servlet.controller;

import com.example.servlet.model.Category;
import com.example.servlet.model.Product;
import com.example.servlet.model.Variant;
import com.example.servlet.repository.ProductRepository;
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
        //TODO not working
        logger.info("Creating product:");
        Product test = new Product();
        this.dataRepository.save(product);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/vendors")
    public void getVendors() {
        logger.info("getVendors");
    }
    @RequestMapping(method = RequestMethod.GET, path = "/vendor/{id}")
    public void getVendorById() {
        logger.info("getVendorById");
    }

    @RequestMapping(method = RequestMethod.GET, path = "/vendor/{id}/products")
    public void getVendorProducts() {
        logger.info("getVendorProducts");
    }


    @RequestMapping(method = RequestMethod.POST, path = "/vendor")
    public void createVendor() {
        logger.info("createVendor");
    }

    @RequestMapping(method = RequestMethod.GET, path = "/categories")
    public void getCategories() {
        logger.info("getCategories");
    }

    @RequestMapping(method = RequestMethod.POST, path = "/category")
    public void createCategory() {
        logger.info("createCategory");
    }

    @RequestMapping(method = RequestMethod.GET, path = "/category/{id}")
    public void getCategoryById() {
        logger.info("getCategoryById");
    }

    @RequestMapping(method = RequestMethod.GET, path = "/category/{id}/products")
    public void getProductsByCategoryId() {
        logger.info("getProductsByCategoryId");
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
