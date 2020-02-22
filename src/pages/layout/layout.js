import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "../../components/menu";
import Header from "../../components/header";
import Home from "../home/home";
import Contact from "../contact/contact";
import Company_branch from "../company_branch/company_branc";
import New_Company_branch from "../company_branch/new_company_branch";
import Edit_Company_branch from "../company_branch/edit_company_branch";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/layout.css";
import MenuApps from "../../components/menu-apps";
class Layout extends Component {
  render() {
    return (
      <Router>
        <Header user="Admin" />
        <div className="layout">
          <Menu />
          <MenuApps></MenuApps>
          <div className="layout-content">
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/company_branch" component={Company_branch} />
              <Route
                path="/new_company_branch"
                component={New_Company_branch}
              />
              <Route
                path="/edit_company_branch"
                component={Edit_Company_branch}
              />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
