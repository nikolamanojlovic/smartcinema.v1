package com.nmanojlovic.smartcinema.data;

import javax.persistence.Column;
import javax.persistence.Id;

public class FilmData {

    private String id;
    private String title;
    private int year;
    private int duration;
    private String plot;
    private String poster;
    private String cover;
    private double costOfPlay;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getPlot() {
        return plot;
    }

    public void setPlot(String plot) {
        this.plot = plot;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public double getCostOfPlay() {
        return costOfPlay;
    }

    public void setCostOfPlay(double costOfPlay) {
        this.costOfPlay = costOfPlay;
    }
}
