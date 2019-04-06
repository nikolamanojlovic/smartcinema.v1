import userActionTypes from "../actionTypes/userActionTypes";

export const UserLogInActionCreator = user => {
    return {
        type: userActionTypes.LOG_IN,
        payload: user
    };
};

export const UserLogOutActionCreator = () => {
    return {
        type: userActionTypes.LOG_OUT
    };
};

export const GetCurrentUserActionCreator = () => {
    return {
        type: userActionTypes.GET_USER
    };
};