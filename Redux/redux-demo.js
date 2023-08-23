const redux = require("redux");

const counter = (state = { counter: 0 }, action) => {
  if (action.type === "dec") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "inc") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = redux.createStore(counter);

const counterSub = () => {
  const latest = store.getState();
  console.log(latest);
};

store.subscribe(counterSub);

store.dispatch({ type: "inc" });
store.dispatch({ type: "dec" });
