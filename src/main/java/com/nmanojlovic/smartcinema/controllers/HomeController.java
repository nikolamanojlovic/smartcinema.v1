package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.models.AbstractUser;
import com.nmanojlovic.smartcinema.services.IUserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Optional;

@RestController("/")
public class HomeController {

    @Resource(name = "userService")
    IUserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public Optional<AbstractUser> index() {
        return userService.findUserByEmail("fegwe");
    }
}
