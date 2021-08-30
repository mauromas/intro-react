// import './styles/App.css';
import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar para llevar", completed: true },
//   { text: "Realizamos el curso de intro-react", completed: false },
//   { text: "Llorar con la llorona", completed: true },
// ];

function App() {
  const localStorageTodo = localStorage.getItem("TODOS_V1");

  let parsedTodo;

  if (!localStorageTodo) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodo = [];
  } else {
    parsedTodo = JSON.parse(localStorageTodo);
  }

  const saveTodos = (newTodos) => {
    const stringifiedNewTodos = JSON.stringify(newTodos); //Aca Guardo los newTodos en TEXTO en la nueva constante
    localStorage.setItem("TODOS_V1", stringifiedNewTodos); //Aca paso toda la informacion de newTodos al LocalStorage
    setTodos(newTodos);
  };

  const [todos, setTodos] = React.useState(parsedTodo);
  const [search, setSearch] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search >= 1) {
    //En estas lineas, realizamos el filtrado en el search
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText.toLowerCase());
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; //Esta linea es para poder marcar y desenmarcar
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
