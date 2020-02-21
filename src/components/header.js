import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

import "./styles/header.css";
class Header extends Component {
  render() {
    return (
      // <Navbar bg="light">
      //   <Navbar.Brand>
      //     <Button>
      //       <i className="material-icons">apps</i>
      //     </Button>
      //   </Navbar.Brand>
      //   <Navbar.Toggle />
      //   <Navbar.Collapse className="justify-content-end">
      //     <Navbar.Text>
      //       Hola, <a href="#login">{this.props.user} </a>
      //       <Button variant="outline-danger">
      //         <i className="material-icons">exit_to_app</i>
      //       </Button>
      //     </Navbar.Text>
      //   </Navbar.Collapse>
      // </Navbar>
      <Navbar variant="header">
        <Navbar.Brand>
          <Button variant="header" size="sm">
            <i class="material-icons">apps</i>
          </Button>
          Sami
        </Navbar.Brand>
      </Navbar>
    );
  }
}
export default Header;
