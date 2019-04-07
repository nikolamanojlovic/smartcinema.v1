import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {GetFilmById} from "../functions/filmFunctions";

const styles = {
};

class FilmDetails extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        console.log(window.location.href);
        this.props.getFilmById(window.location.href.split('/')[4])
    }

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
            >
                {console.log(window.location.href.split('/')[2])}
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        film: state.FilmReducer.film,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFilmById: (id) => dispatch(GetFilmById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);