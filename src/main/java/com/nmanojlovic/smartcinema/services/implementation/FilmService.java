package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.IFilmDao;
import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.daos.IProjectionDao;
import com.nmanojlovic.smartcinema.data.FilmData;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.data.SeatData;
import com.nmanojlovic.smartcinema.models.Film;
import com.nmanojlovic.smartcinema.models.Projection;
import com.nmanojlovic.smartcinema.models.ProjectionId;
import com.nmanojlovic.smartcinema.models.Seat;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import com.nmanojlovic.smartcinema.services.IFilmService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service("filmService")
public class FilmService implements IFilmService {

    @Resource(name = "filmDao")
    private IFilmDao filmDao;

    @Resource(name = "projectionDao")
    private IProjectionDao projectionDao;

    @Resource(name = "hallDao")
    private IHallDao hallDao;

    @Resource(name = "filmPopulator")
    ISuperPopulator<Film, FilmData> filmPopulator;

    @Resource(name = "projectionPopulator")
    ISuperPopulator<Projection, ProjectionData> projectionPopulator;

    @Resource(name = "seatPopulator")
    ISuperPopulator<Seat, SeatData> seatPopulator;

    @Override
    public Optional<List<FilmData>> findAllFilms() {
        return Optional.ofNullable(filmPopulator.populateList(filmDao.findAll()));
    }

    @Override
    public Optional<FilmData> findFilmById(String id) {
        return Optional.ofNullable(filmPopulator.populate(filmDao.findById(id)));
    }

    @Override
    public Optional<List<ProjectionData>> findProjectionsForFilm(String filmId) {
        return Optional.ofNullable(projectionPopulator.populateList(projectionDao.findProjectionsByFilmId(filmId)));
    }

    @Override
    public Optional<List<SeatData>> findAvailableSeatsForFilmAndProjection(String filmId, ProjectionData projection) {
        return Optional.ofNullable(seatPopulator.populateList(
                hallDao.findAvailableSeatsForFilmAndProjection(
                        new ProjectionId(projection.getDate(), projection.getStartTime(), projection.getEndTime()),
                        projection.getHallData().getId(), filmId
                )
        ));
    }
}
