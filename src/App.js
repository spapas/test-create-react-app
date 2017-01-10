import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Row, Col } from 'react-bootstrap';

import Footer from './components/Footer';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default () => <div>
  <Navbar inverse fixedTop collapseOnSelect>
    <Grid>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Grid>
  </Navbar>
  <Jumbotron>
    <Grid>
      <h1>Welcome to React</h1>
      <Row >
        <Col md={6}>
          <Button
            bsStyle="success"
            href="http://react-bootstrap.github.io/components.html"
            target="_blank">
            View React Bootstrap Docs
          </Button>
        </Col>
        <Col md={1}>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
      </Row>
    </Grid>
  </Jumbotron>
  <Footer />
</div>
