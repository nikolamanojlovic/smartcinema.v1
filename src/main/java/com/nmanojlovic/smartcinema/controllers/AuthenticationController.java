package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Optional;

@RestController("/auth")
public class AuthenticationController {

    @Resource(name = "userService")
    IUserService userService;

    @GetMapping(value = "/login")
    public ResponseEntity<User> login(@RequestParam(name = "email") String email, @RequestParam(name = "password") String password) {
        Optional<User> user = userService.findUserByCredentials(email, password);

        if ( user.isPresent() ) {
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
}
