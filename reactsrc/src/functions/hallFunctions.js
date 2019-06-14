import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";
import {
    ClearAllHallsActionCreator,
    ClearProjectionsForHallActionCreator,
    GetHallsActionCreator,
    GetProjectionForHallByIdActionCreator
} from "../actionCreators/hallActionCreators";

export const GetHalls = () => {
    return dispatch => {
        axios.get(API_URL + '/hall/all').then((response) => {
            response.data.length === 0 ? dispatch(ErrorMessageActionCreator("There are no halls at the moment!")) :
                dispatch(GetHallsActionCreator(response.data))
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching halls!"));
        })
    };
};

export const GetProjectionsForHallById = id => {
    return dispatch => {
        axios.get(API_URL + '/hall/projections/' + id).then((response) => {
            response.data.length === 0 ? dispatch(ErrorMessageActionCreator("There are no available projections for this hall!")) :
                dispatch(GetProjectionForHallByIdActionCreator(response.data));
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching projections for this hall!"));
        })
    };
};

export const ClearProjectionForHall = () => {
    return dispatch => {
        dispatch(ClearProjectionsForHallActionCreator());
    };
};

export const ClearAllHalls = () => {
    return dispatch => {
        dispatch(ClearAllHallsActionCreator());
    };
};