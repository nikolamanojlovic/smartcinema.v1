import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import UserReducer from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import MessageReducer from "./reducers/messageReducer";
import {loadState, saveState} from "./persist";
import FilmReducer from "./reducers/filmReducer";
import TicketReducer from "./reducers/ticketReducer";
import HallReducer from "./reducers/hallReducer";
import ProjectionReducer from "./reducers/projectionReducer";

const reducers = combineReducers({
    UserReducer,
    MessageReducer,
    FilmReducer,
    TicketReducer,
    HallReducer,
    ProjectionReducer
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