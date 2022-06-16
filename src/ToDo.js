import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  return (
    <div>
      <input
        checked={todo.complete}
        type="checkbox"
        className="form-check-input"
        onClick={() => handleToggle(todo.id)}
      />
      <label
        className={`to-do-item form-check-label ${
          todo.complete ? "strike" : ""
        } `}
      >
        {todo.task}
      </label>
    </div>
  );
};

export default ToDo;
