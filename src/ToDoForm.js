import React, { useState } from "react";

export function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    console.log("Submittad");
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form className="row  g-3 align-items-center" onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Jag behöver..."
          className="form-control form-control-lg"
          id="floatingInput"
        />
        <label for="floatingInput">Jag behöver...</label>
        <button type="button" className="btn btn-primary">
          Lägg till
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;
