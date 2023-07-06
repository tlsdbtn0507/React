import React, { useState , useEffect} from 'react';

import Card from '../UI/Card/Card';
import classes from '../../css/Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(() => {
      console.log(1)
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 2500);
    return ()=>{
      console.log(0)
      clearTimeout(timer)
      //clearTimeout을 설정함으로써 enteredEmail과 enteredPassword이 타이핑 될때 마다
      //타임아웃 함수가 실행 하는데 만약 그 함수가 http request라면 프로그램 사용에 큰 오류를 줄 수 있기
      //때문에 리턴으로 클리어 함수를 반환해야 입력이 완료 될때에만 함수를 보내도록 설정한다
      
      //만약 의존성이 빈 배열이고 useEffect의 클린업 함수가 있다면 컴포넌트가 dom에 제거될때 실행함
    }
  },[enteredEmail,enteredPassword])
  //useEffect의 두번째 인자인 배열에 위 state를 주고 배열의 모든 요소가 전부 바뀌어야만 useEffect안의 함수
  //를 실행하도록 해서 리엑트의 렌더링 횟수를 줄임
  //하지만 이 함수는 onChange로 타이핑 하나하나 누를때마다 실행되기 때문에 사용자가 입력을 완료했다(2.5초)를
  //지날때만 useEffect함수를 실행하게 함 

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
