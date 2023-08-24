import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//redux toolkit의 createSlice는 기존 redux처럼 리액트의 state를 변경이 있을때 마다 새로 만들어서 덮어쓰
//것이 아닌 immer라는 내부 함수를 통해 개발자가 편하게 작업 할 수 있도록 해줌

// const counter = (state = initialCounter, action) => {
//   if (action.type === "inc") return { ...state, counter: state.counter + 1 };
//   if (action.type === "dec") return { ...state, counter: state.counter - 1 };
//   if (action.type === "increase")
//     return { ...state, counter: state.counter + action.value };
//   if (action.type === "toggle")
//     return { ...state, showCounter: !state.showCounter };
//   return state;
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
