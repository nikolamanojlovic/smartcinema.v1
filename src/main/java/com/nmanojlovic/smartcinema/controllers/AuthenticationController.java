package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.data.CredentialsData;
import com.nmanojlovic.smartcinema.data.UserData;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthenticationController extends SuperController {

    @Resource(name = "userService")
    private IUserService userService;

    @PostMapping(value = "/login")
    public ResponseEntity<String> login(@RequestBody String payload) {
        CredentialsData credentials = getGson().fromJson(payload, CredentialsData.class);

        return sendResponse(
                userService.findUserByCredentials(credentials.getEmail(), credentials.getPassword()),
                UserData.class, HttpStatus.UNAUTHORIZED
        );
    }
}
