import React, { Component } from "react";
import BreadcrumbRoutes from "../../components/bread-crumb-routes";
class Contact extends Component {
  state = {
    routes: [{ name: "Contacto", active: true }]
  };
  render() {
    return (
      <div>
        <BreadcrumbRoutes name={this.state.routes} />
        <h1>Contacto</h1>
      </div>
    );
  }
}

export default Contact;
