import {
    GetFilmByIdActionCreator,
    GetFilmsActionCreator,
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

export const RemoveFilm = () => {
    return dispatch => {
        dispatch(RemoveFilmActionCreator());
    };
};