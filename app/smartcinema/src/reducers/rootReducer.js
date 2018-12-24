import {combineReducers} from "redux";
import {alert} from "./alertReducer"
import {authentication} from "./authenticationReducer"
import {registration} from "./registrationReducer"

export const rootReducer = combineReducers({
    alert,
    authentication,
    registration,
});