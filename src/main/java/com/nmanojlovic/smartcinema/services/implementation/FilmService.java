package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.IFilmDao;
import com.nmanojlovic.smartcinema.models.Film;
import com.nmanojlovic.smartcinema.services.IFilmService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("filmService")
public class FilmService implements IFilmService {

    @Resource(name = "filmDao")
    private IFilmDao filmDao;

    @Override
    public Optional<List<Film>> findAllFilms() {
        return Optional.ofNullable(filmDao.findAll());
    }

    @Override
    public Optional<Film> finFilmById(String id) {
        return Optional.ofNullable(filmDao.findById(id));
    }
}
