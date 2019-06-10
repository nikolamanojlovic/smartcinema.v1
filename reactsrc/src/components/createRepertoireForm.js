import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import OrderBar from "./orderBar";
import Grid from "@material-ui/core/Grid";
import {GetFilms} from "../functions/filmFunctions";
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {GetHalls, GetProjectionsForHallById} from "../functions/hallFunctions";
import MenuItem from "@material-ui/core/MenuItem";
import FilmPoster from "./filmPoster";
import {Button, Divider} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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
    picker: {
        display: "block",
        width: 440,
        marginLeft: 10,
        marginRight: 30,
        marginTop: 30
    },
    timePicker: {
        width: 200,
        marginLeft: 10,
        marginRight: 30,
        marginTop: 30
    },
    button: {
        display: "block",
        marginTop: 30,
        backgroundColor: '#A5122C'
    }
};

class CreateRepertoireForm extends Component {
    constructor(props) {
        super(props);

        // local state
        this.state = {
            hallSelected: '',
            filmSelected: ''
        };

        this._handleSelectHall.bind(this);
        this._handleSelectFilm.bind(this);
        this._handleSubmit.bind(this);
    };

    componentDidMount() {
        this.props.getHalls();
        this.props.getFilms();
    }

    _handleSelectHall(e) {
        this.setState({hallSelected : e.target.value});
        console.log(e.target.value.id)
        this.props.getProjections(e.target.value.id)
    }

    _handleSelectFilm(e) {
        this.setState({filmSelected : e.target.value})
    }

    _handleSubmit(e) {

    }

    render() {
        return (
            this.props.allHalls && this.props.allFilms ?
                <form className="createRepertoireForm">
                    <FormControl className="halls" style={styles.combo}>
                        <InputLabel htmlFor="halls-simple">Halls</InputLabel>
                        <Select value={this.state.hallSelected} onChange={(event) => this._handleSelectHall(event)}>
                            {
                                this.props.allHalls.map((e, i) => (
                                    <MenuItem key={e.id} value={e}>{e.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className="films" style={styles.combo}>
                        <InputLabel htmlFor="film-simple">Films</InputLabel>
                        <Select value={this.state.filmSelected} onChange={(event) => this._handleSelectFilm(event)}>
                            {
                                this.props.allFilms.map((e, i) => (
                                    <MenuItem key={e.id} value={e}>{e.title + " (" + e.year + ")"}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    {
                        this.state.hallSelected !== '' &&  this.state.filmSelected !== '' ?
                            <div>
                                <Typography variant="body1" component="span"   style={styles.plotText} gutterBottom>
                                    Creating projections for the film <b>{this.state.filmSelected.title}</b> in the hall <b>{this.state.hallSelected.name}</b>.
                                </Typography>
                                <TextField
                                    id="date"
                                    label="Projection date"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={styles.picker}
                                />
                                <TextField
                                    id="time"
                                    label="Start time"
                                    type="time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 1800, // 30 min
                                    }}
                                    style={styles.timePicker}
                                />
                                <TextField
                                    id="end_time"
                                    label="End time"
                                    type="time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 1800, // 30 min
                                    }}
                                    disabled={true}
                                    style={styles.timePicker}
                                />
                                <Button variant="contained" color="secondary" style={styles.button}>
                                    Create projection
                                </Button>
                            </div>
                            :
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
        allFilms: state.FilmReducer.films,
        allProjections: state.HallReducer.projections
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHalls: () => dispatch(GetHalls()),
        getFilms: () => dispatch(GetFilms()),
        getProjections: (hall) => dispatch(GetProjectionsForHallById(hall))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRepertoireForm);