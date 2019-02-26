import {alertConstants} from '../constants/alertConstants';
import {AxiosInstance as axios} from "axios";

/*
     Redux action creators for the alerts
 */
export const alertActions = {
    _success,
    _error,
    _clear
};

/** ACTIONS **/
const _success = (message) => ({
    type: alertConstants.SUCCESS,
    payload : message
});

const _error = (message) => ({
    type: alertConstants.ERROR,
    payload : message
});

const _clear = () => ({
    type: alertConstants.CLEAR,
});