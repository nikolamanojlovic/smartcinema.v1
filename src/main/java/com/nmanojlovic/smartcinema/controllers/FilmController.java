package com.nmanojlovic.smartcinema.controllers;

import com.google.gson.Gson;
import com.nmanojlovic.smartcinema.models.Film;
import com.nmanojlovic.smartcinema.services.IFilmService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/film")
public class FilmController extends SuperController {

    @Resource(name = "filmService")
    private IFilmService filmService;

    @Resource
    private Gson gson;

    @GetMapping(value = "/all")
    public ResponseEntity<String> films() {
        Optional<List<Film>> films = filmService.findAllFilms();

        if ( films.isPresent() ) {
            return ResponseEntity.status(HttpStatus.OK).body(gson.toJson(films.get(), ArrayList.class));
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<String> film(@PathVariable("id") String id) {
        return sendResponse(filmService.finFilmById(id), Film.class, HttpStatus.NO_CONTENT);
    }
}
