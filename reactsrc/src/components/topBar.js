import React, {Component} from "react";
import {Divider, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {connect} from "react-redux";
import {UserLogOut} from "../functions/userFunctions";
import siteHistory from "../helper/history";
import {Clear, ExitToApp, Home, Receipt, ShoppingCart} from '@material-ui/icons';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {ClearMessage} from "../functions/messageFunctions";
import {RemoveFilm, RemoveFilms} from "../functions/filmFunctions";
import {RemoveTicketForCurrentUser} from "../functions/ticketFunctions";

const styles = {
    nav: {
        width: "100%",
        height: "6%",
        zIndex: 1,
        position: "fixed",
        backgroundColor: '#A5122C',
    },
    logo: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 5,
        width: '10%',
        float: "left"
    },
    p: {
        color: "#FFFFFF",
        marginTop: 10,
        marginRight: 10,
        marginBottom: 5,
        float: "right",
        fontSize: 16
    },
    item: {
        color: "#FFFFFF",
        marginLeft: 10,
        float: "right"
    },
    divider: {
        backgroundColor: "#FFFFFF"
    }
};

class TopBar extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    };

    _handleClick(index) {
        this.props.clearMessage();
    }

    render() {
        return (
            <nav style={styles.nav}>
                <img src={require('../images/logo.svg')} alt="SmartCinema Logo" style={styles.logo}/>
                <Typography style={styles.p}>
                    {this.props.user.name + " " + this.props.user.lastName}
                    <ExitToApp style={styles.item}/>
                </Typography>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(UserLogOut()),
        clearMessage: () => dispatch(ClearMessage()),
        removeFilm: () => dispatch(RemoveFilm())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);