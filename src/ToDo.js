import React from "react";

// export function ToDo() {

// }

export const ToDo = ({ todo, handleToggle }) => {
  //   return <div className="strike">{todo.task}</div>;
  return <div onClick = {() => handleToggle(todo.id)} className={todo.complete ? "strike" : ""}>{todo.task}</div>;
};

export default ToDo;
