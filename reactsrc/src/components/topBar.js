import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {UserLogOut} from "../functions/userFunctions";
import {ExitToApp} from '@material-ui/icons';
import {ClearMessage} from "../functions/messageFunctions";
import {RemoveFilm} from "../functions/filmFunctions";

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

    _handleClick() {
        this.props.clearMessage();
        this.props.logOut();
    }

    render() {
        return (
            <nav style={styles.nav}>
                <img src={require('../images/logo.svg')} alt="SmartCinema Logo" style={styles.logo}/>
                <Typography style={styles.p}>
                    {this.props.user.name + " " + this.props.user.lastName}
                    <ExitToApp style={styles.item} onClick={() => this._handleClick()}/>
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