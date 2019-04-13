package com.nmanojlovic.smartcinema.models;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@EnableAutoConfiguration
@Entity
@Table(name = "hall")
public class Hall implements Serializable {

    public Hall() {}

    public Hall(long id, String name, List<Seat> seats) {
        this.id = id;
        this.name = name;
        this.seats = seats;
    }

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "hall", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Seat> seats;

    @OneToMany(mappedBy = "hall", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Projection> projections;

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public List<Seat> getSeats() { return seats; }

    public void setSeats(List<Seat> seats) { this.seats = seats; }

    public List<Projection> getProjections() { return projections; }

    public void setProjections(List<Projection> projections) { this.projections = projections; }
}
