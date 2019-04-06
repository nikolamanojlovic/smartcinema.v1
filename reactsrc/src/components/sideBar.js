import {Component} from "react";
import AppBar from "./menuComponent";
import React from "react";
import {Divider, Drawer, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {connect} from "react-redux";

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
    render() {
        return (
            <nav style={styles.nav}>
                <img src={require('../images/logo.svg')} alt="SmartCinema Logo" style={styles.logo}/>
                <Typography style={styles.p}>
                    {this.props.user.name + " " + this.props.user.lastName}
                </Typography>
                <Divider variant="middle" style={styles.divider}/>
                <List>
                    {['Home', 'Cart', 'Log out'].map((text, index) => (
                        <ListItem button key={text}>
                            {/*<ListItemIcon>rgerg</ListItemIcon>*/}
                            <Typography style={styles.item}>
                                {text}
                            </Typography>
                        </ListItem>
                    ))}
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

export default connect(mapStateToProps)(SideBar);