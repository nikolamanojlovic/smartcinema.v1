package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.services.IFilmService;
import com.nmanojlovic.smartcinema.services.IHallService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/hall")
public class HallController extends SuperController {

    @Resource(name = "hallService")
    private IHallService hallService;

    @GetMapping(value = "/all")
    public ResponseEntity<String> halls() {
        return sendResponse(hallService.findAllHalls(), ArrayList.class, HttpStatus.NO_CONTENT);
    }
}
