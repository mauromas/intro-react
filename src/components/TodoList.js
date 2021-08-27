import React from "react";

function TodoList(props) {
  return (
    <React.Fragment>
      <section>
        <ul>{props.children}</ul>
      </section>
    </React.Fragment>
  );
}

export { TodoList };
