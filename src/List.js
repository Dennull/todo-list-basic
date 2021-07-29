import React from "react";

const List = ({ list }) => {
  return (
    <section>
      {list.map((item) => {
        const { id, name } = item;
        return <p key={id}>{name}</p>;
      })}
    </section>
  );
};

export default List;
