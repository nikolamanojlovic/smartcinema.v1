import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";
import {CreateProjectionActionCreator} from "../actionCreators/projectionActionCreator";

export const CreateProjection = projection => {
    return dispatch => {
        axios.get(API_URL + '/hall/projections/' + id).then((response) => {
            response.data.length === 0 ? dispatch(ErrorMessageActionCreator("There are no available projections for this hall!")) :
                dispatch(CreateProjectionActionCreator(response.data));
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching projections for this hall!"));
        })
    };
};