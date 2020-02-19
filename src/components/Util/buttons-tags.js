import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const ButtonsTags = props => {
  let item = [];
  props.buttonsHeader.forEach((element, index) => {
    switch (element.name) {
      case "new":
        item.push(
          <LinkContainer to={element.route} key={index}>
            <Button variant="outline-secondary">
              <i className="material-icons">add</i>
              Nuevo
            </Button>
          </LinkContainer>
        );
        break;
      case "print":
        console.log(element);
        item.push(
          <Button
            variant={element.variant}
            key={index}
            size={element.size}
            onClick={element.onClick}
          >
            <i className="material-icons">print</i> {element.title}
          </Button>
        );
        break;
      case "export":
        item.push(
          <Button variant="outline-secondary" key={index}>
            <i className="material-icons">import_export</i>
            Exportar
          </Button>
        );
        break;
      case "edit":
        item.push(
          <Button variant={element.variant} key={index} size={element.size}>
            <i className="material-icons">edit</i> {element.title}
          </Button>
        );
        break;
      case "save":
        item.push(
          <Button
            variant={element.variant}
            key={index}
            size={element.size}
            onClick={() => element.onClick()}
          >
            <i className="material-icons">save</i> {element.title}
          </Button>
        );
        break;
      case "cancel":
        item.push(
          <Button variant={element.variant} key={index} size={element.size}>
            <i className="material-icons">cancel</i> {element.title}
          </Button>
        );
        break;
      default:
        break;
    }
  });

  return item;
};
export default ButtonsTags;
