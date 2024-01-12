package com.iprwc.backend.seeders;

import com.iprwc.backend.model.Product;
import com.iprwc.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProductSeeder {
    @Bean
    CommandLineRunner initDatabaseProduct(ProductRepository productRepository) {
        return args -> {
            if(productRepository.count() == 0) { // Check if the database is empty
                // Create and save demo data
                Product demoProduct = new Product();
                demoProduct.setTitle("Product 1");
                demoProduct.setPrice(10);
                demoProduct.setDescription("This is a demo product");
                productRepository.save(demoProduct);

                // Create and save demo data
                demoProduct = new Product();
                demoProduct.setTitle("Product 2");
                demoProduct.setPrice(20);
                demoProduct.setDescription("This is a demo product");
                productRepository.save(demoProduct);

                // Create and save demo data
                demoProduct = new Product();
                demoProduct.setTitle("Product 3");
                demoProduct.setPrice(30);
                demoProduct.setDescription("This is a demo product");
                productRepository.save(demoProduct);
            }
        };
    }
}
