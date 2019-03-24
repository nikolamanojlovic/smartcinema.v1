import userActionTypes from "../actionTypes/userActionTypes";

export const UserLogInActionCreator = user => {
    return {
        type: userActionTypes.LOG_IN,
        payload: user
    };
};

export const GetCurrentUserActionCreator = () => {
    return {
        type: userActionTypes.GET_USER
    };
};