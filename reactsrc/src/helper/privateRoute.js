import {Redirect, Route} from "react-router-dom";
import React, {Component} from "react";
import {connect} from "react-redux";
import LogInPage from "../pages/logInPage";
import siteHistory from "./history";

class PrivateRoute extends Component {
    render() {
        return(
            Object.entries(this.props.user).length !== 0 ?
                <Route exact path={this.props.path} component={this.props.component}/> :
                <Redirect to="/login"/>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user
    };
};

export default connect(mapStateToProps)(PrivateRoute);