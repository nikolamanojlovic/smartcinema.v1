package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.models.Hall;
import com.nmanojlovic.smartcinema.models.ProjectionId;
import com.nmanojlovic.smartcinema.models.Seat;

import java.util.List;

public interface IHallDao extends ISuperDao<Hall, Long> {

    int getMaxRowOrNumberInHall(String hallId, String parameter);

    Seat findSeatInHallById(String hallId, int row, int number);

    List<Seat> findAvailableSeatsForFilmAndProjection(ProjectionId projectionId, long hallId, String filmId);
}
