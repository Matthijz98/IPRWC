package com.iprwc.backend.services;

import com.iprwc.backend.dto.CredentialsDto;
import com.iprwc.backend.dto.SignUpDto;
import com.iprwc.backend.dto.UserDto;
import com.iprwc.backend.exceptions.AppException;
import com.iprwc.backend.mappers.UserMapper;
import com.iprwc.backend.model.User;
import com.iprwc.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationContextException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByLogin(credentialsDto.login())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(credentialsDto.password(), user.getPassword())) {
            return userMapper.toUserDto(user);
        } else {
            throw new AppException("Wrong password", HttpStatus.BAD_REQUEST);
        }
    }

    public UserDto register(SignUpDto signUpDto){
        Optional<User> oUser = userRepository.findByLogin(signUpDto.login());

        if (oUser.isPresent()) {
            throw new AppException("User already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signUpToUser(signUpDto);

        user.setPassword(passwordEncoder.encode(signUpDto.password()));
        User savedUser = userRepository.save(user);

        return userMapper.toUserDto(savedUser);
    }

    public UserDto findByLogin(String login) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

    public User findById(long byUser) {
        return userRepository.findById(byUser)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
    }
}
