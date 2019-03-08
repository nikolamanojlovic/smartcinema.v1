import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LogInForm from "../components/logInForm";
import MessageComponent from "../components/messageComponent";
import {connect} from "react-redux";

const style = {
    grid : {
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: '#A5122C'
    },
    paper : {
        paddingTop: 25,
        paddingBottom: 25,
        width: '25%',
    },
    txtLogIn: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 35,
        fontWeight: 'bold'
    },
    logo: {
        display: 'block',
        margin: 25,
        width: '25%',
        height: '25%'
    }
};

class LogInPage extends Component {
    render() {
        return (
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={style.grid}>
                <img src={require('../images/logo.svg')} alt="SmartCinema Logo" style={style.logo}/>
                <Paper style={style.paper}>
                    <LogInForm/>
                </Paper>
                <MessageComponent/>
            </Grid>
        );
    }
}

export default connect(null)(LogInPage);