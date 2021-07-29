import React from "react";

const List = ({ list, removeItem }) => {
  return (
    <article>
      {list.map((item) => {
        const { id, name } = item;
        return (
          <div>
            <p key={id}>{name}</p>
            <button onClick={() => removeItem(id)}>Delete</button>
          </div>
        );
      })}
    </article>
  );
};

export default List;
