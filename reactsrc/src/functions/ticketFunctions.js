import {
    AddToCartActionCreator,
    CreateTicketActionCreator,
    GetOrdersActionCreator,
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
            } else {
                dispatch(ErrorMessageActionCreator("Your cart could not be saved, check again if seats are not already reserved."));
            }
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with submitting cart!"));
        })
    };
};

export const GetOrdersForCurrentUser = (user) => {
    return dispatch => {
        axios.get(API_URL + '/ticket/orders/' + user).then((response) => {
            dispatch(GetOrdersActionCreator(response.data))
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching orders!"));
        })
    };
};