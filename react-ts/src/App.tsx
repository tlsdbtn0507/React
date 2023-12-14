import { useState } from "react";
import NewTodo from "./Todos/newTodo";
import Todos from "./Todos/todos";
import Todo from "./type/todo";

function App() {

  const [todos,setTodos] = useState<Todo[]>([]);

  const concatTodos = (todoText:string)=>{
    const newTodo:Todo = {id:''+todos.length++,text:todoText};

    setTodos(prev=> prev.concat(newTodo));
  }

  return (
    <div>
      <NewTodo addTodo={concatTodos}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
