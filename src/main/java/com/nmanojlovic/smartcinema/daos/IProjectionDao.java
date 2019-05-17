package com.nmanojlovic.smartcinema.daos;

import com.nmanojlovic.smartcinema.models.Projection;
import com.nmanojlovic.smartcinema.models.ProjectionId;

import java.util.List;

public interface IProjectionDao extends ISuperDao<Projection, ProjectionId> {

    List<Projection> findProjectionsByFilmId(String filmId);

    Projection findProjectionById(ProjectionId id, String filmId, String hallId);
}
