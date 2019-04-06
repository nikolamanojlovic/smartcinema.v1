import FilmActionTypes  from "../actionTypes/filmActionTypes";

export const GetFilmsActionCreator = films => {
    return {
        type: FilmActionTypes.GET_ALL,
        payload: films
    };
};