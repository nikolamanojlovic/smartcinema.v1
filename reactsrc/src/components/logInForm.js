import {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import React from "react";
import {Redirect} from "react-router-dom";
import {UserLogIn} from "../functions/userFunctions";

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

class LogInForm extends Component {
    constructor(props) {
        super(props);
        // local state
        this.state = {
            email: '',
            password: ''
        };

        this._handleChange = this._handleChange.bind(this);
    };

    _login() {
        if ( this.props.user ) {
            <Redirect exact path="/"/>
        } else {
            this.props.logIn(this.state.email, this.state.password);
        }
    };

    _handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    render() {
        return (
            <form style={style.form}>
                <TextField
                    id="login-email"
                    name="email"
                    label="E-mail"
                    margin="normal"
                    style={style.field}
                    value={this.state.email}
                    onChange={this._handleChange}
                    fullWidth
                />
                <TextField
                    id="login-password"
                    name="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    style={style.field}
                    value={this.state.password}
                    onChange={this._handleChange}
                    fullWidth
                />
                <Button variant="contained" color="secondary" style={style.button} onClick={() => this._login()}>
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

const mapDispatchToProps = dispatch => {
    return {
        logIn: (email, password) => dispatch(UserLogIn(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);