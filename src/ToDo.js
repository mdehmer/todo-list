// import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

// export function ToDo() {

// }

const ToDo = ({ todo, handleToggle }) => {
  //   return <div className="strike">{todo.task}</div>;
  return (
    <div className={todo.complete ? "strike" : ""}>
      <input
        checked={todo.complete}
        type="checkbox"
        onClick={() => handleToggle(todo.id)}
      />
      {todo.task}
    </div>
  );
};

export default ToDo;
