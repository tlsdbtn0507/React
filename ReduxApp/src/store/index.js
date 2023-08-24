import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isLogined: false };

//redux toolkit의 createSlice는 기존 redux처럼 리액트의 state를 변경이 있을때 마다 새로 만들어서 덮어쓰
//것이 아닌 immer라는 내부 함수를 통해 개발자가 편하게 작업 할 수 있도록 해줌

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogined = true;
    },
    logout(state) {
      state.isLogined = false;
    },
  },
});

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
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
