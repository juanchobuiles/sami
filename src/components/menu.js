import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import avatar from "../images/avatar.jpeg";
import MaterialIcon from "material-icons-react";
import "./styles/menu.css";
import Avatar from "./layout/avatar";
class Menu extends Component {
  toggleOnclick = () => {
    let $navbarVertical = document.querySelector(".navbar-vertical");
    var $isShow = $navbarVertical.classList.contains("show");
    var $isHide = $navbarVertical.classList.contains("hidden");
    let $pShow = document.querySelectorAll(".nav-item-p.show");
    let $pHidden = document.querySelectorAll(".nav-item-p.hidden");
    if ($isShow) {
      document.querySelector(".navbar-vertical.show").classList.remove("show");
      $navbarVertical.classList.add("hidden");
      for (var i = 0; i < $pShow.length; i++) {
        $pShow[i].classList.remove("show");
        $pShow[i].classList.add("hidden");
      }
    } else if ($isHide) {
      document
        .querySelector(".navbar-vertical.hidden")
        .classList.remove("hidden");
      $navbarVertical.classList.add("show");
      for (var i = 0; i < $pHidden.length; i++) {
        $pHidden[i].classList.remove("hidden");
        $pHidden[i].classList.add("show");
      }
    }
  };

  render() {
    return (
      <Navbar
        bsPrefix="nav-menu"
        className="navbar-vertical show"
        variant="sidebar"
      >
        <Nav>
          <ul className="navbar-nav">
            <li className="navbar-nav-toggle">
              <a className="toggle" onClick={() => this.toggleOnclick()}>
                <i className="material-icons">menu</i>
              </a>
            </li>
            <li class="nav-item">
              <LinkContainer to="/home">
                <Nav.Link>
                  <i className="material-icons">home</i>
                  <p className="nav-item-p show">Inicio</p>
                </Nav.Link>
              </LinkContainer>
            </li>
            <li class="nav-item">
              <LinkContainer to="/contact">
                <Nav.Link>
                  <i className="material-icons">assignment</i>
                  <p className="nav-item-p show">Inicio</p>
                </Nav.Link>
              </LinkContainer>
            </li>
            <li>
              <NavDropdown
                title={
                  <div style={{ display: "inline-block" }}>
                    <i className="material-icons">settings</i>
                    <p className="nav-item-p show"> Configuración</p>
                  </div>
                }
                drop="right"
              >
                <div className="nav-dropdown">
                  <LinkContainer to="/selections">
                    <NavDropdown.Item>
                      <i className="material-icons">description </i>
                      <p className="nav-item-p show">Empresa</p>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/company_branch">
                    <NavDropdown.Item>
                      <i className="material-icons">person</i>{" "}
                      <p className="nav-item-p show">Sucursales</p>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/items">
                    <NavDropdown.Item>
                      <i className="material-icons">view_module</i>
                      <p className="nav-item-p show"> Centro utilidad</p>
                    </NavDropdown.Item>
                  </LinkContainer>
                </div>
              </NavDropdown>
            </li>
          </ul>
        </Nav>
        {/* <Nav md={12} className="flex-column">
      <LinkContainer to="/home">
        <Nav.Link>
          <i className="material-icons">home</i>
          Inicio
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>
          <i className="material-icons">assignment</i> Contacto
        </Nav.Link>
      </LinkContainer>
      <NavDropdown
        title={
          <div style={{ display: "inline-block" }}>
            <i className="material-icons">settings</i> Configuración
          </div>
        }
        drop="right"
      >
        <div className="nav-dropdown">
          <LinkContainer to="/selections">
            <NavDropdown.Item>
              <i className="material-icons">description </i> Empresa
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/company_branch">
            <NavDropdown.Item>
              <i className="material-icons">person</i> Sucursales
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/items">
            <NavDropdown.Item>
              <i className="material-icons">view_module</i> Centro utilidad
            </NavDropdown.Item>
          </LinkContainer>
        </div>
      </NavDropdown>
    </Nav> */}
      </Navbar>
    );
  }
}

export default Menu;
