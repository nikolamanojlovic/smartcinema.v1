import React, {Component} from 'react';

class AuthenticationPage extends Component {
    render() {
        return (
            <div className="form-control">
                <div className="form-group row">
                    <label className="lbl-username">Username</label>
                    <input className="form-control txt-username" type="text"/>
                </div>
                <div className="form-group row">
                    <label className="lbl-password">Password</label>
                    <input className="form-control txt-password" type="password"/>
                </div>
            </div>
        );
    }
}

export default AuthenticationPage;