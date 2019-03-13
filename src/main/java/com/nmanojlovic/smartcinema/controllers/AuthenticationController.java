package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController("/auth")
public class AuthenticationController {

    @Resource(name = "userService")
    IUserService userService;

    @PostMapping(value = "/login")
    public ResponseEntity<User> login(@RequestBody String payload) {
       /*
        Optional<User> user = userService.findUserByCredentials(email, password);

        if ( user.isPresent() ) {
            return ResponseEntity.ok(user.get());
        }*/
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
}
