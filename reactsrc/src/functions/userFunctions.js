import {AxiosInstance as axios} from "axios";
import {API_URL} from "../helper/apiUrl";
import {UserLogInActionCreator} from "../actionCreators/userActionCreators";

export const userLogIn = ({email, password}) => {
    return (dispatch) => {
        return axios.get(API_URL + `/authenticate`, {
            email: email,
            password: password
        }).then((response) => {
            dispatch(UserLogInActionCreator(response.data))
        }).catch((error) => {
// message
        })
    };
};