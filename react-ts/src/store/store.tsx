import { FC, ReactNode, createContext,useState } from "react";
import Todo from "../type/todo"

interface TodoContextType {
  items:Todo[],
  addTodo : (text:string)=>void,
  removeTodo : (id:string)=>void
}

export const TodoContext = createContext<TodoContextType>({
  items:[],
  addTodo:()=>{},
  removeTodo:()=>{}
})

//TodoProvider는 Provider를 반환하는데 이는 jsx문이기에 FC를 주고
// 하위 컴포넌트들을 위해 {children:ReactNode}라고 명시
const TodoProvider : FC<{children:ReactNode}> = ({children})=>{

  const [todos,setTodos] = useState<Todo[]>([]);

  const concatTodos = (todoText:string)=>{
    const newTodo:Todo = {id:''+todos.length++,text:todoText};

    setTodos(prev=> prev.concat(newTodo));
  }

  const removeTodos = (id:string)=>{
    setTodos(prev=>prev.filter(e=>e.id!==id));
  }

  const context:TodoContextType = {
    items:todos,
    addTodo:concatTodos,
    removeTodo:removeTodos,
  }

  return(
    <TodoContext.Provider value={context}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
