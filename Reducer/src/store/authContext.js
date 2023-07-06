import React, { useState,useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout: () => {},
    onLogin: (email,pw) => {} 
});//2

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
      const checkUserLoggedin = localStorage.getItem('isLoggedIn');
      
      if (checkUserLoggedin === '1'){
        setIsLoggedIn(true);
      }
    },[])
    //1
  
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

    return(
        <AuthContext.Provider value={{
            onLogout:logoutHandler,
            onLogin:loginHandler,
            isLoggedIn:isLoggedIn
        }}>
            {props.children}
        </AuthContext.Provider>
    )
} 

export default AuthContext; 

//1 useEffect는 2개의 인자를 받는데 앞에 인자는 익명 함수로 뒤에 인자는 의존성이고 조건에 맞을때만 한정적으로
//함수를 실행하고자 할때 쓴다 보통 사이드이펙트(http 데이터 fetch 등)를 다룰때 쓴다
//useEffect는 리엑트 앱의 렌더링이 끝나고 나서 실행 해서 로그인 체크처럼 앱이 재실행(보통 새로고침 등)될때
//렌더링을 중복하지 않도록 한다 여기선 2번째 인자로 빈배열을 주어서 앱이 첫 실행 될때만 실행하게 설정한다.
//만약 useEffect의 2번째 인자에 빈 배열도 안주면 컴포넌트가 state에 의해 변경될때마다 실행됨

//2 vuex store 처럼 context는 쓰기 좋긴 하지만 자주 바뀌는 데이터 같은 경우 context를 쓰기보다 props를
//쓰는걸 권장함