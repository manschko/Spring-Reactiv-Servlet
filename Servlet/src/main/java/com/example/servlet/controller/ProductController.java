package com.example.servlet.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ProductController {

    Logger logger = LoggerFactory.getLogger(ProductController.class);

    @RequestMapping(method = RequestMethod.GET, path = "/products")
    public void getProduct() {
        logger.info("getProducts");
    }

    @RequestMapping(method = RequestMethod.GET, path = "/product/{id}")
    public void getProductById() {
        logger.info("getProductById");
    }

    @RequestMapping(method = RequestMethod.POST, path = "/product")
    public void createProduct() {
        logger.info("createProduct");
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



}
