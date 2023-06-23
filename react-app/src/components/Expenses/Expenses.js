import { useState } from 'react';

import ExpenseItems from '../Expenses/ExpenseItems';
import Card from '../UI/Card';
import FilterExpenses from './FilterExpenses';

import '../../css/Expenses.css'

function Expenses(props){

    const {expenses} = props;

    const[ filteredExpenses,setFilteredExpenses ] = useState('all');

    const getFilteredFunc = (filtered) =>{
        setFilteredExpenses(filtered);
    }

    return(
        <div>
            <Card>
                <FilterExpenses filtered={filteredExpenses} getFiltered={getFilteredFunc}/>
                {expenses.filter(e => {
                    if (e.date.getFullYear() === +filteredExpenses) return true;
                    else if (filteredExpenses === 'all') return true;
                    else return false
                }).map(e => 
                <ExpenseItems
                    key={e.id}
                    title={e.title}
                    amount={e.amount}
                    date = {e.date}/>
                //v-for처럼 key를 주지 않으면 react는 expenses배열의 변화를 감지해서
                //HTML, 즉 JSX를 다시 랜더링 하고나서 순서에 맞게 재 배치하는데 그러면
                //성능에도 좋지 않고 버그가 발생할 여지가 있어서 key, 고유id를 줘서 최상단의
                //html을 변경하지 않고 새로 업데이트 된 expenses의 내용을 렌더링함
                )}
            </Card>
        </div>
    )
}

export default Expenses