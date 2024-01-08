package com.iprwc.backend.mappers;

import com.iprwc.backend.dto.UserDto;
import com.iprwc.backend.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
}
