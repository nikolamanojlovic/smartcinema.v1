import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import MessageReducer from "./reducers/messageReducer";
import {loadState, saveState} from "./persist";
import FilmReducer from "./reducers/filmReducer";
import TicketReducer from "./reducers/ticketReducer";

const reducers = combineReducers({
    UserReducer,
    MessageReducer,
    FilmReducer,
    TicketReducer
});

const store = createStore(
    reducers,
    loadState(),
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;