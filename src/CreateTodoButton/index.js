import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <React.Fragment>
      <button
        className="CreateTodoButton"
        // onClick={() => onClickButton("Aquí se debería abrir el modal")}
      >
        +
      </button>
    </React.Fragment>
  );
}

export { CreateTodoButton };
