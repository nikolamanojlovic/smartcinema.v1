import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import MessageReducer from "./reducers/messageReducer";
import {loadState, saveState} from "./persist";
import FilmReducer from "./reducers/filmReducer";
import ReservationReducer from "./reducers/reservationReducer";

const reducers = combineReducers({
    UserReducer,
    MessageReducer,
    FilmReducer,
    ReservationReducer
});

const store = createStore(
    reducers,
    loadState(),
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    //this is just a function that saves state to localStorage
    console.log(store.getState());
    saveState(store.getState());
});

export default store;