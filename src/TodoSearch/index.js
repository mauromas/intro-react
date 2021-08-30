import React from "react";
import "./TodoSearch.css";

function TodoSearch({ search, setSearch }) {
  const onSearchValuesChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        onChange={onSearchValuesChange}
        value={search}
        className="TodoSearch"
        placeholder="Que quieres buscar"
      />
    </React.Fragment>
  );
}

export { TodoSearch };
