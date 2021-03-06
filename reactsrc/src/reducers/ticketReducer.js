import TicketActionTypes from "../actionTypes/ticketActionTypes";

const TicketReducer = (state = {}, action) => {
    switch (action.type) {
        case TicketActionTypes.CREATE_TICKET:
            return {...state, ticket: {entries: [], user: action.payload}};
        case TicketActionTypes.REMOVE_TICKET:
            return {...state, orders: [], ticket: {entries: [], user: {}}};
        case TicketActionTypes.ADD_TO_CART:
            return {
                ...state, ...state.ticket.entries.push({
                    on: state.ticket.entries.length + 1,
                    reservation: action.payload
                })
            };
        case TicketActionTypes.REMOVE_FROM_CART:
            return {...state, ticket: {...state.ticket, entries: action.payload}};
        case TicketActionTypes.SUBMIT_CART:
            return {...state, ticket: {...state.ticket, entries: []}};
        case TicketActionTypes.GET_ORDERS:
            return {...state, orders: action.payload};
        default:
            return {...state};
    }
};

export default TicketReducer;