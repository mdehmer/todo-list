import React, { useState } from "react";

export function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form className="row  g-3 align-items-center" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          value={userInput}
          type="text"
          className="form-control"
          onChange={handleChange}
          placeholder="Jag behöver..."
          aria-label="Jag behöver..."
          aria-describedby="button-addon2"
          id="floatingInput"
        />
        <input value="+" className="btn btn-dark" type="submit" id="button-addon2" />
      </div>
    </form>
  );
}

export default ToDoForm;
