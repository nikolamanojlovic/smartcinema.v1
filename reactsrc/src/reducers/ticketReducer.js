import TicketActionTypes from "../actionTypes/ticketActionTypes";

const TicketReducer = (state = {}, action) => {
    switch (action.type) {
        case TicketActionTypes.CREATE_TICKET:
            return {...state, ticket: {entries: [], user: action.payload}};
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
        default:
            return {...state};
    }
};

export default TicketReducer;