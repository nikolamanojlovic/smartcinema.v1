import ReservationActionTypes from "../actionTypes/reservationActionTypes";

export const AddReservationActionCreator = reservation => {
    return {
        type: ReservationActionTypes.ADD_RESERVATION,
        payload: reservation
    };
};