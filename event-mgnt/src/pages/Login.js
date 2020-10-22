import React, { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import Header from "../components/Header";
class Login extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container style={{ textAlign: "center", padding: "5% 0" }}>
          <Row>
            <Col lg={12}>
              <h1>Evento</h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg={{ span: 6, offset: 4 }}>
              <InputGroup>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col lg={12}>
              <input type="password" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;

