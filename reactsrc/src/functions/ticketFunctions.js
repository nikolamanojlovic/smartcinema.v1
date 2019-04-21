import {
    AddReservationActionCreator,
    AddToCartActionCreator,
    CreateTicketActionCreator,
    RemoveFromCartActionCreator,
    RemoveTicketActionCreator,
    SubmitCartActionCreator
} from "../actionCreators/ticketActionCreator";
import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";

export const CreateTicketForCurrentUser = user => {
    return dispatch => {
        dispatch(CreateTicketActionCreator(user));
    }
};

export const RemoveTicketForCurrentUser = () => {
    return dispatch => {
        dispatch(RemoveTicketActionCreator());
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
        axios.post(API_URL + '/ticket/save', ticket).then((response) => {
            if ( response.data === true ) {
                dispatch(SubmitCartActionCreator());
            }
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Credentials are not valid!"));
        })
    };
};