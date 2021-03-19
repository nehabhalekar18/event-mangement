import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Col, Container, Row,Button } from "react-bootstrap";
import Header from "../components/Header";
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container style={{ textAlign: "center", padding: "5% 0" }}>
          <Row>
            <Col lg={12}>
              <h1>Welcome Evento</h1>
            </Col>
          </Row>
          <br />
          <br/>
          <Row>
            <Col lg={{ span: 12 }}>
              Evento is here to assist you with all the hard work involved in
              planning an event. Manage your customersand events with the help
              of Evento.
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Link to={"/login"}>
          <Button className="loginBtn">Get Started</Button>
          </Link>
        </Container>
      </div>
    );
  }
}
export default LandingPage;
