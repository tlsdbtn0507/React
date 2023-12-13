import Todos from "./Todos/todos";
function App() {

  const todos = [{id:'1',text:'ababb'},{id:'2',text:'b'}]
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
