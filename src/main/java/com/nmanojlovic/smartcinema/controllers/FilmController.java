package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.data.FilmData;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.services.IFilmService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/film")
public class FilmController extends SuperController {

    @Resource(name = "filmService")
    private IFilmService filmService;

    @GetMapping(value = "/all")
    public ResponseEntity<String> films() {
        return sendResponse(filmService.findAllFilms(), ArrayList.class, HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<String> film(@PathVariable("id") String id) {
        return sendResponse(filmService.findFilmById(id), FilmData.class, HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/projections/{id}")
    public ResponseEntity<String> projections(@PathVariable("id") String id) {
        return sendResponse(filmService.findProjectionsForFilm(id), ArrayList.class, HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/projections/seats/{projection}")
    public ResponseEntity<String> availableSeats(@PathVariable("projection") String projection) {
        ProjectionData projectionData = getGson().fromJson(projection, ProjectionData.class);

        return sendResponse(filmService.findAvailableSeatsForFilmAndProjection(projectionData.getFilmId(), projectionData),
                ArrayList.class, HttpStatus.NO_CONTENT);
    }
}
