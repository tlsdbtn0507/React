import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const checkUserLoggedin = localStorage.getItem('isLoggedIn');
    
    if (checkUserLoggedin === '1'){
      setIsLoggedIn(true);
    }
  },[])
  //useEffect는 2개의 인자를 받는데 앞에 인자는 익명 함수로 뒤에 인자는 의존성이고 조건에 맞을때만 한정적으로
  //함수를 실행하고자 할때 쓴다 보통 사이드이펙트(http 데이터 fetch 등)를 다룰때 쓴다

  //useEffect는 리엑트 앱의 렌더링이 끝나고 나서 실행 해서 로그인 체크처럼 앱이 재실행(보통 새로고침 등)될때
  //렌더링을 중복하지 않도록 한다 여기선 2번째 인자로 빈배열을 주어서 앱이 첫 실행 될때만 실행하게 설정한다.
  //만약 useEffect의 2번째 인자에 빈 배열도 안주면 컴포넌트가 state에 의해 변경될때마다 실행됨

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
