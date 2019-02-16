import {userConstants} from "../constants/userConstants";

/*
     Authentication reducer manages the application state for user authentication
 */
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                error: action.payload
            };
        case userConstants.LOGOUT:
            return {
                loggedIn: false
            };
        default:
            return state
    }
}