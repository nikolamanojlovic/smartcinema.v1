import userActionTypes from "../actionTypes/userActionTypes";

const UserReducer = (state = {user : {}}, action) => {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            console.log("loging");
            return {...state, user : action.payload};
        case userActionTypes.LOG_OUT:
            return {...state, user : {}};
        case userActionTypes.GET_USER:
            return state.user;
        default:
            return state;
    }
};

export default UserReducer;