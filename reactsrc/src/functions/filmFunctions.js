import {
    GetAvailableSeatsForProjectionActionCreator,
    GetFilmByIdActionCreator,
    GetFilmsActionCreator, GetProjectionForFilmByIdActionCreator,
    RemoveFilmActionCreator
} from "../actionCreators/filmActionCreators";
import axios from "axios";
import {API_URL} from "../helper/apiUrl";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";

export const GetFilms = () => {
    return dispatch => {
        axios.get(API_URL + '/film/all').then((response) => {
            setTimeout(() => {
                dispatch(GetFilmsActionCreator(response.data))
            }, 1000);
        }).catch((error) => {
            if ( error.code === 204 ) {
                dispatch(ErrorMessageActionCreator("There are no films!"));
            }
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
            if ( error.code === 204 ) {
                dispatch(ErrorMessageActionCreator("There is no film!"));
            }
        })
    };
};

export const GetProjectionsForFilmById = id => {
    return dispatch => {
        axios.get(API_URL + '/film/projections/' + id).then((response) => {
            setTimeout(() => {
                dispatch(GetProjectionForFilmByIdActionCreator(response.data));
            }, 1000);
        }).catch((error) => {
            if ( error.code === 204 ) {
                dispatch(ErrorMessageActionCreator("There are no projections for this film!"));
            }
        })
    };
};

export const GetAvailableSeatsForProjection = (film, projection) => {
    return dispatch => {
        axios.get(API_URL + '/film/projections/' + film + '/' + JSON.stringify(projection)).then((response) => {
            setTimeout(() => {
                dispatch(GetAvailableSeatsForProjectionActionCreator(response.data));
            }, 1000);
        }).catch((error) => {
            if ( error.code === 204 ) {
                dispatch(ErrorMessageActionCreator("There are no available seats for this projection!"));
            }
        })
    };
};

export const RemoveFilm = () => {
    return dispatch => {
        dispatch(RemoveFilmActionCreator());
    };
};