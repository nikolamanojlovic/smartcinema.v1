package com.nmanojlovic.smartcinema.populators.implementations;

import com.nmanojlovic.smartcinema.data.FilmData;
import com.nmanojlovic.smartcinema.models.Film;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component(value = "filmPopulator")
public class FilmPopulator implements ISuperPopulator<Film, FilmData> {

    @Override
    public FilmData populate(Film model) {
        FilmData data = new FilmData();
        data.setId(model.getId());
        data.setTitle(model.getTitle());
        data.setYear(model.getYear());
        data.setDuration(model.getYear());
        data.setPlot(model.getPlot());
        data.setPoster(model.getPoster());
        data.setCover(model.getCover());
        data.setCostOfPlay(model.getCostOfPlay());

        return data;
    }

    @Override
    public List<FilmData> populateList(List<Film> models) {
        return models.stream().map(this::populate).collect(Collectors.toList());
    }
}
