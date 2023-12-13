import React from "react";
import Todo from "../type/todo";
import TodoComponent from "./todoComp";

function Todos(props:{items:Todo[]}){

  return (
    <ul>
      {props.items.map(e=><TodoComponent key={e.id} text={e.text}/>)}
    </ul>
  )
}

export default Todos;