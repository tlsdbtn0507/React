import { useContext, useRef } from "react"
import css from '../css/css.module.css'
import { TodoContext } from "../store/store";

// const NewTodo:React.FC<{addTodo:(text:string)=>void}> = (props) => {
const NewTodo = () => {
  const todosCtx = useContext(TodoContext);

  //HTMLInputElement의 타입을 가진 useRef는 초기값으로 '' 말고 null을 넣어줘야한다
  const inputRef = useRef<HTMLInputElement>(null);

  const submitTodo = (e:React.FormEvent) =>{
    e.preventDefault();

    // ts는 inputRef의 값이 current가 없을 수도(초기엔 널)있기 때문에 자동으로 옵셔널체이닝을 구사
    // const enteredValue = inputRef.current?.value;

    //하지만 개발자로서 작성할때 submitTodo가 실행 될때는 inputRef.current가 '무조건' 널이 아닐걸
    //알기 때문에 !을 써준다. 
    const enteredValue = inputRef.current!.value;

    if(enteredValue.trim().length === 0) return alert('wrong input value')

    

    todosCtx.addTodo(enteredValue);
    
  }

  return(
    <form className={css.form} onSubmit={submitTodo}>
      <label htmlFor="text">todo</label>
      <input type="text" id="text" required ref={inputRef}/>
      <button>submit</button>
    </form>
  )
}

export default NewTodo