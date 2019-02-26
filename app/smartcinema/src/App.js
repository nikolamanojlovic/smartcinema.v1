import React, {Component} from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import {history} from "./helpers/history";

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/authenticate" component={AuthenticationPage}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
