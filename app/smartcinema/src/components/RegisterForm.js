import React, {Component} from 'react';

export class RegisterForm extends Component {
    render() {
        return (
            <div className="form-group register-form">
                <div className="form-group row">
                    <label className="lbl-username">Username</label>
                    <input className="form-control txt-username" type="text"/>
                </div>
                <div className="form-group row">
                    <label className="lbl-password">Password</label>
                    <input className="form-control txt-password" type="password"/>
                </div>
                <div className="form-group row">
                    <label className="lbl-confirm-password">Confirm password</label>
                    <input className="form-control txt-confirm-password" type="password"/>
                </div>
                <div className="form-group row">
                    <input className="form-control btn-confirm btn-register" type="button" value="Confirm"/>
                </div>
            </div>
        );
    }
}