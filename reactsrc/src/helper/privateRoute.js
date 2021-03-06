import {Redirect, Route} from "react-router-dom";
import React, {Component} from "react";
import {connect} from "react-redux";

class PrivateRoute extends Component {
    render() {
        return(
            this.props.user && Object.entries(this.props.user).length !== 0 ?
                this.props.user.isAdmin ?
                    <Redirect to="/admin"/> :
                    <Route path={this.props.path} component={this.props.component}/> :
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