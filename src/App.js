import "./App.css";
import List from "./List";
import Alert from "./Alert";
import { useState, useEffect } from "react";

const getLocalStorage = () => {
  if (localStorage.getItem("list")) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(getLocalStorage());
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
      const newItem = {
        id: new Date().getTime().toString(),
        name: inputText,
        completed: false,
      };
      setList([...list, newItem]);
      setInputText("");
      displayAlert(true, "Item added", "success");
    }
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    displayAlert(true, "Item removed", "error");
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditID(id);
    const editingItem = list.find((item) => item.id === id);
    setInputText(editingItem.name);
  };

  const completeItem = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setList(newList);
  };

  const clearList = () => {
    setList([]);
    displayAlert(true, "List cleared", "error");
  };

  const displayAlert = (show = false, message, type) => {
    setAlert({ show, message, type });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <section>
        <h1>Todo List</h1>
        {alert.show && (
          <Alert {...alert} removeAlert={displayAlert} list={list} />
        )}
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="Add an Item"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></input>
          <button className="submit-btn" type="submit">
            {isEditing ? "Edit" : "Add"}
          </button>
        </form>
        <List
          list={list}
          removeItem={removeItem}
          editItem={editItem}
          completeItem={completeItem}
        />
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearList}>
            Clear All
          </button>
        )}
      </section>
    </>
  );
}

export default App;
