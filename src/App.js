import "./App.css";
import List from "./List";
import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      // Show error
    } else {
      const newItem = { id: new Date().getTime().toString(), name: inputText };
      setList([...list, newItem]);
    }
    setInputText("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add an Item"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></input>
          <button type="submit">Add</button>
        </form>
        <List list={list} />
      </main>
    </>
  );
}

export default App;
