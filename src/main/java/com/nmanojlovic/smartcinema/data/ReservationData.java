package com.nmanojlovic.smartcinema.data;

import com.nmanojlovic.smartcinema.models.Projection;

public class ReservationData {

    private SeatData seat;
    private ProjectionData projection;

    public SeatData getSeat() {
        return seat;
    }

    public void setSeat(SeatData seat) {
        this.seat = seat;
    }

    public ProjectionData getProjection() {
        return projection;
    }

    public void setProjection(ProjectionData projection) {
        this.projection = projection;
    }
}
