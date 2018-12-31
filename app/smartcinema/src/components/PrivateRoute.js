import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
    If user is in local storage redirect to site, otherwise redirect to Auth page
 */
export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/authenticate', state: {from: props.location} }}/>
    )}/>
);