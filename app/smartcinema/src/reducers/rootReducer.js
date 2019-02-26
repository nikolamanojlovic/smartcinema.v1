import {combineReducers} from "redux";
import {alertReducer} from "./alertReducer";
import {authenticationReducer} from "./authenticationReducer";

export const rootReducer = combineReducers({
    alertReducer,
    authenticationReducer,
});