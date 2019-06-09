import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import CircularProgress from "./filmDetails";

const style = {

};

class RepertoireList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            this.props.repertoires ?
               <div></div> :
                <span></span>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepertoireList);