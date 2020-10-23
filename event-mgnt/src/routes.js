import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

class routes extends Component {
    render(){
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login" exact component={Login}>
          </Route>
          <Route path="/landingPage"  exact component={LandingPage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
        }
}
export default routes;