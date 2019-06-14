package com.nmanojlovic.smartcinema.services.implementation;

import com.google.gson.Gson;
import com.nmanojlovic.smartcinema.constants.Constants;
import com.nmanojlovic.smartcinema.daos.IProjectionDao;
import com.nmanojlovic.smartcinema.data.HallData;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.services.IProjectionService;
import com.nmanojlovic.smartcinema.utils.DateUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

@Service("projectionService")
public class ProjectionService implements IProjectionService {

    @Resource(name = "projectionDao")
    private IProjectionDao projectionDao;

    @Resource
    private Gson gson;

    @Override
    public boolean saveProjection(ProjectionData projection) {
        try {
            projectionDao.depopulateProjectionAndSave(projection);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public ProjectionData prepareProjectionDataFromMap(HashMap map) {
        ProjectionData projectionData = new ProjectionData();
        projectionData.setDate(DateUtils.getDateFromString((String) map.get("date"), Constants.MYSQL_DATE_FORMAT));
        projectionData.setStartTime(LocalTime.parse((String) map.get("startTime"), DateTimeFormatter.ISO_TIME));
        projectionData.setEndTime(LocalTime.parse((String) map.get("endTime"), DateTimeFormatter.ISO_TIME));
        projectionData.setHallData(gson.fromJson(gson.toJson(map.get("hallData")), HallData.class));
        projectionData.setFilmId((String) map.get("filmId"));
        return projectionData;
    }
}