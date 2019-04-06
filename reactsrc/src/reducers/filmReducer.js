import FilmActionTypes from "../actionTypes/filmActionTypes";

const FilmReducer = (state = [], action) => {
    switch (action.type) {
        case FilmActionTypes.GET_ALL:
            return {...state, films : action.payload };
        default:
            return {...state};
    }
};

export default FilmReducer;