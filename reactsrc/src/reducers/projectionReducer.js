import ProjectionActionTypes from "../actionTypes/projectionActionTypes";

const ProjectionReducer = (state = [], action) => {
    switch (action.type) {
        case ProjectionActionTypes.CREATE_PROJECTION:
            return {...state, ...state.createdProjections.push(action.payload)};
        default:
            return {...state};
    }
};

export default ProjectionReducer;