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
import {CreateProjectionActionCreator} from "../actionCreators/projectionActionCreator";
import {CreateProjection} from "../functions/projectionFunction";

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
    plotTextError: {
        marginTop: 15,
        display: "block",
        color: '#A5122C'
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

        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();

        // local state
        this.state = {
            hallSelected: '',
            filmSelected: '',
            projectionDate: year + '-' + (month >= 10 ? month : "0" + month) + '-' + (day >= 10 ? day : "0" + day),
            projectionStartTime: (hour >= 10 ? hour : "0" + hour) + ":" + (minute >= 10 ? minute : "0" + minute),
            projectionEndTime: '',
            error: ''
        };

        this._handleSelectHall.bind(this);
        this._handleSelectFilm.bind(this);
        this._handleChooseDate.bind(this);
        this._handleChooseTime(this);
        this._handleSubmit.bind(this);
    };

    componentDidMount() {
        this.props.getHalls();
        this.props.getFilms();
    }

    _handleSelectHall(e) {
        this.setState({hallSelected: e.target.value});
        this.props.getProjections(e.target.value.id)
    }

    _handleSelectFilm(e) {
        this.setState({filmSelected: e.target.value})
    }

    _handleChooseDate(e) {
        this.setState({projectionDate: e.target.value})
    }

    _handleChooseTime(e) {
        if (e.target) {
            this.setState({projectionStartTime: e.target.value});
            this._handleCalculateEndTime();
        }
    }

    _handleCalculateEndTime() {
        let time = this.state.projectionStartTime.split(":");
        let endTime = [parseInt(time[0]), parseInt(time[1])];

        let hours = Math.floor(this.state.filmSelected.duration / 60);
        let minutes = this.state.filmSelected.duration % 60;

        if (endTime[0] + hours >= 24) {
            endTime[0] = endTime[0] + hours - 24;
        } else {
            endTime[0] = endTime[0] + hours;
        }

        if (endTime[1] + minutes < 60) {
            endTime[1] = endTime[1] + minutes;
        } else {
            endTime[0] = endTime[0] + 1;
            endTime[1] = endTime[1] + minutes - 60;
        }

        let projectionEndTime = (endTime[0] >= 10 ? endTime[0] : "0" + endTime[0]) + ":" + (endTime[1] >= 10 ? endTime[1] : "0" + endTime[1]);
        this.setState({projectionEndTime: projectionEndTime});
    }

    _handleSubmit() {
        if (this.state.projectionStartTime === '' || this.state.projectionEndTime === '') {
            this.setState({error: "Please fill out all fields before submitting."});
            return;
        }


        if (Date.parse(this.state.projectionDate) < (new Date()).setHours(0, 0, 0, 0)) {
            this.setState({error: "Date must be today's or some date after."});
            return;
        }

        if (this.props.allProjections.find(p => {
            let date = (new Date(p.date));
            let month = date.getMonth() + 1;
            let dateFormatted = date.getFullYear() + '-' + (month >= 10 ? month : "0" + month) + '-'
                + (date.getDate() >= 10 ? date.getDate() : "0" + date.getDate());

            let start = (p.startTime.hour >= 10 ? p.startTime.hour : "0" + p.startTime.hour) + ":" + (p.startTime.minute >= 10 ? p.startTime.minute : "0" + p.startTime.minute);
            let end = (p.endTime.hour >= 10 ? p.endTime.hour : "0" + p.endTime.hour) + ":" + (p.endTime.minute >= 10 ? p.endTime.minute : "0" + p.endTime.minute);

            return dateFormatted === this.state.projectionDate && !((start < this.state.projectionStartTime && end < this.state.projectionStartTime)
                || (start > this.state.projectionEndTime && end > this.state.projectionEndTime))
        })) {
            this.setState({error: "Projection could not be created, there is already projection in that hall at that time."});
            return;
        }

        this.props.createProjection({
            date: this.state.projectionDate,
            startTime: this.state.projectionStartTime,
            endTime: this.state.projectionEndTime,
            hallData: this.state.hallSelected,
            filmId: this.state.filmSelected.id,
        });
        this.props.getProjections(this.state.hallSelected.id);
        this.setState({error: ''})
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
                        this.state.hallSelected !== '' && this.state.filmSelected !== '' ?
                            <div>
                                <Typography variant="body1" component="span" style={styles.plotText} gutterBottom>
                                    Creating projections for the film <b>{this.state.filmSelected.title}</b> in the
                                    hall <b>{this.state.hallSelected.name}</b>.
                                </Typography>
                                <TextField
                                    id="date"
                                    label="Projection date"
                                    value={this.state.projectionDate}
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => this._handleChooseDate(event)}
                                    style={styles.picker}
                                />
                                <TextField
                                    id="time"
                                    label="Start time"
                                    type="time"
                                    value={this.state.projectionStartTime}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 1800, // 30 min
                                    }}
                                    style={styles.timePicker}
                                    onChange={(event) => this._handleChooseTime(event)}
                                    onBlur={() => this._handleCalculateEndTime()}
                                />
                                <TextField
                                    id="end_time"
                                    label="End time"
                                    type="time"
                                    value={this.state.projectionEndTime}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 1800, // 30 min
                                    }}
                                    disabled={true}
                                    style={styles.timePicker}
                                />
                                <Button variant="contained" color="secondary" style={styles.button}
                                        onClick={() => this._handleSubmit()}>
                                    Create projection
                                </Button>
                                {
                                    this.state.error === '' ? <span/> :
                                        <Typography variant="body1" component="p" style={styles.plotTextError}
                                                    gutterBottom>
                                            {this.state.error}
                                        </Typography>
                                }
                            </div>
                            :
                            <Typography variant="body1" component="p" style={styles.plotText} gutterBottom>
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
        getProjections: (hall) => dispatch(GetProjectionsForHallById(hall)),
        createProjection: (projection) => dispatch(CreateProjection(projection))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRepertoireForm);