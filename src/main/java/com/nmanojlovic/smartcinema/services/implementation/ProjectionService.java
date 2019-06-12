package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.IProjectionDao;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.services.IProjectionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("filmService")
public class ProjectionService implements IProjectionService {

    @Resource(name = "projectionDao")
    private IProjectionDao projectionDao;

    @Override
    public boolean saveProjection(ProjectionData projection) {
        try {
            projectionDao.depopulateProjectionAndSave(projection);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}