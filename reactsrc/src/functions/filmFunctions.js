import {GetFilmsActionCreator} from "../actionCreators/filmActionCreators";
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