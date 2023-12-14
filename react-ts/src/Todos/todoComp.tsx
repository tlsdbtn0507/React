import Todo from "../type/todo"

const TodoComponent = (props:{text:string}) =>{

  return(
    <li>{props.text}</li>
  )
}

export default TodoComponent 