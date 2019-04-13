package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.FilmData;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.models.Projection;

import java.util.List;
import java.util.Optional;

public interface IFilmService {

    Optional<List<FilmData>> findAllFilms();

    Optional<FilmData> finFilmById(String id);

    Optional<List<ProjectionData>> findProjectionsForFilm(String filmId);
}
