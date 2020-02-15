import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import avatar from "../images/avatar.jpeg";
import MaterialIcon from "material-icons-react";
import "./styles/menu.css";
import Avatar from "./layout/avatar";

const Menu = () => (
  <Navbar
    bsPrefix="nav-menu"
    className="toggle-content.is-visible"
    bg="dark"
    variant="dark"
  >
    <Navbar.Brand>
      <Avatar avatar={avatar}></Avatar>
    </Navbar.Brand>
    <hr className="bg-secondary" />
    <Nav md={12} className="flex-column">
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
    </Nav>
  </Navbar>
);
export default Menu;
