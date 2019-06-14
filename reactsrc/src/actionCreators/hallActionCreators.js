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

export const ClearAllHallsActionCreator = () => {
    return {
        type: HallActionTypes.CLEAR_ALL_HALLS
    };
};

export const ClearProjectionsForHallActionCreator = () => {
    return {
        type: HallActionTypes.CLEAR_PROJECTIONS_FOR_HALL
    };
};