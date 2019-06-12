import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";
import {CreateProjectionActionCreator} from "../actionCreators/projectionActionCreator";
import {SubmitCartActionCreator} from "../actionCreators/ticketActionCreator";

export const CreateProjection = projection => {
    return dispatch => {
        axios.post(API_URL + '/projection/save', projection).then((response) => {
            if ( response.data === true ) {
                dispatch(CreateProjectionActionCreator(projection));
            } else {
                dispatch(ErrorMessageActionCreator("Your projection could not be saved."));
            }
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with submitting projection!"));
        });
    };
};