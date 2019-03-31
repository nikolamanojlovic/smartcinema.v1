package com.nmanojlovic.smartcinema.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/film")
public class FilmController {

    @GetMapping(value = "/all")
    public ResponseEntity<String> login(@RequestBody String payload) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
