package com.nmanojlovic.smartcinema.data;

import java.time.LocalTime;
import java.util.Date;

public class ProjectionData {

    private Date date;
    private LocalTime startTime;
    private LocalTime endTime;
    private HallData hallData;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public HallData getHallData() {
        return hallData;
    }

    public void setHallData(HallData hallData) {
        this.hallData = hallData;
    }
}
