import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import MessageReducer from "./reducers/messageReducer";

const initialState = {};
const reducers = combineReducers({
    UserReducer,
    MessageReducer
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;