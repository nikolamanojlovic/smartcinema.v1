import store from "./store";

export function saveState(state) {
    try {
        let serializedState = JSON.stringify(state);

        console.log(state);
        localStorage.setItem("http://localhost:state", serializedState);
    } catch (err) {
        console.log(err.message);
    }
}

export function loadState() {
    try {
        let serializedState = localStorage.getItem("http://localhost:state");

        if (serializedState === null) {
            return initializeState();
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return initializeState();
    }
}

export function initializeState() {
    return {
        UserReducer: {
            user: {}
        },
        MessageReducer: {
            message: {}
        },
        FilmReducer: {
            films: [],
            film: {},
            projections: [],
            seats: []
        },
        TicketReducer: {
            ticket: {
                entries: [],
                user: {}
            },
            order: []
        }
    };
}