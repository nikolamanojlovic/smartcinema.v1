import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {GetFilmById} from "../functions/filmFunctions";
import CardMedia from "@material-ui/core/CardMedia";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ProjectionsList from "./projectionsList";

const styles = {
    grid: {
        marginLeft: "15%",
        width: "85%"
    },
    media: {
        width: "100%",
        height: 400,
        objectFit: "cover",
        objectPosition: "50% 30%"
    },
    paper: {
        height: "70%"
    },
    heading: {
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 10
    },
    details: {
        float: "left"
    },
    info: {
        display: "inline-block",
        width: "40%"
    },
    projections: {
        display: "inline-block",
        width: "40%"
    },
    about: {
        marginLeft: 15
    }
};

class FilmDetails extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.getFilmById(window.location.href.split('/')[4])
    }

    render() {
        return (
            this.props.film ?
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                    spacing={0}
                    style={styles.grid}
                >
                    <Grid key="cover" item>
                        <img src={this.props.film.cover} title={this.props.film.title} alt={this.props.film.title}
                             style={styles.media}/>
                    </Grid>
                    <Grid key="details" style={styles.details} item>
                        <Typography variant="h3" style={styles.heading} gutterBottom>
                            {this.props.film.title} ({this.props.film.year})
                        </Typography>
                        <div className="film-details" style={styles.info}>
                            <Typography variant="h5" style={styles.about} gutterBottom>
                                About:
                            </Typography>
                        </div>
                        <div className="projections" style={styles.projections}>
                            <Typography variant="h5" gutterBottom>
                                Projections:
                            </Typography>
                            {this.props.film.id ? <ProjectionsList film={this.props.film.id}/> : <div/>}
                        </div>
                    </Grid>
                </Grid> : <div/>
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