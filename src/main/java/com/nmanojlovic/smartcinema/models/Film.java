package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "film")
public class Film {

    public Film() {}

    public Film(String id, String title, int year, int duration, String plot, String poster, double costOfPlay, List<Projection> projections) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.plot = plot;
        this.poster = poster;
        this.costOfPlay = costOfPlay;
        this.projections = projections;
    }

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "title")
    private String title;

    @Column(name = "year")
    private int year;

    @Column(name = "duration")
    private int duration;

    @Column(name = "plot")
    private String plot;

    @Column(name = "poster")
    private String poster;

    @Column(name = "cost_of_play")
    private double costOfPlay;

    @OneToMany(mappedBy = "film", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Projection> projections;

    public String getId() { return id; }

    public void setId(String id) { this.id = id; }

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

    public double getCostOfPlay() { return costOfPlay; }

    public void setCostOfPlay(double costOfPlay) { this.costOfPlay = costOfPlay; }

    public List<Projection> getProjections() { return projections; }

    public void setProjections(List<Projection> projections) { this.projections = projections; }
}
