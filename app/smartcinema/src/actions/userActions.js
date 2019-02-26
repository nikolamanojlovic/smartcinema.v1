import {userConstants} from "../constants/userConstants";
import {AxiosInstance as axios} from "axios";
import {alertActions as alterActions} from "./alertActions";

/*
     Redux action creators for the user
 */
export const userActions = {
    _login,
};

/** ACTIONS **/
const _login = (user) => ({
    type : userConstants.LOGIN,
    payload : user
});

/** FUNCTIONS **/
export const login = (credentials = {email : '', password : ''}) => {
    return (dispatch) => {
        return axios.get(${config.apiUrl} +"/auth/login", {
            email: credentials.email,
            password: credentials.password
        }).then(response => {
            console.log(response);
            dispatch(_login(response.data))
        }).catch(error => {
            console.log(error.response);
            dispatch(alterActions._error(error.response.data))
        });
    }
};

