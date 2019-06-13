package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.models.Film;

import java.util.List;

public interface IFilmDao extends ISuperDao<Film, String> {

    List<Film> findAllPagination(int pagination);
}
