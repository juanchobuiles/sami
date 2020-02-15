import React, { Component } from "react";
import BreadcrumbRoutes from "../../components/bread-crumb-routes";
import BootstrapTable from "react-bootstrap-table-next";
import { ButtonToolbar, Button } from "react-bootstrap";
class Edit_Company_branch extends Component {
  state = {
    routes: [
      { name: "Sucursales", active: false, route: "/company_branch" },
      { name: "Modifica sucursal", active: true }
    ]
  };

  render() {
    return (
      <div>
        <BreadcrumbRoutes name={this.state.routes} />
        <h1>Vista para crear modificar sucursal</h1>
      </div>
    );
  }
}

export default Edit_Company_branch;
