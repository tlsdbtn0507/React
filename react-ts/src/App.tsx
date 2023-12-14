import NewTodo from "./Todos/newTodo";
import Todos from "./Todos/todos";
import TodoProvider from "./store/store";

function App() {

  return (
    <TodoProvider>
      <NewTodo/>
      <Todos/>
    </TodoProvider>
  );
}

export default App;
