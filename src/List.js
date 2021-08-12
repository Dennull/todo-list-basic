import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faTrashAlt,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";

const List = ({ list, removeItem, editItem, editID, completeItem }) => {
  return (
    <article className="list">
      {list.map((item) => {
        const { id, name } = item;
        return (
          <div
            key={id}
            className={`list-item ${item.completed && "completed-item"} ${
              editID === id && "editing-item"
            }`}
          >
            <p>{name}</p>
            <div className="btn-container">
              <button onClick={() => completeItem(id)} className="complete-btn">
                {item.completed ? (
                  <FontAwesomeIcon icon={faCheckSquare} />
                ) : (
                  <FontAwesomeIcon icon={faSquare} />
                )}
              </button>
              <button onClick={() => removeItem(id)} className="delete-btn">
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button onClick={() => editItem(id)} className="edit-btn">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default List;
