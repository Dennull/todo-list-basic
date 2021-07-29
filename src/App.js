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

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const clearList = () => {
    setList([]);
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
        <List list={list} removeItem={removeItem} clearList={clearList} />
        {list.length > 0 && <button onClick={clearList}>Clear All</button>}
      </main>
    </>
  );
}

export default App;
