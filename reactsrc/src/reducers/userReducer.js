import userActionTypes from "../actionTypes/userActionTypes";

const UserReducer = (state = {user : {}}, action) => {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            state.user = action.payload;
        default:
            return state;
    }
};

export default UserReducer;