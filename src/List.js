import ToDo from "./ToDo.js";
import React, { useState } from "react";
//import data from "./data.json";
import { ToDoForm } from "./ToDoForm";
import { Stats } from "./Stats";

export const List = () => {
  const [listData, setList] = useState([]);

  const handleToggle = (id) => {
    let mapped = listData.map((item) => {
      return item.id === id
        ? { ...item, complete: !item.complete }
        : { ...item };
    });
    setList(mapped);
  };

  const handleFilter = () => {
    let filtered = listData.filter((item) => {
      return !item.complete;
    });
    setList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...listData];
    copy = [
      ...copy,
      {
        id: Date.now(),
        task: userInput,
        complete: false,
      },
    ];
    setList(copy);
  };

  return (
    <div className="List-body">
      <Stats listData={listData} />
      <ToDoForm addTask={addTask} />
      {listData.map((item) => {
        return (
          <ToDo
            todo={item}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button
        onClick={handleFilter}
        type="button"
        className="btn btn-outline-dark"
      >
        Rensa avklarade
      </button>
    </div>
  );
};
