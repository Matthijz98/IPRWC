package com.iprwc.backend.config;

import com.iprwc.backend.dto.ErrorDto;
import com.iprwc.backend.exceptions.AppException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler
    @ResponseBody
    public ResponseEntity<ErrorDto> handleException(AppException exception) {
        return ResponseEntity.status(exception.getHttpStatus()).body(new ErrorDto(exception.getMessage()));
    }
}
