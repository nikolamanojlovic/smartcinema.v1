import HallActionTypes from "../actionTypes/hallActionTypes";

export const GetHallsActionCreator = halls => {
    return {
        type: HallActionTypes.GET_ALL_HALLS,
        payload: halls
    };
};