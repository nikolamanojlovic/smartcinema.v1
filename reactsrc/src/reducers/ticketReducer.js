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
        default:
            return {...state};
    }
};

export default TicketReducer;