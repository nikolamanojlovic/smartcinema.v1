import userActionTypes from "../actionTypes/userActionTypes";

const UserReducer = (state = {user : {}}, action) => {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            state.user = action.payload;
            break;
        case userActionTypes.LOG_OUT:
            state.user = {};
            break;
        case userActionTypes.GET_USER:
            return state.user;
        default:
            return state;
    }
};

export default UserReducer;