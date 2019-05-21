import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {TableBody} from "@material-ui/core";
import {HighlightOff} from "@material-ui/icons";

const styles = {
    panel: {
        width: "98%",
        marginBottom: 10
    },
    expand: {
        backgroundColor: "#A5122C",
        height: "85%"
    },
    typo: {
        color: "#FFFFFF"
    },
    ico: {
        color: "#FFFFFF"
    },
    table: {
        width: "100%",
    }
};

class OrderBar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ExpansionPanel style={styles.panel}>
                <ExpansionPanelSummary style={styles.expand} expandIcon={<ExpandMoreIcon style={styles.ico}/>}>
                    <Typography style={styles.typo} variant="body1" gutterBottom>
                        <b>ID:</b> {this.props.order.id} <b>Order date:</b> {(new Date(this.props.order.timestamp)).toDateString().replace(/^\S+\s/, '')}<br/>
                        <b>Total:</b> {this.props.order.price} RSD
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="entries-table" style={styles.table}>
                        <Table className="order-details-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>ON</b></TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Time</TableCell>
                                    <TableCell align="center">Hall</TableCell>
                                    <TableCell align="center">Movie</TableCell>
                                    <TableCell align="center">Seat</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.props.order.entries.map((e, i) => (
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
                                                {e.reservation.projection.filmTitle}
                                            </TableCell>
                                            <TableCell align="center">
                                                {"R: " + e.reservation.seat.row + " N: " + e.reservation.seat.number}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default OrderBar;