import React from "react";

const Input = ({ newTodo, setNewTodo }) => {
  return (
    <div>
      <input
        className="me-3"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </div>
  );
};

export default Input;
