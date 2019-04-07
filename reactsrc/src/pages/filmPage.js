import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "../components/sideBar";
import FilmDetails from "../components/filmDetails";

class FilmPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <SideBar/>
                <FilmDetails/>
            </div>
        );
    }
}

export default FilmPage;