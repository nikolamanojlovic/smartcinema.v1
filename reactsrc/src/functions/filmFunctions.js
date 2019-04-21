import {
    GetAvailableSeatsForProjectionActionCreator,
    GetFilmByIdActionCreator,
    GetFilmsActionCreator,
    GetProjectionForFilmByIdActionCreator,
    RemoveFilmActionCreator,
    RemoveFilmsActionCreator
} from "../actionCreators/filmActionCreators";
import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";

export const GetFilms = () => {
    return dispatch => {
        axios.get(API_URL + '/film/all').then((response) => {
            Object.entries(response.data).length === 0 ? dispatch(ErrorMessageActionCreator("There are no films at the moment!")) :
                dispatch(GetFilmsActionCreator(response.data))
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching films!"));
        })
    };
};

export const GetFilmById = id => {
    return dispatch => {
        axios.get(API_URL + '/film/' + id).then((response) => {
            setTimeout(() => {
                dispatch(GetFilmByIdActionCreator(response.data));
            }, 1000);
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching film!"));
        })
    };
};

export const GetProjectionsForFilmById = id => {
    return dispatch => {
        axios.get(API_URL + '/film/projections/' + id).then((response) => {
            Object.entries(response.data).length === 0 ? dispatch(ErrorMessageActionCreator("There are no available projections for this film!")) :
                dispatch(GetProjectionForFilmByIdActionCreator(response.data));
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching projections for this movie!"));
        })
    };
};

export const GetAvailableSeatsForProjection = (film, projection) => {
    return dispatch => {
        axios.get(API_URL + '/film/projections/seats/' + JSON.stringify(projection)).then((response) => {
            Object.entries(response.data).length === 0 ? dispatch(ErrorMessageActionCreator("There are no available seats for this projection!")) :
                dispatch(GetAvailableSeatsForProjectionActionCreator(response.data));
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Something went wrong with fetching seats for this projection!"));
        })
    };
};

export const RemoveFilms = () => {
    return dispatch => {
        dispatch(RemoveFilmsActionCreator());
    };
};

export const RemoveFilm = () => {
    return dispatch => {
        dispatch(RemoveFilmActionCreator());
    };
};