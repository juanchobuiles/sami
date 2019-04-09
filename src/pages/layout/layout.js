import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "../../components/menu";
import Header from "../../components/header";
import Home from "../home/home";
import Contact from "../contact/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/layout.css";
class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="layout">
          <Menu />
          <div className="layout-content">
            <Header user="Admin" />
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
