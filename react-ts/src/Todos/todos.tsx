import React, { useContext } from "react";
import Todo from "../type/todo";
import TodoComponent from "./todoComp";
import css from '../css/css.module.css'
import { TodoContext } from "../store/store";

function Todos(){

  const todosCtx = useContext(TodoContext);

  return (
    <ul className={css.todos}>
      {todosCtx.items.map(e=><TodoComponent key={e.id} todo={e}/>)}
    </ul>
  )
}

export default Todos;