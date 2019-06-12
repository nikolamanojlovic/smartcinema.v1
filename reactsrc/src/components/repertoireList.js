import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import CircularProgress from "./filmDetails";
import Typography from "@material-ui/core/Typography";

const styles = {
    plotText: {
        marginLeft: 10,
        marginTop: 30,
        display: "block"
    }
};

class RepertoireList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <Typography variant="body1" component="span"   style={styles.plotText} gutterBottom>
                    Created projections:
                </Typography>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        createdProjections: state.ProjectionReducer.createdProjections
    };
};

export default connect(mapStateToProps)(RepertoireList);