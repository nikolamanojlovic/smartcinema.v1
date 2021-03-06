import React, {Component} from "react";
import {Divider, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {connect} from "react-redux";
import {UserLogOut} from "../functions/userFunctions";
import siteHistory from "../helper/history";
import {Clear, Home, Receipt, ShoppingCart} from '@material-ui/icons';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {ClearMessage} from "../functions/messageFunctions";
import {RemoveFilm, RemoveFilms} from "../functions/filmFunctions";
import {RemoveTicketForCurrentUser} from "../functions/ticketFunctions";

const styles = {
    nav: {
        width: "15%",
        height: "100%",
        zIndex: 1,
        position: "fixed",
        backgroundColor: '#A5122C',
        textAlign: "center"
    },
    logo: {
        marginTop: 20,
        marginBottom: 20,
        width: '75%',
    },
    p: {
        color: "#FFFFFF",
        fontWeight: "bold",
        marginBottom: 20
    },
    item: {
        color: "#FFFFFF",
        fontSize: 18
    },
    divider: {
        backgroundColor: "#FFFFFF"
    }
};

class SideBar extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    };

    _handleClick(index) {
        this.props.clearMessage();
        this.props.removeFilm();
        switch (index) {
            case 1:
                siteHistory.push("/cart");
                break;
            case 2:
                siteHistory.push("/orders");
                break;
            case 3:
                this.props.clearTicket();
                this.props.clearFilms();
                this.props.logOut();
                break;
            default:
                siteHistory.push("/");
                break;
        }
    }

    render() {
        return (
            <nav style={styles.nav}>
                <img src={require('../images/logo.svg')} alt="SmartCinema Logo" style={styles.logo}/>
                <Typography style={styles.p}>
                    {this.props.user.name + " " + this.props.user.lastName}
                </Typography>
                <Divider variant="middle" style={styles.divider}/>
                <List>
                    <ListItem button key='Home' onClick={() => this._handleClick(0)}>
                        <ListItemIcon><Home style={{color: "#FFF"}}/></ListItemIcon>
                        <Typography style={styles.item}>
                            Home
                        </Typography>
                    </ListItem>
                    <ListItem button key='Cart' onClick={() => this._handleClick(1)}>
                        <ListItemIcon><ShoppingCart style={{color: "#FFF"}}/></ListItemIcon>
                        <Typography style={styles.item}>
                            Cart
                        </Typography>
                    </ListItem>
                    <ListItem button key='PastOrders' onClick={() => this._handleClick(2)}>
                        <ListItemIcon><Receipt style={{color: "#FFF"}}/></ListItemIcon>
                        <Typography style={styles.item}>
                            Past orders
                        </Typography>
                    </ListItem>
                    <ListItem button key='Log out' onClick={() => this._handleClick(3)}>
                        <ListItemIcon><Clear style={{color: "#FFF"}}/></ListItemIcon>
                        <Typography style={styles.item}>
                            Log out
                        </Typography>
                    </ListItem>
                </List>
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
        clearTicket: () => dispatch(RemoveTicketForCurrentUser()),
        clearFilms: () => dispatch(RemoveFilms()),
        clearMessage: () => dispatch(ClearMessage()),
        removeFilm: () => dispatch(RemoveFilm())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);