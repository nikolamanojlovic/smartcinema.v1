package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IProjectionDao;
import com.nmanojlovic.smartcinema.models.Projection;
import com.nmanojlovic.smartcinema.models.ProjectionId;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("projectionDao")
public class ProjectionDao  extends SuperDao<Projection, ProjectionId> implements IProjectionDao {

    public ProjectionDao() {
        this.model = Projection.class;
    }

    @Override
    protected String getModelName() {
        return " " + Projection.class.getSimpleName() + " ";
    }

    @Override
    public List<Projection> findProjectionsByFilmId(String filmId) {
        if (StringUtils.isBlank(filmId) ) {
            return null;
        }

        return getEntityManager().createQuery(Constants.FROM_WHERE.replace(":table", getModelName())
                        .replace(":field", "film")
                        .replace(":value", filmId)).getResultList();
    }
}
