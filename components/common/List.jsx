import React from "react";
import { useRouter } from "next/router";
import ListItem from "./ListItem";

const List = ({ items, handleListItemClick, clickable = true }) => {
  return (
    <>
      {items.map((item) => (
        <ListItem
          key={item.id}
          categoryId={item.id}
          name={item.name}
          onClick={clickable ? () => handleListItemClick(item.id) : undefined}
        />
      ))}
    </>
  );
};

export default List;
