import messageActionType from "../actionTypes/messageActionTypes";

const MessageReducer = (state = [], action) => {
    switch (action.type) {
        case messageActionType.SUCCESS:
            return {...state, message : {success : action.payload} };
        case messageActionType.ERROR:
            return {...state, message : {error : action.payload}};
        case messageActionType.CLEAR:
            return {...state, message : {}};
        default:
            return {...state};
    }
};

export default MessageReducer;