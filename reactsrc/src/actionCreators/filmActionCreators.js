import FilmActionTypes  from "../actionTypes/filmActionTypes";

export const GetFilmsActionCreator = films => {
    return {
        type: FilmActionTypes.GET_ALL,
        payload: films
    };
};

export const GetFilmByIdActionCreator = id => {
    return {
        type: FilmActionTypes.GET_FILM_BY_ID,
        payload: id
    };
};

export const RemoveFilmActionCreator = () => {
    return {
        type: FilmActionTypes.REMOVE_FILM
    };
};