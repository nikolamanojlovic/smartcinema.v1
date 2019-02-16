package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "film")
public class Film {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "cost_of_play")
    private double costOfPlay;

    @ManyToMany(mappedBy = "films")
    private List<Genre> genres;

    @OneToMany(mappedBy = "film", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Projection> projections;

    public String getId() { return id; }

    public void setId(String id) { this.id = id; }

    public double getCostOfPlay() { return costOfPlay; }

    public void setCostOfPlay(double costOfPlay) { this.costOfPlay = costOfPlay; }

    public List<Genre> getGenres() { return genres; }

    public void setGenres(List<Genre> genres) { this.genres = genres; }

    public List<Projection> getProjections() { return projections; }

    public void setProjections(List<Projection> projections) { this.projections = projections; }
}
