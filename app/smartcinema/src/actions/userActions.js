import {userConstants} from "../constants/userConstants";
import {AxiosInstance as axios} from "axios";
import {alertActions as alterActions} from "./alertActions";

/*
     Redux action creators for the user
 */
export const userActions = {
    _login,
    _getUser
};

/** ACTIONS **/
const _login = (user) => ({
    type : userConstants.LOGIN,
    payload : user
});

const _getUser = () => ({
    type : userConstants.GET_USER
});

/** FUNCTIONS **/
export function login (email, password) {
    return (dispatch) => {
        return axios.get(url.API + "/auth/login", {
            email: email,
            password: password
        }).then(response => {
            dispatch(_login(response.data))
        }).catch(error => {
            dispatch(alterActions._error(error.response.data))
        });
    }
};

