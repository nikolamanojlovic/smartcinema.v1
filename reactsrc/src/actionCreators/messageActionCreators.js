import MessageActionTypes from "../actionTypes/messageActionTypes";

export const SuccessMessageActionCreator = message => {
    return {
        type: MessageActionTypes.SUCCESS,
        payload: message
    };
};

export const ErrorMessageActionCreator = message => {
    return {
        type: MessageActionTypes.ERROR,
        payload: message
    };
};

export const ClearMessageActionCreator = () => {
    return {
        type: MessageActionTypes.CLEAR
    };
};