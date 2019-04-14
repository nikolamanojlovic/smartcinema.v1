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
    button : {
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

        this._handleClick = this._handleClick.bind(this);
    };

    _handleClick(film, projection) {
        this.props.getAvailableSeatsForProjection(film, projection);
    }

    componentDidMount() {
        this.props.getProjectionsForFilmById(this.props.film)
    }

    render() {
        return (
            this.props.projections ?
               <div style={styles.outside}>
                   <div className="projectionList" style={styles.box}>
                       <List>
                           {
                               this.props.projections.map((e, i) => (
                                   <ListItem key={i}  onClick={() => this._handleClick(this.props.film, e)} button>
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
                       <div className="seats">
                           {
                               this.props.seats ?
                                   <form autoComplete="off">
                                       <FormControl style={styles.formControl}>
                                           <InputLabel htmlFor="seats">Choose a seat</InputLabel>
                                           <Select
                                               value={this.props.seats}
                                               inputProps={{
                                                   name: 'seat',
                                                   id: 'seat-simple',
                                               }}
                                           >
                                               {
                                                   this.props.seats.map((e, i) => (
                                                       <MenuItem value={e}>Row: {e.row} Number: {e.number}</MenuItem>
                                                   ))
                                               }
                                           </Select>
                                       </FormControl>
                                   </form> : <div/>
                           }
                       </div>
                       <Button variant="contained" color="secondary" style={styles.button}>
                           <ShoppingCart style={styles.iconWhite}/>
                           Add to cart
                       </Button>
                   </div>
               </div> : <div/>
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