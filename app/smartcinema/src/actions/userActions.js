import { userConstants } from '../constants/userConstants';
import { userService } from '../services/userService';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';

/*
     Redux action creators for the user
 */
export const userActions = {
    login,
    logout,
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email: email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    // Sub-actions
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}