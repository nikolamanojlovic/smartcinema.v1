import HallActionTypes from "../actionTypes/hallActionTypes";

const HallReducer = (state = [], action) => {
    switch (action.type) {
        case HallActionTypes.GET_ALL_HALLS:
            return {...state, allHalls: action.payload};
        case HallActionTypes.GET_PROJECTION_BY_HALL_ID:
            return {...state, projections: action.payload};
        case HallActionTypes.CLEAR_PROJECTIONS_FOR_HALL:
            return {...state, projections: []};
        case HallActionTypes.CLEAR_ALL_HALLS:
            return {...state, allHalls: []};
        default:
            return {...state};
    }
};

export default HallReducer;