import FilmActionTypes from "../actionTypes/filmActionTypes";

export const GetFilmsActionCreator = films => {
    return {
        type: FilmActionTypes.GET_ALL,
        payload: films
    };
};

export const RemoveFilmsActionCreator = () => {
    return {
        type: FilmActionTypes.REMOVE_FILMS
    };
};

export const RemoveFilmActionCreator = () => {
    return {
        type: FilmActionTypes.REMOVE_FILM
    };
};

export const GetFilmByIdActionCreator = id => {
    return {
        type: FilmActionTypes.GET_FILM_BY_ID,
        payload: id
    };
};

export const GetProjectionForFilmByIdActionCreator = projections => {
    return {
        type: FilmActionTypes.GET_PROJECTIONS_BY_FILM_ID,
        payload: projections
    };
};

export const GetAvailableSeatsForProjectionActionCreator = seats => {
    return {
        type: FilmActionTypes.GET_AVAILABLE_SEATS_FOR_PROJECTION,
        payload: seats
    };
};