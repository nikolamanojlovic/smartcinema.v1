package com.nmanojlovic.smartcinema.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.time.LocalTime;
import java.util.Date;

@Embeddable
public class ProjectionId implements Serializable {

    public ProjectionId() {}

    public ProjectionId(Date date, LocalTime startTime, LocalTime endTime) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    @Column(name = "date")
    private Date date;

    @Column(name = "start_time")
    private LocalTime startTime;

    @Column(name = "end_time")
    private LocalTime endTime;

    public Date getDate() { return date; }

    public void setDate(Date date) { this.date = date; }

    public LocalTime getStartTime() { return startTime; }

    public void setStartTime(LocalTime startTime) { this.startTime = startTime; }

    public LocalTime getEndTime() { return endTime; }

    public void setEndTime(LocalTime endTime) { this.endTime = endTime; }

    @Override
    public boolean equals(Object o) {
        if (o instanceof ProjectionId) {
            ProjectionId id = (ProjectionId) o;
            return this.date.equals(id.getDate()) && this.startTime.equals(id.getStartTime()) &&
                   this.endTime.equals(id.getEndTime());
        }
        return false;
    }
}
