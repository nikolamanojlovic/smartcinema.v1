import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import {Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import HomePage from "./pages/homePage";

const history = createBrowserHistory();

const App = () => {
   return(
       <Provider store={store}>
           <Router history={history}>
               <Route exact path="/" component={HomePage} />
           </Router>
       </Provider>
   );
};

ReactDOM.render(<App/>, document.getElementById("root"));