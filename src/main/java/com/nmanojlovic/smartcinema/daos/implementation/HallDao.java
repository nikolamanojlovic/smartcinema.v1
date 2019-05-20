package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.models.Hall;
import com.nmanojlovic.smartcinema.models.ProjectionId;
import com.nmanojlovic.smartcinema.models.Reservation;
import com.nmanojlovic.smartcinema.models.Seat;
import com.nmanojlovic.smartcinema.utils.DateUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository("hallDao")
public class HallDao extends SuperDao<Hall, Long> implements IHallDao {

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

        return (List<Seat>) getEntityManager().createNativeQuery(Constants.SELECT_ALL_FROM_AS_WHERE_COMPLEX
                .replace(":table", "seat")
                .replace(":alias", "S")
                .replace(":condition", " S.hall = '" + hallId + "' AND (S.row, S.number) NOT IN (" +
                        " SELECT R.row, R.number FROM reservation AS R WHERE " +
                        "  CAST(R.date AS date) = '" + DateUtils.getStringFromDate(projectionId.getDate(), Constants.MYSQL_DATE_FORMAT) +
                        "' AND R.start_time = '" + projectionId.getStartTime() +
                        "' AND R.end_time = '" + projectionId.getEndTime() +
                        "' AND R.film = '" + filmId + "' AND R.hall_projection = '" + hallId + "')" +
                        " ORDER BY S.row"), Seat.class)
                .getResultList();
    }
}
