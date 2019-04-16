import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import MessageComponent from "./messageComponent";
import Typography from "@material-ui/core/Typography";

const style = {
    films: {
        float: "left",
        marginLeft: "15%"
    },
    error: {
        color: '#A5122C',
    }
};

class CartList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            Object.entries(this.props.reservations).length !== 0   ?
                <div>Hello</div> : <Typography variant="body1" component="h3" style={style.error}>Your cart is empty.</Typography>
        );
    }
}

const mapStateToProps = state => {
    return {
        ticket: state.TicketReducer.ticket
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);