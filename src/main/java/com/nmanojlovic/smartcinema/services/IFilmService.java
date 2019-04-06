package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.models.Film;

import java.util.List;
import java.util.Optional;

public interface IFilmService {

    Optional<List<Film>> findAllFilms();
}
