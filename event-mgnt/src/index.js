import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { Provider } from 'react-redux';
import createStore from './createReduxStore';

    const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
