import React, {Component} from "react";
import {Divider, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {connect} from "react-redux";
import {UserLogOut} from "../functions/userFunctions";
import {Redirect} from "react-router-dom";
import siteHistory from "../helper/history";

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
        console.log(index);
        switch (index) {
            case 1:
                siteHistory.push("/cart");
                break;
            case 2:
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
                    {['Home', 'Cart', 'Log out'].map((text, index) => (
                        <ListItem button key={text} onClick={() => this._handleClick(index)}>
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

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(UserLogOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);