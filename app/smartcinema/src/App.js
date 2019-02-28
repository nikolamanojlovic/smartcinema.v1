import React, {Component} from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import PrivateRoute from "./components/PrivateRoute";
import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/authenticate" component={AuthenticationPage}/>
                    <PrivateRoute path="/" component={HomePage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
