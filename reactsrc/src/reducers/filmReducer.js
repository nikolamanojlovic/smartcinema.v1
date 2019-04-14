import FilmActionTypes from "../actionTypes/filmActionTypes";

const FilmReducer = (state = [], action) => {
    switch (action.type) {
        case FilmActionTypes.GET_ALL:
            return {...state, films: action.payload};
        case FilmActionTypes.GET_FILM_BY_ID:
            return {...state, film: action.payload};
        case FilmActionTypes.GET_PROJECTIONS_BY_FILM_ID:
            return {...state, projections: action.payload};
        case FilmActionTypes.GEt_AVAILABLE_SEATS_FOR_PROJECTION:
            return {...state, seats: action.payload};
        case FilmActionTypes.REMOVE_FILM:
            return {...state, film: {}};
        default:
            return {...state};
    }
};

export default FilmReducer;