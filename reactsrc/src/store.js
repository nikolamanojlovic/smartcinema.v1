import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {};
const reducers = combineReducers({

});

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);

export default store;