package com.iprwc.backend.controller;

import com.iprwc.backend.dto.UserDto;
import com.iprwc.backend.model.Address;
import com.iprwc.backend.repository.AddressRepository;
import com.iprwc.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class AddressController {

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    UserService userService;

    @GetMapping("/private/addresses/")
    public ResponseEntity<List<Address>> getAllAddresses() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto reqUser = (UserDto) authentication.getPrincipal();

        System.out.println(reqUser.getId());
        // get all the addresses from the user that made the request
        List<Address> addresses = addressRepository.findAllByUserId(reqUser.getId());
        return ResponseEntity.ok(addresses);
    }

    @PostMapping("/private/addresses")
    public ResponseEntity<Address> createAddress(@RequestBody Address address) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto reqUser = (UserDto) authentication.getPrincipal();

        System.out.println(address);

        address.setUser(userService.findById(reqUser.getId().longValue()));
        Address newAddress = addressRepository.save(address);
        return ResponseEntity.ok(newAddress);
    }
}
