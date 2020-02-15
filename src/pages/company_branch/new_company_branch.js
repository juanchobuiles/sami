import React, { Component } from "react";
import BreadcrumbRoutes from "../../components/bread-crumb-routes";
import BootstrapTable from "react-bootstrap-table-next";
import { ButtonToolbar, Button } from "react-bootstrap";
class New_Company_branch extends Component {
  state = {
    routes: [
      { name: "Sucursales", active: false, route: "/company_branch" },
      { name: "Nueva sucursal", active: true }
    ]
  };

  render() {
    return (
      <div>
        <BreadcrumbRoutes name={this.state.routes} />
        <h1>Vista para crear nuevo sucursal</h1>
      </div>
    );
  }
}

export default New_Company_branch;
