import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import MessageComponent from "./messageComponent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


class TicketEntry extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Paper style={this.props.paper}>
                <Typography variant="body1" gutterBottom>{this.props.entry.on}</Typography>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketEntry);