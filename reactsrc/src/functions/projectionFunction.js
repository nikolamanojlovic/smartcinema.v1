import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";
import {
    ClearCreatedProjectionsActionCreator,
    CreateProjectionActionCreator
} from "../actionCreators/projectionActionCreator";

export const CreateProjection = projection => {
    return dispatch => {
        axios.post(API_URL + '/projection/save', projection).then((response) => {
            if (response.data === true) {
                dispatch(CreateProjectionActionCreator(projection));
            } else {
                dispatch(ErrorMessageActionCreator("Your projection could not be saved."));
            }
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with submitting projection!"));
        });
    };
};

export const ClearCreatedProjections = () => {
    return dispatch => {
        dispatch(ClearCreatedProjectionsActionCreator());
    };
};