import Todo from "../type/todo"
import css from '../css/css.module.css'
import { useContext } from "react"
import { TodoContext } from "../store/store"

const TodoComponent = (props:{todo:Todo}) =>{

  const todosCtx = useContext(TodoContext)

  const getId =(e:React.MouseEvent)=>{
    e.preventDefault();
    
    todosCtx.removeTodo(e.currentTarget.id)
  }

  return(
    <li className={css.item} id={props.todo.id} onClick={getId}>{props.todo.text}</li>
  )
}

export default TodoComponent 