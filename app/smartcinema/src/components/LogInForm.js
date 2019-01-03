import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import {userActions} from "../actions/userActions";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";

export default class LogInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error : '',
            submitted: false
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted : true});
        const {email, password} = this.state;

        // check if it's filled
        console.log(email, password, this.state.submitted)
        if ( email && password ) {
            // do log in
            userActions.login(email, password);
        } else {
            this.error = "Please provide credentials!";
        }
    }

    render() {
        return (
            <form className="form-login" style={{textAlign: "center"}} onSubmit={this._handleSubmit} >
                <TextField name='email' label="E-mail" className="txt-email" style={{display: 'block', marginTop: "4px", marginBottom: "10px"}}
                           onChange={this._handleChange} fullWidth/>
                <TextField name='password' label="Password" className="txt-password" type="password" style={{display: 'block', marginBottom: "10px"}}
                           onChange={this._handleChange} fullWidth/>
                <Button variant="contained" color="primary" type="submit" style={{backgroundColor: "#44C2D2", marginBottom: "20px"}}>Log In</Button>
            </form>
        );
    }
};