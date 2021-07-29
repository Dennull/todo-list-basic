import "./App.css";
import List from "./List";
import Alert from "./Alert";
import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      displayAlert(true, "Please enter a value", "error");
    } else if (inputText && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, name: inputText };
          }
          return item;
        })
      );
      setInputText("");
      setIsEditing(false);
      displayAlert(true, "Item changed", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), name: inputText };
      setList([...list, newItem]);
      setInputText("");
      displayAlert(true, "Item added", "success");
    }
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    displayAlert(true, "Item removed", "success");
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditID(id);
    const editingItem = list.find((item) => item.id === id);
    setInputText(editingItem.name);
  };

  const clearList = () => {
    setList([]);
    displayAlert(true, "List cleared", "success");
  };

  const displayAlert = (show = false, message, type) => {
    setAlert({ show, message, type });
  };

  return (
    <>
      <h1>Todo List</h1>
      {alert.show && (
        <Alert {...alert} removeAlert={displayAlert} list={list} />
      )}
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
        <List list={list} removeItem={removeItem} editItem={editItem} />
        {list.length > 0 && <button onClick={clearList}>Clear All</button>}
      </main>
    </>
  );
}

export default App;
