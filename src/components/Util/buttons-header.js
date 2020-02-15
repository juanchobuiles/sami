import React, { Component } from "react";
import { ButtonToolbar } from "react-bootstrap";
import ButtonsTags from "./buttons-tags";

class ButtonsHeader extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ButtonsTags
          buttonsHeader={this.props.buttonsHeader}
          row={this.props.row}
        ></ButtonsTags>
      </ButtonToolbar>
    );
  }
}

export default ButtonsHeader;
