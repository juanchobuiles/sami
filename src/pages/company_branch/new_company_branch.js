import React, { Component } from "react";
import BreadcrumbRoutes from "../../components/bread-crumb-routes";
import BootstrapTable from "react-bootstrap-table-next";
import { ButtonToolbar, Button, Col, Form } from "react-bootstrap";
import ButtonsTags from "../../components/Util/buttons-tags";

class New_Company_branch extends Component {
  state = {
    routes: [
      { name: "Sucursales", active: false, route: "/company_branch" },
      { name: "Nueva sucursal", active: true }
    ]
  };

  saveBranch = () => {
    console.log("almaceno los datos");
  };

  render() {
    return (
      <div>
        <BreadcrumbRoutes name={this.state.routes} />
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formSucursalName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre sucursal" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formSucursalCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" placeholder="Nombre ciudad" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formSucursalAddress1">
              <Form.Label>Dirección 1</Form.Label>
              <Form.Control type="text" placeholder="Dirección sucursal 1" />
            </Form.Group>

            <Form.Group as={Col} controlId="formSucursalAddress2">
              <Form.Label>Dirección 2</Form.Label>
              <Form.Control type="text" placeholder="Dirección sucursal 2" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formSucursalPhone1">
              <Form.Label>Teléfono 1</Form.Label>
              <Form.Control type="text" placeholder="Teléfono sucursal 1" />
            </Form.Group>

            <Form.Group as={Col} controlId="formSucursalPhone2">
              <Form.Label>Teléfono 2</Form.Label>
              <Form.Control type="text" placeholder="Teléfono sucursal 2" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formSucursalMobile1">
              <Form.Label>Teléfono celular 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono celular sucursal 1"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSucursalMobile2">
              <Form.Label>Teléfono celular 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono celular sucursal 2"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formSucursalEmail1">
              <Form.Label>Correo eletrónico 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Correo electrónico sucursal 1"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSucursalEmail2">
              <Form.Label>Correo eletrónico 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Correo electrónico  sucursal 2"
              />
            </Form.Group>
          </Form.Row>
          <ButtonToolbar>
            <Button variant="success" onClick={() => this.saveBranch()}>
              <i className="material-icons">save</i> Guardar
            </Button>
            <Button variant="danger">
              <i className="material-icons">cancel</i> Cancelar
            </Button>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}

export default New_Company_branch;
