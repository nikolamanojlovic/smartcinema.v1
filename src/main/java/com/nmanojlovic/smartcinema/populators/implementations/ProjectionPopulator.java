package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.FilmData;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.models.Film;
import com.nmanojlovic.smartcinema.models.Projection;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import com.nmanojlovic.smartcinema.utils.DateUtils;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component(value = "projectionPopulator")
public class ProjectionPopulator implements ISuperPopulator<Projection, ProjectionData> {

    @Override
    public ProjectionData populate(Projection model) {
        ProjectionData data = new ProjectionData();
        data.setDate(model.getId().getDate());
        data.setStartTime(model.getId().getStartTime());
        data.setEndTime(model.getId().getEndTime());

        return data;
    }

    @Override
    public List<ProjectionData> populateList(List<Projection> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
