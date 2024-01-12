package com.iprwc.backend.seeders;

import com.iprwc.backend.model.User;
import com.iprwc.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

public class UserSeeder {
    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        return args -> {
            if(userRepository.count() == 0) { // Check if the database is empty
                // Create and save demo data
                User demoUser = new User();
                demoUser.setLogin("Admin");
                demoUser.setPassword("Admin");
                demoUser.setRole("admin");
                userRepository.save(demoUser);

                // Create and save demo data
                demoUser = new User();
                demoUser.setLogin("Demo");
                demoUser.setPassword("Demo");
                userRepository.save(demoUser);
            }
        };
    }
}
