import React, { Component, useState } from "react";

import "../../css/List.css";

const List = () => {
  // state = {
  //   items: [1, 2, 3],
  // };

  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prev) => prev.concat(prev[prev.length - 1] + 1));
  };

  const removeItemHandler = (selIndex) => {
    setItems((prev) => prev.filter((e) => e !== prev[selIndex]));
  };

  const listItems = items.map((item, index) => (
    <li
      key={index}
      className="ListItem"
      onClick={() => removeItemHandler(index)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};

export default List;
