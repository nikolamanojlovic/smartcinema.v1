package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IFilmDao;
import com.nmanojlovic.smartcinema.models.Film;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("filmDao")
public class FilmDao extends SuperDao<Film, String> implements IFilmDao {

    public FilmDao() {
        this.model = Film.class;
    }

    @Override
    protected String getModelName() {
        return " " + Film.class.getSimpleName() + " ";
    }

    @Override
    public List<Film> findAllPagination(int pagination) {
        pagination = pagination-1;
        return getEntityManager().createQuery(Constants.FROM + getModelName(), Film.class)
                .setFirstResult((Constants.PAGE_SIZE-1)*pagination).setMaxResults(Constants.PAGE_SIZE).getResultList();
    }
}
