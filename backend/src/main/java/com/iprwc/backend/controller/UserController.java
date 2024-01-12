package com.iprwc.backend.controller;

import com.iprwc.backend.dto.UserDto;
import com.iprwc.backend.model.User;
import com.iprwc.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/private/users/")
    public ResponseEntity<List<User>> getAllUsers() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto reqUser = (UserDto) authentication.getPrincipal();

        if (reqUser.getRole().matches("admin")) {
            try {
                List<User> users = userRepository.findAll();
                return ResponseEntity.ok(users);
            } catch (Exception e) {
                System.out.println(e);
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }

    }

    @PostMapping("/private/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto reqUser = (UserDto) authentication.getPrincipal();

        if (reqUser.getRole().matches("admin")) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            try {
                User _user = userRepository.save(user);
                return ResponseEntity.ok(_user);
            } catch (Exception e) {
                System.out.println(e);
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/private/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto reqUser = (UserDto) authentication.getPrincipal();

        if (reqUser.getRole().matches("admin")) {
            try {
                User user = userRepository.findById(id).get();
                return ResponseEntity.ok(user);
            } catch (Exception e) {
                System.out.println(e);
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/private/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto reqUser = (UserDto) authentication.getPrincipal();

        if (reqUser.getRole().matches("admin")) {
            try {
                userRepository.deleteById(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } catch (Exception e) {
                System.out.println(e);
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }


}
