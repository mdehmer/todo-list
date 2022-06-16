import "./App.css";
import { Header } from "./Header";
import { List } from "./List";
import data from "./data.json";
import React, { useState } from 'react';

function App() {

  const [ listData, setList ] = useState(data);



  return (
    <div className="App">
      <Header />
      <List content = {listData} />

    </div>
  );
}

export default App;
