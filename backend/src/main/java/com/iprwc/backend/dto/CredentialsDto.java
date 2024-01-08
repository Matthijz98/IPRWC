package com.iprwc.backend.dto;

// Make this class immutable by making it a record
public record CredentialsDto(String login, String password) {

}
