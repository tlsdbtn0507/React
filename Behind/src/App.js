import React, { useState, useCallback } from "react";

import "../src/css/App.css";
import Button from "./components/UI/Button/Button";
import DemoOp from "./components/Demo/DemoOp";

function App() {
  const [showP, setShowP] = useState(false);

  const toggleHandler = useCallback(() => {
    setShowP((prevShowP) => !prevShowP); //setShowP에 이전 state값,showP를 넣어도 되지만
    //react의 useState훅을 통해 state값을 바꾸면 스케줄링으로 아주 찰나의 시간이지만 살짝 딜레이가 있다
    //그러므로 그 찰나의 시간에 이전 state값, showP가 바뀔 수 있기 때문에 prevShowP를 인자로 콜백함수로
    //처리하는것이 안전하다
  }, []); //js의 원시,참조 타입으로 인해 컴포넌트에게 주는 prop이 원시타입이면 memo를 쓰는게 좋지만
  //참조 타입은 memo를 통해 전과 후 값비교가 불가능 하기 때문에 useCallback를 쓴다

  //useCallback는 react내부에 useCallback()의 인자를 저장해서 참조타입의 비교(===)를 가능하게 해준다
  //그리고 useCallback에 두번째 인자에 의존성 배열을 넣는데 만약 useCallback함수에 다른 state나 변수 등이
  //추가 되면 js의 closure로 인해 useCallback에 들어간 state나 변수가 고정되어 불변하기 때문에 useCallback
  //안에 state나 변수를 넣는다면 두번째 인자에 의존성을 나타낼 state나 변수를 넣어야 한다

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOp show={showP} />
      <Button onClick={toggleHandler}>toggle</Button>
    </div>
  );
}

export default App;
