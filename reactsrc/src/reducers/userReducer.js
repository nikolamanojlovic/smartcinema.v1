import userActionTypes from "../actionTypes/userActionTypes";

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            return {...state, user: action.payload};
        case userActionTypes.LOG_OUT:
            return {...state, user: {}};
        default:
            return {...state};
    }
};

export default UserReducer;