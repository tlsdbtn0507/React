import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import style from '../../css/CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [validCheck, setValidCheck] = useState(true);

  const goalInputChangeHandler = e => {
    if(e.target.value.trim().length !== 0){
      setValidCheck(true)
    }
    setEnteredValue(e.target.value);
  };

  const resetFunc = e => {
    setValidCheck(true)
  }

  const formSubmitHandler = e => {
    e.preventDefault();

    if(enteredValue.trim().length === 0){
      setValidCheck(false)
      return
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style['form-control']} ${!validCheck && style.invalid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} onClick={resetFunc}/>
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// import styled from 'styled-components'
// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// &.invalid input {
//   border-color: red;
//   background-color: salmon;
// }

// &.invalid label {
//   color: red;
// }

// `;
//  <label style={{color: !validCheck ? 'red' : 'black'}}>Course Goal</label>
//    <input 
//    style={{
//      border: !validCheck ? '1px solid red' : '1px solid black',
//      backgroundColor: !validCheck ? 'salmon' : 'transparent'
//    }} 
//    type="text" onChange={goalInputChangeHandler} onClick={resetFunc}/> 
//    이 방법은 css요소를 직접변경
//   <div className={`form-control ${!validCheck && 'invalid'}`}> 
//   </div> 
//  위 방법은 css에서 디자인을 만들어 놓고 validCheck상황에 따라 다른 클래스를 주는 것
