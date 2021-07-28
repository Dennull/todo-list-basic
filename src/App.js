import "./App.css";
import List from "./List";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  return (
    <>
      <h1>Todo List</h1>
      <main>
        <form>
          <input type="text"></input>
          <button type="submit">Add</button>
        </form>
        <List />
      </main>
    </>
  );
}

export default App;
