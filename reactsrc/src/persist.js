export function saveState(state) {
    try {
        let serializedState = JSON.stringify(state);
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
        }
    };
}