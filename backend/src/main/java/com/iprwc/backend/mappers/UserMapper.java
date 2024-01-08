package com.iprwc.backend.mappers;

import com.iprwc.backend.dto.SignUpDto;
import com.iprwc.backend.dto.UserDto;
import com.iprwc.backend.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    User signUpToUser(SignUpDto signUpDto);
}
