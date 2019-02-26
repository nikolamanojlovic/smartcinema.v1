import {userConstants} from "../constants/userConstants";

/*
     Authentication reducer manages the application state for user authentication
 */
export const authenticationReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.LOGIN:
            return {
                user: action.payload
            };
        case userConstants.LOGOUT:
            return {
                user: {}
            };
        default:
            return state
    }
};