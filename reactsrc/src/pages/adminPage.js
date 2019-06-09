import React, {Component} from "react";
import {connect} from "react-redux";
import TopBar from "../components/topBar";
import CreateRepertoire from "../components/createRepertoire";

class AdminPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <TopBar/>
                <CreateRepertoire/>
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