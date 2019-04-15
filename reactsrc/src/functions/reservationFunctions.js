import {AddReservationActionCreator} from "../actionCreators/reservationActionCreator";

export const AddReservation = (seat, projection, film) => {
    return dispatch => {
        dispatch(AddReservationActionCreator({seat, projection, film}))
    };
};