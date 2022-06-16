import "./App.css";
import { Header } from "./Header";
import { List } from "./List";
import data from "./data.json";
import React, { useState } from "react";

function App() {
  const [listData, setList] = useState(data);

  const handleToggle = (id) => {
    let mapped = listData.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setList(mapped);
  };

  return (
    <div className="App">
      <Header />
      <List content={listData} />
    </div>
  );
}

export default App;
