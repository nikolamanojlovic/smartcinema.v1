import {Redirect, Route} from "react-router-dom";
import React, {Component} from "react";
import {connect} from "react-redux";

class AdminRoute extends Component {
    render() {
        return (
            this.props.user && Object.entries(this.props.user).length !== 0 ?
                this.props.user.isAdmin ?
                    <Route path={this.props.path} component={this.props.component}/> :
                    <Redirect to="/"/> :
                <Redirect to="/login"/>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user
    };
};

export default connect(mapStateToProps)(AdminRoute);