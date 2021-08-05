import React from "react";

const List = ({ list, removeItem, editItem, completeItem }) => {
  return (
    <article>
      {list.map((item) => {
        const { id, name } = item;
        return (
          <div
            key={id}
            className={item.completed ? "completed-item" : "todo-item"}
          >
            <p>{name}</p>
            <button onClick={() => completeItem(id)}>
              {item.completed ? "Uncompleted" : "Completed"}
            </button>
            <button onClick={() => removeItem(id)}>Delete</button>
            <button onClick={() => editItem(id)}>Edit</button>
          </div>
        );
      })}
    </article>
  );
};

export default List;
