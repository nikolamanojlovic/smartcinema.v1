package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.FilmData;

import java.util.List;
import java.util.Optional;

public interface IFilmService {

    Optional<List<FilmData>> findAllFilms();

    Optional<FilmData> finFilmById(String id);
}
