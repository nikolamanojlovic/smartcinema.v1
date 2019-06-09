import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import OrderBar from "./orderBar";
import Grid from "@material-ui/core/Grid";
import {GetFilms} from "../functions/filmFunctions";
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {GetHalls} from "../functions/hallFunctions";
import MenuItem from "@material-ui/core/MenuItem";
import FilmPoster from "./filmPoster";
import {Divider} from "@material-ui/core";

const styles = {
    combo: {
        width: 200,
        marginLeft: 10,
        marginRight: 30
    },
    plotText: {
        marginLeft: 10,
        marginTop: 15,
        display: "block"
    },
};

class CreateRepertoireForm extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            hallSelected: false,
            fillSelected: false
        };
    };

    componentDidMount() {
        this.props.getHalls();
        this.props.getFilms();
    }

    render() {
        return (
            this.props.allHalls && this.props.allFilms ?
                <form className="createRepertoireForm">
                    <FormControl className="halls" style={styles.combo}>
                        <InputLabel htmlFor="halls-simple">Halls</InputLabel>
                        <Select value="halls">
                            {
                                this.props.allHalls.map((e, i) => (
                                    <MenuItem key={e.id}>{e.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className="films" style={styles.combo}>
                        <InputLabel htmlFor="film-simple">Films</InputLabel>
                        <Select value="films">
                            {
                                this.props.allFilms.map((e, i) => (
                                    <MenuItem key={e.id}>{e.title + " (" + e.year + ")"}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    {
                        this.state.hallSelected &&  this.state.hallSelected ?
                            <Typography variant="body1" component="span"   style={styles.plotText} gutterBottom>
                            </Typography> :
                            <Typography variant="body1" component="p"   style={styles.plotText} gutterBottom>
                                Please select hall and film in order to continue.
                            </Typography>
                    }
                </form>
                : <span/>
        );
    }
}

const mapStateToProps = state => {
    return {
        allHalls: state.HallReducer.allHalls,
        allFilms: state.FilmReducer.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHalls: () => dispatch(GetHalls()),
        getFilms: () => dispatch(GetFilms())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRepertoireForm);