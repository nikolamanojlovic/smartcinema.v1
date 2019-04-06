import LogInPage from "./pages/logInPage";
import PrivateRoute from "./helper/privateRoute";
import HomePage from "./pages/homePage";
import CartPage from "./pages/cartPage";
import FilmPage from "./pages/filmPage";
import React, {Component} from "react";
import {Route, Router, Switch} from "react-router-dom";
import siteHistory from "./helper/history";

class App extends Component {
   render() {
       return(
           <Router history={siteHistory}>
               <Switch>
                   <Route exact path="/login" component={LogInPage}/>
                   <PrivateRoute path="/cart" component={CartPage}/>
                   <PrivateRoute path="/film" component={FilmPage}/>
                   <PrivateRoute path="/" component={HomePage}/>
               </Switch>
           </Router>
       );
   }
}

export default App;