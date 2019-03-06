import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};
const reducers = combineReducers({
    UserReducer
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;