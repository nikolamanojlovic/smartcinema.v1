import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OrderList from "./orderList";
import {connect} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import {GetFilmById} from "../functions/filmFunctions";
import {GetOrdersForCurrentUser} from "../functions/ticketFunctions";

const styles = {
    grid: {
        marginLeft: "15%",
        width: "85%"
    },
    about: {
        marginTop: 25,
        marginLeft: 15
    },
    note: {
        marginLeft: 15,
        marginBottom: 10
    },
    spinner: {
        position: "absolute",
        left: "55%",
        top: "50%",
        color: "#A5122C"
    }
};

class OrderDetails extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.getOrdersForCurrentUser(this.props.userId);
    }

    render() {
        return (
            this.props.orders ?
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
                spacing={0}
                style={styles.grid}
            >
                <Typography variant="h5" style={styles.about} gutterBottom>
                    My orders
                </Typography>
                <OrderList orders={this.props.orders}/>
            </Grid>
            : <div style={styles.grid}><CircularProgress className="spinner" color="secondary" style={styles.spinner} /></div>
        );
    }
}



const mapStateToProps = state => {
    return {
        orders: state.TicketReducer.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOrdersForCurrentUser: (user) => dispatch(GetOrdersForCurrentUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);