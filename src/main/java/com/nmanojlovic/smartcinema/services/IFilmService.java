package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.FilmData;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.data.SeatData;

import java.util.List;
import java.util.Optional;

public interface IFilmService {

    Optional<List<FilmData>> findAllFilms();

    Optional<FilmData> findFilmById(String id);

    Optional<List<ProjectionData>> findProjectionsForFilm(String filmId);

    Optional<List<SeatData>> findAvailableSeatsForFilmAndProjection(String filmId, ProjectionData projection);
}
