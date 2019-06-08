import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "../components/sideBar";

class AdminPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <SideBar/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user,
    };
};

export default connect(mapStateToProps)(AdminPage);