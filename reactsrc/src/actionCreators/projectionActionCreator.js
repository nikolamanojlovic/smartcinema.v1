import ProjectionActionTypes from "../actionTypes/projectionActionTypes";

export const CreateProjectionActionCreator = projection => {
    return {
        type: ProjectionActionTypes.CREATE_PROJECTION,
        payload: projection
    };
};