package com.nmanojlovic.smartcinema.controllers;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import javax.annotation.Resource;
import java.util.Optional;

public abstract class SuperController {

    @Resource
    private Gson gson;

    protected <T> ResponseEntity<String> sendResponse(Optional<T> data, Class dataType, HttpStatus fail) {
        if (data.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .body(gson.toJson(data.get(), dataType));
        }
        return ResponseEntity.status(fail).body(null);
    }

    public Gson getGson() {
        return gson;
    }
}
