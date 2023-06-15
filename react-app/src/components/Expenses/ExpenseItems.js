import { useState } from 'react'

import '../../css/ExpenseItems.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

function ExpenseItems(props) {
  
  const [title,setTitle] = useState(props.title);
  //useState는 리엑트 훅(보통 use로시작) 중 하나로 ExpenseItems같은 컴포넌트 함수 안에서 호출해야함
  //useState는 매개변수에 대한 접근을 가능하게 하고 접근이 가능한 변수와 변경 가능한 함수를 반환
  
  // let title = props.title;

  const clickF = () => {
    setTitle('eungdi');
    console.log(title);
    //변경 가능한 함수를 콜백함수 안에서 변경하고 싶은걸 매개변수로 놓으면 됨
    //또한 접근이 가능한 변수는 const로 할당했기 때문에 변경 이전의 값이 남고 한번 더 실행하면
    //useState를 실행 함으로써 컴포넌트 함수가 재 실행해서 변경을 감지하고 변경이 있으면 
    //const지만 title은 setTitle에 넣은 매개변수로 바뀌게 됨
    //또한 ExpenseItems 컴포넌트 함수는 Expenses.js에서 4번 호출되지만 각각의 함수 내에서 따로 동작하기에 
    //한번에 다같이 바뀌지 않음
  };

  //리엑트는 컴포넌트(함수)를 실행해 가며 컴포넌트 내에 실행할 함수가 없을때까지 파고 내려감
  //고로 지금  ExpenseItems의 컴포넌트는 이미 리턴값으로 실행이 된 이후라서 이벤트 헨들러로 
  //콜백함수가 실행은 되도 상태, 뷰를 바꿀수 없어서 useState를 씀

  return(
  <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>{props.amount}</div>
    </div>
    <button onClick={clickF}>change Title</button>
  </Card>
  );
}
//clickF에 ()를 안붙이는 이유: jsx가 랜더링 될때 ()가 있으면 렌더링중 clickF를 실행
//원래는 클릭시에만 실행되야하기 때문에 ()생략

export default ExpenseItems;
