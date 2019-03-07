import {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import UserLogIn from "../functions/userFunctions";
import React from "react";
import {Redirect} from "react-router-dom";

const style = {
    form : {
        marginLeft: 20,
        marginRight: 20,
    },
    field : {
        display: 'block',
        width: '100%'
    },
    button : {
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: '#A5122C'
    }
};

const credentials = {
    email: '',
    password: ''
};

class LogInForm extends Component {
    _login() {
        if ( this.props.user ) {
            <Redirect exact path="/"/>
        } else {
            UserLogIn({email : credentials.email, password: credentials.password});
            console.log(credentials)
        }
    };

    render() {
        return (
            <form style={style.form}>
                <TextField
                    id="login-email"
                    label="E-mail"
                    margin="normal"
                    style={style.field}
                    ref="email"
                    inputRef={$el=>{credentials.email = $el.value}}
                    fullWidth
                />
                <TextField
                    id="login-password"
                    label="Password"
                    type="password"
                    margin="normal"
                    style={style.field}
                    ref="password"
                    inputRef={$el=>{credentials.password = $el.value}}
                    fullWidth
                />
                <Button variant="contained" color="secondary" style={style.button} onClick={this._login()}>
                    Log In
                </Button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(LogInForm);