import React, {Component} from "react";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {DoneAll, HighlightOff} from "@material-ui/icons";
import {Button, TableBody} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {RemoveFromCart, SubmitCart} from "../functions/ticketFunctions";

const styles = {
    entries: {
        marginLeft: 15
    },
    error: {
        color: '#A5122C',
        marginLeft: 15
    },
    paper: {
        width: "95%",
        float: "left",
        marginLeft: 15
    },
    button: {
        marginTop: 10,
        marginBottom: 25,
        backgroundColor: '#A5122C'
    },
    iconWhite: {
        color: "#FFFFFF",
        marginRight: 8,
        width: 16,
        height: 16
    },
    iconRed: {
        color: "#A5122C",
        width: 24,
        height: 24
    },
    tableDiv: {
        height: 500,
        width: "95%",
        overflowY: "auto",
        overFlowX: "hidden",
        marginBottom: 10,
        marginTop: 10
    }
};

class CartList extends Component {
    constructor(props) {
        super(props);

        this._handleRemove = this._handleRemove.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    };

    _handleRemove(entry) {
        this.props.removeFromCart(
            this.props.ticket.entries.filter(el => el.on !== entry).map((e, i) => {
                e.on = i + 1;
                return e;
            }));
    }

    _handleSubmit(ticket) {
        this.props.submitCart(ticket);
    }

    render() {
        return (
            this.props.ticket && this.props.ticket.entries.length !== 0 ?
                <div style={styles.entries}>
                    <div className="table" style={styles.tableDiv}>
                        <Table className="cart-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>ON</b></TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Time</TableCell>
                                    <TableCell align="center">Hall</TableCell>
                                    <TableCell align="center">Movie</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Seat</TableCell>
                                    <TableCell align="center">Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.props.ticket.entries.map((e, i) => (
                                        <TableRow key={i}>
                                            <TableCell component="th" scope="row">
                                                <b>{e.on}</b>
                                            </TableCell>
                                            <TableCell align="center">
                                                {(new Date(e.reservation.projection.date)).toDateString().replace(/^\S+\s/, '')}
                                            </TableCell>
                                            <TableCell align="center">
                                                {
                                                    (e.reservation.projection.startTime.hour < 10 ? "0" + e.reservation.projection.startTime.hour : e.reservation.projection.startTime.hour) + ":" +
                                                    (e.reservation.projection.startTime.minute < 10 ? "0" + e.reservation.projection.startTime.minute : e.reservation.projection.startTime.minute)
                                                    + " - " +
                                                    (e.reservation.projection.endTime.hour < 10 ? "0" + e.reservation.projection.endTime.hour : e.reservation.projection.endTime.hour) + ":" +
                                                    (e.reservation.projection.endTime.minute < 10 ? "0" + e.reservation.projection.endTime.minute : e.reservation.projection.endTime.minute)
                                                }
                                            </TableCell>
                                            <TableCell align="center">
                                                {e.reservation.projection.hallData.name}
                                            </TableCell>
                                            <TableCell align="center">
                                                {e.reservation.projection.filmId.title}
                                            </TableCell>
                                            <TableCell align="center">
                                                {e.reservation.projection.costOfPlay + " RSD"}
                                            </TableCell>
                                            <TableCell align="center">
                                                {"R: " + e.reservation.seat.row + " N: " + e.reservation.seat.number}
                                            </TableCell>
                                            <TableCell align="center">
                                                <HighlightOff style={styles.iconRed} onClick={() => this._handleRemove(e.on)}/>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                    <div className="controls">
                        <Button variant="contained" color="secondary" style={styles.button}
                                onClick={() => this._handleSubmit(this.props.ticket)}>
                            <DoneAll style={styles.iconWhite}/>
                            Submit cart
                        </Button>
                    </div>
                </div>
                : <Typography variant="body1" style={styles.error} gutterBottom>Your cart is empty.</Typography>
        );
    }
}

const mapStateToProps = state => {
    return {
        ticket: state.TicketReducer.ticket,
        films: state.FilmReducer.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (entries) => dispatch(RemoveFromCart(entries)),
        submitCart: (ticket) => dispatch(SubmitCart(ticket))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);