import '../../css/ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [showForm, setShowForm] = useState(false);

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // const [input,setInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })
    //이 방법은 useState를 하나만써도 된다는 장점이 있고 각각의 state에서 변화가 있을때마다
    //객체에 담아서 저장하면 되는데 아래 예시 처럼 스프레드로 input객체 통째로 주고 다시 재정의해서
    //보내야 하거나 set함수에 익명함수를 넣고 이전state를 매개변수로 넣어서 원하는 새로운 객체를 
    //반환해도 되는데 익명함수를 쓰는 쪽이 조금 더 안전함

    const titleChangeFunc = (e) => {
        let val = e.target.value;
        setEnteredTitle(val);
        // setInput({...input,title:val,})
        // setInput((prev)=>{
        //     return {...prev,title:val}
        // })  
    }

    const amountChangeFunc = (e) => {
        let val = e.target.value;
        setEnteredAmount(val);
        // setInput({...input,amount:val,})  
    }
    
    const dateChangeFunc = (e) => {
        let val = e.target.value;
        setEnteredDate(val);
        // setInput({...input,date:val,})  
    }

    const submitFunc = (e) => {
        e.preventDefault();

        const expenseData = {
            title:enteredTitle,amount:+enteredAmount,
            date:new Date(enteredDate)
        };

        props.emitExpenseData(expenseData);
        //react로 상위(부모)컴포넌트에 데이터를 보낼때 보낼(자식)컴포넌트 jsx리턴함수에 props를 넣고
        //상위(부모)컴포넌트에서도 props주듯 연결하고 콜백함수를 만들어서 props에 바인딩 하면됨

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        //submit후 초기화

        setShowForm(false)
    }

    const cancelSub = () => {

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

        setShowForm(false);
    }

    const showFormFunc = () => {
        setShowForm(true);
    }


    return(
        <form onSubmit={submitFunc}>
            {!showForm && <button onClick={showFormFunc}>Add New Expense</button>}
            {showForm &&
            <div> 
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeFunc}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' 
                    onChange={amountChangeFunc}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate}
                    min='2022-01-01' max='2032-12-31'onChange={dateChangeFunc}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={submitFunc}>Add</button>
                <button type='button' onClick={cancelSub}>Cancel</button>
            </div>
            </div>
}
        </form>            
    )
}

export default ExpenseForm