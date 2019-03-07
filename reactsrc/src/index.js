import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import LogInPage from "./pages/logInPage";
import PrivateRoute from "./helper/privateRoute";
import HomePage from "./pages/homePage";

const history = createBrowserHistory();

const App = () => {
   return(
       <Provider store={store}>
           <Router history={history}>
               <Switch>
                   <Route exact path="/login" component={LogInPage} />
                   <PrivateRoute path="/" component={HomePage}/>
               </Switch>
           </Router>
       </Provider>
   );
};

ReactDOM.render(<App/>, document.getElementById("root"));