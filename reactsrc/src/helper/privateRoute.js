import {Redirect, Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component, props, ...rest }) => (
    <Route {...rest} render = {(props) => (
       props.user
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(PrivateRoute);