import React from "react";

function TodoItem(props) {
  return (
    <React.Fragment>
      <li>
        <span>C</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    </React.Fragment>
  );
}

export { TodoItem };
