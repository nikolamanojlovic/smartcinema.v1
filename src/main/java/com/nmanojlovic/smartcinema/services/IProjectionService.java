package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.ProjectionData;

import java.util.HashMap;

public interface IProjectionService {

   boolean saveProjection(ProjectionData projection);

   ProjectionData prepareProjectionDataFromMap(HashMap map);
}