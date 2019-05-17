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
import OrderBar from "./orderBar";

const styles = {
    pastOrders: {
        marginLeft: 15,
        overflowY: "auto",
        overFlowX: "hidden"
    },
    error: {
        color: '#A5122C',
        marginLeft: 15
    }
};

class OrderList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            this.props.orders && this.props.orders.length !== 0 ?
                <div style={styles.pastOrders}>
                    {
                        this.props.orders.map((e,i) => (
                            <OrderBar order={e}/>
                        ))
                    }
                </div>
                :
                <Typography variant="body1" style={styles.error} gutterBottom>
                    You have no orders, navigate to a film page in order to purchase tickets.
                </Typography>
        );
    }
}

export default OrderList;