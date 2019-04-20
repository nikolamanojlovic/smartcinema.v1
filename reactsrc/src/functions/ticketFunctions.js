import {
    AddReservationActionCreator,
    AddToCartActionCreator,
    CreateTicketActionCreator, RemoveFromCartActionCreator, SubmitCartActionCreator
} from "../actionCreators/ticketActionCreator";
import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";

export const CreateTicketForCurrentUser = user => {
  return dispatch => {
      dispatch(CreateTicketActionCreator(user));
  }
};

export const AddToCart = (seat, projection) => {
    return dispatch => {
        dispatch(AddToCartActionCreator({seat, projection}));
    };
};

export const RemoveFromCart = (entries) => {
    return dispatch => {
        dispatch(RemoveFromCartActionCreator(entries));
    };
};

export const SubmitCart = (ticket) => {
        return dispatch => {
        dispatch(SubmitCartActionCreator(ticket));
    };
};