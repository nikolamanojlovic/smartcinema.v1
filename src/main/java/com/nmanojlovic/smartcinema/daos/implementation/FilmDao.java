package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.daos.IFilmDao;
import com.nmanojlovic.smartcinema.models.Film;
import org.springframework.stereotype.Repository;

@Repository("filmDao")
public class FilmDao extends SuperDao<Film, String> implements IFilmDao {

    public FilmDao() {
        this.model = Film.class;
    }

    @Override
    protected String getModelName() {
        return " " + Film.class.getSimpleName() + " ";
    }
}
