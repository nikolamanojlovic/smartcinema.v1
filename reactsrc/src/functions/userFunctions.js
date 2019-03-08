import {API_URL} from "../helper/apiUrl";
import {UserLogInActionCreator} from "../actionCreators/userActionCreators";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";
import axios from 'axios';

export const UserLogIn = (email, password) => {
    return dispatch => {
        axios.get(API_URL + '/authenticate/login', {
            email: email,
            password: password
        }).then((response) => {
            console.log("feokwpof");
            setTimeout(() => {dispatch(UserLogInActionCreator(response.data))}, 2000);
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("neka greska"));
        })
    };
};