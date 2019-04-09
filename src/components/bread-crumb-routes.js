import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import RoutesReturn from "../components/routes-return";

class BreadcrumbRoutes extends Component {
  render() {
    return (
      <Breadcrumb>
        <RoutesReturn name={this.props.name} />
      </Breadcrumb>
    );
  }
}

export default BreadcrumbRoutes;
