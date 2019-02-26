import {alertConstants} from "../constants/alertConstants";

/*
     Alert reducer manages the application state for alerts
 */
export const alertReducer = (state = {}, action) => {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.payload
            };
        case alertConstants.ERROR:
            return {
                type: 'error',
                message: action.payload
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
};