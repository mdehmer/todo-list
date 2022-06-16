import ToDo from "./ToDo.js";
import React, { useState } from "react";
import data from "./data.json";

export const List = () => {
    const [listData, setList] = useState(data);

    const handleToggle = (id) => {
      console.log(id)
        let mapped = listData.map((task) => {
        return task.id === id ? { ...task, complete: !task.complete } : { ...task };
      });
      setList(mapped);
    };
    return (
      <div>
          {listData.map(item => {
              return (
                  <ToDo todo={item} handleToggle = {handleToggle}/>
              )
          })}
      </div>
  );
};

if (task.id === id) {
    { ...task, complete: !task.complete }
} else {
    { ...task }
}