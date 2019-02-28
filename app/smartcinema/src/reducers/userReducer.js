import {userConstants} from "../constants/userConstants";

/*
     Authentication reducer manages the application state for user authentication
 */
export const userReducer = (state = {user: []}, action) => {
    switch (action.type) {
        case userConstants.LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                user: {}
            };
        case userConstants.GET_USER:
            return state.user;
        default:
            return state
    }
};