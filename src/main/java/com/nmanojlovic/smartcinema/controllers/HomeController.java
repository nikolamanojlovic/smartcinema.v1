package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.models.AbstractUser;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Optional;

@RestController("/")
public class HomeController {

    @Resource(name = "userService")
    IUserService userService;

    @GetMapping()
    public <T> ResponseEntity<T> index() {
        Optional<AbstractUser> user = userService.findUserByCredentials("fegwe", "gweonogw");
        if ( user.isPresent() ) {
            return null;
        } else {
            return null;
        }
    }
}
