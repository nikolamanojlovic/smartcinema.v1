import messageActionType from "../actionTypes/messageActionTypes";

const MessageReducer = (state = {message : {}}, action) => {
    switch (action.type) {
        case messageActionType.SUCCESS:
            return Object.assign({}, state, { message : {success : action.payload} });
        case messageActionType.ERROR:
            return {...state, message : {error : action.payload}};
        case messageActionType.CLEAR:
            return {...state, message : {}};
        default:
            return state;
    }
};

export default MessageReducer;