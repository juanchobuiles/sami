import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./styles/menu-apps.css";
class MenuApps extends Component {
  BrandonClick = () => {
    let $navbarApps = document.querySelector(".navbar-apps");
    var $isShow = $navbarApps.classList.contains("show");
    if ($isShow) {
      document.querySelector(".navbar-apps.show").classList.remove("show");
      $navbarApps.classList.add("hidden");
    }
  };
  render() {
    return (
      <nav className="navbar-apps show">
        <div className="navbar-brand">
          <a onClick={() => this.BrandonClick()}>
            <i class="material-icons">apps</i>
          </a>
          <h5>Modúlos</h5>
        </div>

        <hr className="bg-secondary" />
      </nav>
    );
  }
}

export default MenuApps;
