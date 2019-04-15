import ReservationActionTypes from "../actionTypes/reservationActionTypes";

const ReservationReducer = (state = {reservations: []}, action) => {
    switch (action.type) {
        case ReservationActionTypes.ADD_RESERVATION:
            return {...state, reservations: [...state.reservations, action.payload]};
        default:
            return {...state};
    }
};

export default ReservationReducer;