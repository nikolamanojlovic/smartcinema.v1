import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

/*
    If user is in local storage redirect to site, otherwise redirect to Auth page
 */
class PrivateRoute {
    static propTypes = {
        user: React.PropTypes.object,
        path: React.PropTypes.string,
        component : React.PropTypes.object
    };

    render() {
        if (this.props.user == {}) {
            history.push('/authenticate');
        } else {
            <Route path = {this.props.path} component = {this.props.page} />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(PrivateRoute);

