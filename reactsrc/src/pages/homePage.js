import React, {Component} from "react";
import MenuComponent from "../components/menuComponent";
import {connect} from "react-redux";
import FilmList from "../components/filmList";
import SideBar from "../components/sideBar";

class HomePage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <SideBar/>
                <FilmList/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user,
    };
};

export default connect(mapStateToProps)(HomePage);