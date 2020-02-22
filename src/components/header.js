import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

import "./styles/header.css";
class Header extends Component {
  BrandonClick = () => {
    let $navbarApps = document.querySelector(".navbar-apps");
    var $isHide = $navbarApps.classList.contains("hidden");
    if ($isHide) {
      document.querySelector(".navbar-apps.hidden").classList.remove("hidden");
      $navbarApps.classList.add("show");
    }
  };
  render() {
    return (
      <Navbar variant="header">
        <a className="header-brand" onClick={() => this.BrandonClick()}>
          <i class="material-icons">apps</i>
        </a>
        <h5>Sami App</h5>
      </Navbar>
    );
  }
}
export default Header;
