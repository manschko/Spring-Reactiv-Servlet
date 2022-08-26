package com.example.servlet.repository;


import com.example.servlet.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {


    Page<Product> findAllByOrderByIdAsc(Pageable pageable);
    Page<Product> findByVendorId(Long vendorId, Pageable pageable);
    Page<Product> findByCategoriesId(Long categoryId, Pageable pageable);

}
