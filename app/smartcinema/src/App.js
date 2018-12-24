import React, {Component} from 'react';
import './App.css';
import {Route, Router} from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute";
import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import {history} from "./helpers/history";

class App extends Component {
  render() {
    return (
        <div className="container">
            <Router history={history}>
                <div>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/authenticate" component={AuthenticationPage}/>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
