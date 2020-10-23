import React, { Component } from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={LandingPage}></Route>

          <Route path="/login" exact component={Login}></Route>
        </div>
      </Router>
    );
  }
}
export default Routes;
