package com.iprwc.backend.seeders;

import com.iprwc.backend.model.User;
import com.iprwc.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@RequiredArgsConstructor
@Configuration
public class UserSeeder {
    private final PasswordEncoder passwordEncoder;
    @Bean
    CommandLineRunner initDatabaseUser(UserRepository userRepository) {
        return args -> {
            if(userRepository.count() == 0) { // Check if the database is empty
                // Create and save demo data
                User demoUser = new User();
                demoUser.setLogin("admin");
                demoUser.setPassword(passwordEncoder.encode("admin"));
                demoUser.setRole("admin");
                userRepository.save(demoUser);

                // Create and save demo data
                demoUser = new User();
                demoUser.setLogin("demo");
                demoUser.setPassword(passwordEncoder.encode("demo"));
                userRepository.save(demoUser);
            }
        };
    }
}
