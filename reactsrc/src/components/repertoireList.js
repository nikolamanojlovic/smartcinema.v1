import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import CircularProgress from "./filmDetails";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

const styles = {};

class RepertoireList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                {
                    this.props.createdProjections.length !== 0 ?
                        <div>
                            <List subheader={<li/>}>
                                {
                                    this.props.dates
                                }
                            </List>
                        </div>
                        : <span/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dates: Array.from(new Set(state.ProjectionReducer.createdProjections.map(function (projection) {
            return projection.date;
        }))),
        createdProjections: state.ProjectionReducer.createdProjections.sort(function (a, b) {
            return (new Date(b)).setHours(0, 0, 0, 0) - (new Date(a)).setHours(0, 0, 0, 0);
        }),
        allFilms: state.FilmReducer.films,
    };
};

export default connect(mapStateToProps)(RepertoireList);