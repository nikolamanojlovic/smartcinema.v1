package com.nmanojlovic.smartcinema.controllers;

import com.google.gson.Gson;
import com.nmanojlovic.smartcinema.data.CredentialsData;
import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Resource(name = "userService")
    private IUserService userService;

    @Resource
    private Gson gson;

    @PostMapping(value = "/login")
    public ResponseEntity<User> login(@RequestBody String payload) {
        CredentialsData credentials = gson.fromJson(payload, CredentialsData.class);

        Optional<User> user = userService.findUserByCredentials(credentials.getEmail(), credentials.getPassword());

        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
}
