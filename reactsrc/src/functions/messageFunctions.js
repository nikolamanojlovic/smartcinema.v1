import {ClearMessageActionCreator} from "../actionCreators/messageActionCreators";

export const ClearMessage = () => {
    return (dispatch) => {
        dispatch(ClearMessageActionCreator)
    };
};