import {API_URL} from "../helper/apiUrl";
import {GetCurrentUserActionCreator, UserLogInActionCreator} from "../actionCreators/userActionCreators";
import {ErrorMessageActionCreator} from "../actionCreators/messageActionCreators";
import axios from 'axios';

export const UserLogIn = (email, password) => {
    return dispatch => {
        axios.post(API_URL + '/auth/login', {
            email : email,
            password : password
        }).then((response) => {
            setTimeout(() => {
                dispatch(UserLogInActionCreator(response.data))
            }, 1000);
        }).catch((error) => {
            dispatch(ErrorMessageActionCreator("Credentials are not valid!"));
        })
    };
};

export const GetCurrentUser = () => {
    return dispatch => {
        dispatch(GetCurrentUserActionCreator());
    };
};