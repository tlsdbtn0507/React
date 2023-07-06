import React, { useState , useEffect , useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from '../../css/Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action) => {
  if(action.type === 'userInput'){
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if(action.type === 'inputBlur'){
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value:'', isValid:false };
}

const pwReducer = (state,action) => {
  if(action.type === 'userInput'){
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if(action.type === 'inputBlur'){
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value:'', isValid:false };
}

const Login = (props) => {
  // usingState : const [enteredEmail, setEnteredEmail] = useState('');
  // usingState : const [emailIsValid, setEmailIsValid] = useState();
  // usingState : const [enteredPassword, setEnteredPassword] = useState('');
  // usingState : const [passwordIsValid, setPasswordIsValid] = useState();

  const [emailState,dispatchEmail] = useReducer(emailReducer,{ value:'', isValid: null });
  const [pwState,dispatchPw] = useReducer(pwReducer,{ value:'', isValid:null });

  const [formIsValid, setFormIsValid] = useState(false);

  const {isValid : emailValid} = emailState;
  const {isValid : pwValid} = pwState;
  //3

  useEffect(()=>{ 
    const timer = setTimeout(() => {
      setFormIsValid(
        //usingState: enteredEmail.includes('@') && enteredPassword.trim().length > 6
        emailValid && pwValid
        );
    }, 2500);
    return ()=>{
      clearTimeout(timer)
    //1
    }
  //},[ usingState : enteredEmail,enteredPassword])
  },[emailValid,pwValid])//3
  //2

  const emailChangeHandler = (event) => {
    // usingState :  setEnteredEmail(event.target.value);
    dispatchEmail({ type:'userInput', val:event.target.value }) 

    // usingState :  setFormIsValid(event.target.value.includes('@') && pwState.isValid);
  };

  const passwordChangeHandler = (event) => {
    //usingState : setEnteredPassword(event.target.value);
    dispatchPw({ type:'userInput' , val:event.target.value })

    // usingState : setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // usingState : setEmailIsValid(emailState.isValid);
    dispatchEmail({type:'inputBlur'});
  };

  const validatePasswordHandler = () => {
    // usingState : setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPw({type:'inputBlur'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, pwState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pwState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwState.value}
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


//1 clearTimeout을 설정함으로써 enteredEmail과 enteredPassword이 타이핑 될때 마다
//타임아웃 함수가 실행 하는데 만약 그 함수가 http request라면 프로그램 사용에 큰 오류를 줄 수 있기
//때문에 리턴으로 클리어 함수를 반환해야 입력이 완료 될때에만 함수를 보내도록 설정한다

//만약 의존성이 빈 배열이고 useEffect의 클린업 함수가 있다면 컴포넌트가 dom에 제거될때 실행함

//2 useEffect의 두번째 인자인 배열에 위 state를 주고 배열의 모든 요소가 전부 바뀌어야만 useEffect안의 함수
//를 실행하도록 해서 리엑트의 렌더링 횟수를 줄임
//하지만 이 함수는 onChange로 타이핑 하나하나 누를때마다 실행되기 때문에 사용자가 입력을 완료했다(2.5초)를
//지날때만 useEffect함수를 실행하게 함 

//3 useReduce와 useEffect를 써서 유효성 검사를 원할하게 진행하지만 useEffect의 종속성으로 useReduce로
//만든 첫번째 인자들을 그냥 주면 입력 및 유효성 검사를 할때마다 첫번째 인자가 바뀌어서 useEffect의 실행이 중복된다
//여기서는 유효성만 따져 볼 것이기에 객체를 구조분해할당해서 유효성의 변화만 감지하도록 해야한다

//useReduce는 보통 지금 2개의 인풋과 인풋의 유효성 검사로 인해 state가 **복잡해질때** 쓰는 것이 좋다 