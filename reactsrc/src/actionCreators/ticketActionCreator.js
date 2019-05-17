import TicketActionTypes from "../actionTypes/ticketActionTypes";

export const CreateTicketActionCreator = user => {
    return {
        type: TicketActionTypes.CREATE_TICKET,
        payload: user
    };
};

export const RemoveTicketActionCreator = () => {
    return {
        type: TicketActionTypes.REMOVE_TICKET,
    };
};

export const AddToCartActionCreator = reservation => {
    return {
        type: TicketActionTypes.ADD_TO_CART,
        payload: reservation
    };
};

export const RemoveFromCartActionCreator = entries => {
    return {
        type: TicketActionTypes.REMOVE_FROM_CART,
        payload: entries
    };
};

export const SubmitCartActionCreator = () => {
    return {
        type: TicketActionTypes.SUBMIT_CART,
    };
};

export const GetOrdersActionCreator = user => {
    return {
        type: TicketActionTypes.GET_ORDERS,
        payload: user
    };
};