import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store";

import { useRef } from "react";

import classes from "../css/Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);
  const { showCounter } = useSelector((state) => state.counter);

  const inputRef = useRef();

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const increase = () => {
    const customVal = +inputRef.current.value;
    // dispatch({ type: target, value: customVal });
    dispatch(counterAction.increase(customVal));
  };

  const increment = () => {
    dispatch(counterAction.increment());
  };
  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={increment}>+</button>
        <label>
          <input ref={inputRef} />
          <button onClick={increase}>increase</button>
        </label>
        <button onClick={decrement}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
