import FilmActionTypes from "../actionTypes/filmActionTypes";

const FilmReducer = (state = [], action) => {
    switch (action.type) {
        case FilmActionTypes.GET_ALL:
            return {...state, films: action.payload};
        case FilmActionTypes.GET_FILM_BY_ID:
            return {...state, film: action.payload};
        default:
            return {...state};
    }
};

export default FilmReducer;