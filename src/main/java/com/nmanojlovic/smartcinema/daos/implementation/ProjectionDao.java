package com.nmanojlovic.smartcinema.daos.implementation;

import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IProjectionDao;
import com.nmanojlovic.smartcinema.models.Projection;
import com.nmanojlovic.smartcinema.models.ProjectionId;
import com.nmanojlovic.smartcinema.utils.DateUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
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

        return getEntityManager().createQuery(Constants.FROM_WHERE_COMPLEX.replace(":table", getModelName() + " P ")
                        .replace(":condition", "film = '" + filmId + "'" +
                                " AND CAST(P.id.date AS date) >= CURRENT_DATE" +
                                " AND P.id.endTime >= CURRENT_TIME"), Projection.class).getResultList();
    }

    @Override
    public Projection findProjectionById(ProjectionId id, String filmId, String hallId) {
        return id == null || StringUtils.isBlank(filmId) || StringUtils.isBlank(hallId) ? null :
                (Projection) getEntityManager().createQuery(Constants.FROM_WHERE_COMPLEX
                .replace(":table", getModelName() + " P ")
                .replace(":condition", "film = '" + filmId + "' AND hall = '" + hallId + "' AND " +
                        " CAST(P.id.date AS date) = '" + DateUtils.getStringFromDate(id.getDate(), Constants.MYSQL_DATE_FORMAT) +
                        "' AND P.id.startTime = '" + id.getStartTime() + "' AND P.id.endTime = '" + id.getEndTime() + "'")
        ).getSingleResult();
    }
}
