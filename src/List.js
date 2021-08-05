import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

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
              {item.completed ? (
                <FontAwesomeIcon icon={faCheckSquare} />
              ) : (
                <FontAwesomeIcon icon={faSquare} />
              )}
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
