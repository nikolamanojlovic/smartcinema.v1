import LogInPage from "./pages/logInPage";
import PrivateRoute from "./helper/privateRoute";
import HomePage from "./pages/homePage";
import CartPage from "./pages/cartPage";
import FilmPage from "./pages/filmPage";
import OrderPage from "./pages/orderPage";
import AdminPage from "./pages/adminPage";
import React, {Component} from "react";
import {Route, Router, Switch} from "react-router-dom";
import siteHistory from "./helper/history";
import AdminRoute from "./helper/adminRoute";

class App extends Component {
   render() {
       return(
           <Router history={siteHistory}>
               <Switch>
                   <Route exact path="/login" component={LogInPage}/>
                   <PrivateRoute path="/cart" component={CartPage}/>
                   <PrivateRoute path="/orders" component={OrderPage}/>t
                   <PrivateRoute path="/film/*" component={FilmPage}/>
                   <AdminRoute path="/admin" component={AdminPage}/>
                   <PrivateRoute path="/" component={HomePage}/>
               </Switch>
           </Router>
       );
   }
}

export default App;