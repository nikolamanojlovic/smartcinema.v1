import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import MessageComponent from "./messageComponent";
import Typography from "@material-ui/core/Typography";
import TicketEntry from "./ticketEntry";

const styles = {
    films: {
        float: "left",
        marginLeft: "15%"
    },
    error: {
        color: '#A5122C',
        marginLeft: 15
    },
    paper: {
        marginLeft: 15
    }
};

class CartList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            this.props.ticket && this.props.ticket.entries.length !== 0 ?
                this.props.ticket.entries.map((e, i) => (
                    <TicketEntry key={i} entry={e} paper={styles.paper}/>
                ))
                : <Typography variant="body1" style={styles.error} gutterBottom>Your cart is empty.</Typography>
        );
    }
}

const mapStateToProps = state => {
    return {
        ticket: state.TicketReducer.ticket
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);