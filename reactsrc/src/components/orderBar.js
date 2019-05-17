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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const styles = {};

class OrderBar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body1" gutterBottom>order.id + " - " + order.timestamp</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="entries-table">

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default OrderBar;