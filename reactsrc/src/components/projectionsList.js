import React, {Component} from "react";
import {connect} from "react-redux";
import {GetAvailableSeatsForProjection, GetProjectionsForFilmById} from "../functions/filmFunctions";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Clear, EventSeat, Schedule, ShoppingCart} from '@material-ui/icons';
import {Button, TableBody, TableCell} from "@material-ui/core";
import MessageComponent from "./messageComponent";
import {AddToCart} from "../functions/ticketFunctions";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";

const styles = {
    outside: {
        float: "left",
    },
    box: {
        maxHeight: 200,
        maxWidth: 700,
        marginRight: 15,
        overflow: "auto",
        display: "inline-block",
        float: "left"
    },
    list: {
        display: "inline-flex",
        flexWrap: "wrap"
    },
    listItem: {
        width: 275
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
    },
    seatsTable: {
      position: 'absolute'
    },
    seatsTableRender: {
    },
    tableCell: {
        width: "2px"
    },
    freeSeat: {
        color: '#A5122C'
    },
    reservedSeat: {
        color: '#888888'
    },
    cartSeat: {
        color: '#303F9F'
    }
};

class ProjectionsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seats: [],
            projection: 'none'
        };

        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleAddToCartClick = this._handleAddToCartClick.bind(this);
        this._createNumbersCells = this._createNumbersCells.bind(this);
        this._crateRowsCells = this._crateRowsCells.bind(this);
        this._createSeatsCells = this._createSeatsCells.bind(this);
    };

    _handleClick(film, projection) {
        this.props.getAvailableSeatsForProjection(film, projection);
        this.setState({seats: []});
        this.setState({projection: projection})
    };

    _handleChange(value) {
        this.setState({seats: [...this.state.seats, value]});
    };

    _handleChangeRemove(value) {
        this.setState({seats: this.state.seats.filter(function (element) {
                return !(element.row === value.row && element.number === value.number)
            })});
    };

    _handleAddToCartClick(seats, projection) {
        if ( seats === [] ) {
            return;
        }

        for(let i = 0; i < this.state.seats.length; i++) {
            this.props.addToCart(seats[i], projection);
        }

        this.setState({seats: []});
    };

    _createNumbersCells() {
        let numbers = [<TableCell key={0} padding="dense" align="center"><b>*</b></TableCell>];

        for (let i = 1; i <= this.state.projection.hallData.maxNumbers; i++) {
            numbers.push(
                <TableCell key={i} padding="dense" align="center" style={styles.tableCell}>
                    <b>{i}</b>
                </TableCell>
            )
        }

        return numbers;
    }

    _crateRowsCells(seats) {
        let rows = [];

        for (let i = 1; i <= this.state.projection.hallData.maxRows; i++) {
            rows.push(
                <TableRow key={i}>
                    <TableCell key={0} padding="dense" align="center" style={styles.tableCell}><b>{i}</b></TableCell>
                    {this._createSeatsCells({i}, seats)}
                </TableRow>);
        }

        return rows;
    }

    _createSeatsCells(row, seats) {
        let seatsIcons = [];

        for (let i = 1; i <= this.state.projection.hallData.maxNumbers; i++) {

            if (seats.find(seat =>  row.i === seat.row && i === seat.number)) {

                if (this.props.entries.find(entry =>
                    this.state.projection.date === entry.reservation.projection.date &&
                    JSON.stringify(this.state.projection.startTime) === JSON.stringify(entry.reservation.projection.startTime) &&
                    JSON.stringify(this.state.projection.endTime) === JSON.stringify(entry.reservation.projection.endTime) &&
                    this.state.projection.filmId === entry.reservation.projection.filmId &&
                    this.state.projection.hallData.id === entry.reservation.projection.hallData.id &&
                    row.i === entry.reservation.seat.row && i === entry.reservation.seat.number))
                {
                    seatsIcons.push(
                        <TableCell key={i} padding="dense" align="center">
                            <EventSeat style={styles.cartSeat}/>
                        </TableCell>);
                } else if (!this.state.seats.find(seat =>  row.i === seat.row && i === seat.number)) {
                    seatsIcons.push(
                        <TableCell key={i} padding="dense" align="center">
                            <EventSeat style={styles.freeSeat} onClick={() => this._handleChange({row: row.i, number: i})}/>
                        </TableCell>);
                } else {
                    seatsIcons.push(
                        <TableCell key={i} padding="dense" align="center">
                            <EventSeat style={styles.reservedSeat} onClick={() => this._handleChangeRemove({row: row.i, number: i})}/>
                        </TableCell>);
                }
            } else {
                seatsIcons.push(
                    <TableCell key={i} padding="dense" align="center">
                        <Clear/>
                    </TableCell>);
            }
        }

        return seatsIcons;
    }

    componentDidMount() {
        this.props.getProjectionsForFilmById(this.props.film.id)
    }

    render() {
        return (
            Object.entries(this.props.projections).length !== 0 ?
                <div style={styles.outside}>
                    <div className="projectionList" style={styles.box}>
                        <List style={styles.list}>
                            {
                                this.props.projections.map((e, i) => (
                                    <ListItem key={i} style={styles.listItem} onClick={() => this._handleClick(this.props.film.id, e)} button>
                                        <ListItemIcon>
                                            <Schedule style={styles.icon}/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={(new Date(e.date)).toDateString().replace(/^\S+\s/, '') + ": " + e.hallData.name}
                                            secondary={
                                                (e.startTime.hour >= 10 ? e.startTime.hour : "0" + e.startTime.hour) + ":" + (e.startTime.minute >= 10 ? e.startTime.minute : "0" + e.startTime.minute)
                                                + "-" +
                                                (e.endTime.hour >= 10 ? e.endTime.hour : "0" + e.endTime.hour) + ":" + (e.endTime.minute >= 10 ? e.endTime.minute : "0" + e.endTime.minute)
                                            }/>
                                    </ListItem>
                                ))
                            }
                        </List>
                        <div className="hallsAndSeats">
                            {
                                Object.entries(this.props.projections).length !== 0 && this.props.seats ?
                                    <div className="seats" style={styles.seatsTable}>
                                        <div className="seats-table">
                                            {
                                                this.state.projection !== 'none' ?
                                                    <Table style={styles.seatsTableRender}>
                                                        <TableBody>
                                                            <TableRow key={-1} className="rows">
                                                                {
                                                                    this._createNumbersCells()
                                                                }
                                                            </TableRow>
                                                            {
                                                                this._crateRowsCells(this.props.seats)
                                                            }
                                                        </TableBody>
                                                    </Table>
                                                    : <span/>
                                            }
                                        </div>
                                        {
                                            this.state.seats !== [] ?
                                                <Button variant="contained" color="secondary" style={styles.button}
                                                        onClick={() => this._handleAddToCartClick(this.state.seats, this.state.projection)}>
                                                    <ShoppingCart style={styles.iconWhite}/>
                                                    Add to cart
                                                </Button> : <span/>
                                        }
                                    </div> : <MessageComponent/>
                            }
                        </div>
                    </div>

                </div> : <div style={styles.outside}><MessageComponent/></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projections: state.FilmReducer.projections,
        seats: state.FilmReducer.seats,
        user: state.UserReducer.user,
        entries: state.TicketReducer.ticket.entries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProjectionsForFilmById: (id) => dispatch(GetProjectionsForFilmById(id)),
        getAvailableSeatsForProjection: (film, projection) => dispatch(GetAvailableSeatsForProjection(film, projection)),
        addToCart: (seat, projection) => dispatch(AddToCart(seat, projection))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectionsList);