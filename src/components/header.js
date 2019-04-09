import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import MaterialIcon from "material-icons-react";
class Header extends Component {
  state = {
    displayMenu: true
  };

  ocultaNav = () => {
    const el = document.querySelector(".nav-menu");
    if (this.state.displayMenu) {
      el.classList.add("show");
      el.classList.remove("hide");

      // document.querySelector(".nav-menu").style.display = "block";
      this.setState({
        displayMenu: false
      });
    } else {
      el.classList.add("hide");
      el.classList.remove("show");
      // document.querySelector(".nav-menu").style.display = "none";
      this.setState({
        displayMenu: true
      });
    }
  };

  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand as="a" onClick={this.ocultaNav}>
          <MaterialIcon icon="menu" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hola, <a href="#login">{this.props.user} </a>
            <Button variant="outline-danger">
              <i className="material-icons">exit_to_app</i>
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
