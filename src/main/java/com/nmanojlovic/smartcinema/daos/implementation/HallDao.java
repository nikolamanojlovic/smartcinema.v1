package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.models.Hall;
import com.nmanojlovic.smartcinema.models.ProjectionId;
import com.nmanojlovic.smartcinema.models.Seat;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository("hallDao")
public class HallDao extends SuperDao<Hall, Long> implements IHallDao {

    private static String AVAILABLE_SEATS_QUERY = " s.hall.id=':hall'";

    public HallDao() {
        this.model = Hall.class;
    }

    @Override
    protected String getModelName() {
        return " " + Hall.class.getSimpleName() + " ";
    }

    @Override
    public List<Seat> findAvailableSeatsForFilmAndProjection(ProjectionId projectionId, long hallId, String filmId) {
        boolean isProjectionIdWrong = projectionId.getDate() == null || projectionId.getStartTime() == null || projectionId.getEndTime() == null;
        if (isProjectionIdWrong || StringUtils.isBlank(filmId)) {
            return null;
        }

        List<Seat> seats = getEntityManager().createQuery(Constants.FROM_AS_WHERE_COMPLEX
                .replace(":table", Seat.class.getSimpleName())
                .replace(":alias", "s")
                .replace(":condition", AVAILABLE_SEATS_QUERY.replace(":hall", Long.toString(hallId))))
                .getResultList();

        return seats.stream().filter(seat -> seat.getReservations().stream().noneMatch(reservation ->
                reservation.getProjection().getId().equals(projectionId) &&
                reservation.getProjection().getFilm().getId().equals(filmId) &&
                reservation.getProjection().getHall().getId() == hallId)).collect(Collectors.toList());
    }
}
