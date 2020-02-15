import React, { Component } from "react";
import BreadcrumbRoutes from "../../components/bread-crumb-routes";
import BootstrapTable from "react-bootstrap-table-next";
import { ButtonToolbar, Button } from "react-bootstrap";
class Company_branch extends Component {
  state = {
    routes: [{ name: "Sucursal", active: true }]
  };

  render() {
    const data = [
      { id: 1, name: "Principal", direccion: "Calle 1 23" },
      { id: 2, name: "Teinda 1", direccion: "Calle de tienda" }
    ];
    const columns = [
      {
        dataField: "id",
        text: "#"
      },
      {
        dataField: "name",
        text: "Descripción"
      },
      {
        dataField: "direccion",
        text: "Dirección"
      },
      {
        dataField: "actions",
        text: "",
        formatter: (cellContent, row) => (
          <ButtonToolbar className="buttons">
            <Button variant="outline-dark" size="sm">
              <i class="material-icons">edit</i>
            </Button>
            <Button variant="outline-danger" size="sm">
              <i class="material-icons">delete</i>
            </Button>
          </ButtonToolbar>
        )
      }
    ];
    return (
      <div>
        <BreadcrumbRoutes name={this.state.routes} />
        <ButtonToolbar>
          <Button variant="outline-dark" size="lg">
            <i class="material-icons">note_add</i> Nuevo
          </Button>
        </ButtonToolbar>
        <BootstrapTable keyField="id" data={data} columns={columns} />
      </div>
    );
  }
}

export default Company_branch;
