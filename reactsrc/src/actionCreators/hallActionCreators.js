import HallActionTypes from "../actionTypes/hallActionTypes";

export const GetHallsActionCreator = halls => {
    return {
        type: HallActionTypes.GET_ALL_HALLS,
        payload: halls
    };
};

export const GetProjectionForHallByIdActionCreator = projections => {
    return {
        type: HallActionTypes.GET_PROJECTION_BY_HALL_ID,
        payload: projections
    };
};