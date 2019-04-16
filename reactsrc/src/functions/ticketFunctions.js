import {
    AddReservationActionCreator,
    AddToCartActionCreator,
    CreateTicketActionCreator
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
        console.log("hello");
        dispatch(AddToCartActionCreator({seat, projection}));
    };
};