import React from "react";

const List = ({ list, removeItem, editItem }) => {
  return (
    <article>
      {list.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <p>{name}</p>
            <button onClick={() => removeItem(id)}>Delete</button>
            <button onClick={() => editItem(id)}>Edit</button>
          </div>
        );
      })}
    </article>
  );
};

export default List;
