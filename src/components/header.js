import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

import "./styles/header.css";
class Header extends Component {
  render() {
    return (
      <Navbar variant="header">
        <a className="header-brand">
          <i class="material-icons">apps</i>
        </a>
        <h5>Sami App</h5>
      </Navbar>
    );
  }
}
export default Header;
