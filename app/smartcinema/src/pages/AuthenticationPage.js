import React, {Component} from 'react';
import LogInForm from "../components/LogInForm";

class AuthenticationPage extends Component {
    render() {
        return (
            <div className="authentication-page">
                <LogInForm/>
            </div>
        );
    }
}

export default AuthenticationPage;