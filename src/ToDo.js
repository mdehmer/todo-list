import React from "react";

// export function ToDo() {

// }

export const ToDo = ({ todo }) => {
  //   return <div className="strike">{todo.task}</div>;
  return <div className={todo.complete ? "strike" : ""}>{todo.task}</div>;
};

export default ToDo;
