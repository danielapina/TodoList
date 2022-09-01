import React, { useState, useEffect } from "react";

import Input from "./components/Input";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(["one", "two"]);

  const [filterList, setFilterList] = useState(todos);

  const filterBySearch = (event) => {
    const query = event.target.value;

    let updatedList = [...todos];

    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilterList(updatedList);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setFilterList(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    console.log(todos);
  };

  const removeTodo = (inx) => {
    const newArr = [...todos];
    newArr.splice(inx, 1);
    setTodos(newArr);
    setFilterList(newArr);
  };
  useEffect(() => {}, [filterList, todos]);

  return (
    <div className="container mt-3">
      <Search
        filterBySearch={filterBySearch}
        todos={todos}
        setNewTodo={setTodos}
      />
      <form onSubmit={handleSubmit}>
        <Input newTodo={newTodo} setNewTodo={setNewTodo} />
        <List todos={filterList} removeTodo={removeTodo} />
      </form>
    </div>
  );
}

export default App;
