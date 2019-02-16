package com.nmanojlovic.smartcinema.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.time.LocalTime;
import java.util.Date;

@Embeddable
public class ProjectionId {

    @Column(name = "date")
    private Date date;

    @Column(name = "start_time")
    private LocalTime startTime;

    @Column(name = "end_time")
    private LocalTime  startDate;

    public Date getDate() { return date; }

    public void setDate(Date date) { this.date = date; }

    public LocalTime getStartTime() { return startTime; }

    public void setStartTime(LocalTime startTime) { this.startTime = startTime; }

    public LocalTime getStartDate() { return startDate; }

    public void setStartDate(LocalTime startDate) { this.startDate = startDate; }
}
