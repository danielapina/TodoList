import React from "react";

const List = ({ todos, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((data, index) => (
          <li
            className="me-3"
            style={{ color: index % 2 === 0 ? "black" : "blue" }}
            key={index}
          >
            {" "}
            {data}{" "}
            <button
              type="button"
              className="btn btn-danger mt-3"
              onClick={() => removeTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
