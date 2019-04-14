import React, {Component} from "react";
import {connect} from "react-redux";
import {GetAvailableSeatsForProjection, GetProjectionsForFilmById} from "../functions/filmFunctions";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Schedule, ShoppingCart} from '@material-ui/icons';
import siteHistory from "../helper/history";
import {Button} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import MessageComponent from "./messageComponent";

const styles = {
    outside: {
        float: "left"
    },
    box: {
        maxHeight: 200,
        maxWidth: 300,
        marginRight: 15,
        overflow: 'auto',
        display: "inline-block"
    },
    icon: {
        color: "#A5122C"
    },
    iconWhite: {
        color: "#FFFFFF",
        marginRight: 8,
        width: 16,
        height: 16
    },
    button: {
        marginTop: 10,
        marginBottom: 25,
        backgroundColor: '#A5122C'
    },
    formControl: {
        width: "100%",
        marginBottom: 25
    }
};

class ProjectionsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seat: 'none'
        };

        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
    };

    _handleClick(film, projection) {
        this.props.getAvailableSeatsForProjection(film, projection);
        this.setState({seat: 'none'});
    };

    _handleChange(event) {
        console.log(event);
        this.setState({[event.target.name]: event.target.value});
    };

    componentDidMount() {
        this.props.getProjectionsForFilmById(this.props.film)
    }

    render() {
        return (
            Object.entries(this.props.projections).length !== 0 ?
                <div style={styles.outside}>
                    <div className="projectionList" style={styles.box}>
                        <List>
                            {
                                this.props.projections.map((e, i) => (
                                    <ListItem key={i} onClick={() => this._handleClick(this.props.film, e)} button>
                                        <ListItemIcon>
                                            <Schedule style={styles.icon}/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={(new Date(e.date)).toDateString().replace(/^\S+\s/, '') + ": " + e.hallData.name}
                                            secondary={
                                                e.startTime.hour + ":" + e.startTime.minute + "-" +
                                                e.endTime.hour + ":" + e.endTime.minute
                                            }/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div style={styles.box} className="hallsAndSeats">
                        {
                            Object.entries(this.props.projections).length !== 0 && this.props.seats ?
                                <div className="seats">
                                    <form autoComplete="off">
                                        <FormControl style={styles.formControl}>
                                            <InputLabel htmlFor="seats">Choose a seat:</InputLabel>
                                            <Select
                                                value={this.state.seat}
                                                onChange={this._handleChange}
                                                inputProps={{
                                                    name: 'seat',
                                                    id: 'seat-simple',
                                                }}
                                            >
                                                <MenuItem key={-1} value="none">None</MenuItem>
                                                {
                                                    this.props.seats.map((e, i) => (
                                                        <MenuItem key={i}
                                                                  value={e}>Row: {e.row} Number: {e.number}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </form>
                                    <Button variant="contained" color="secondary" style={styles.button}>
                                        <ShoppingCart style={styles.iconWhite}/>
                                        Add to cart
                                    </Button>
                                </div> : <MessageComponent/>
                        }
                    </div>
                </div> : <div style={styles.outside}><MessageComponent/></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projections: state.FilmReducer.projections,
        seats: state.FilmReducer.seats
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProjectionsForFilmById: (id) => dispatch(GetProjectionsForFilmById(id)),
        getAvailableSeatsForProjection: (film, projection) => dispatch(GetAvailableSeatsForProjection(film, projection))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectionsList);