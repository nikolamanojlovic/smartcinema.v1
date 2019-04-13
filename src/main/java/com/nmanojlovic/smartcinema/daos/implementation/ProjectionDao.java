package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.daos.IProjectionDao;
import com.nmanojlovic.smartcinema.models.Hall;
import com.nmanojlovic.smartcinema.models.Projection;
import com.nmanojlovic.smartcinema.models.ProjectionId;
import org.springframework.stereotype.Repository;

@Repository("projectionDao")
public class ProjectionDao  extends SuperDao<Projection, ProjectionId> implements IProjectionDao {

    public ProjectionDao() {
        this.model = Projection.class;
    }

    @Override
    protected String getModelName() {
        return " " + Projection.class.getSimpleName() + " ";
    }
}
