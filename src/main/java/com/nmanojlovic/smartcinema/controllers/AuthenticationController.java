package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.models.AbstractUser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/auth")
public class AuthenticationController {

    @GetMapping(value = "/login")
    public ResponseEntity<AbstractUser> login(@RequestParam(name = "email") String email, @RequestParam(name = "password") String password) {
        return null;
    }
}
