import { useState } from 'react';

import Card from '../UI/Card';
import FilterExpenses from './FilterExpenses';
import ExpensesList from './ExpensesList';

import '../../css/Expenses.css'

function Expenses(props){

    const {expenses} = props;

    const[ filteredExpenses,setFilteredExpenses ] = useState('2023');

    const getFilteredFunc = (filtered) =>{
        setFilteredExpenses(filtered);
    }

    const expensesFiltered = expenses.filter(e=>{
        return e.date.getFullYear() === +filteredExpenses
    })


    return(
        <li>
            <Card>
                <FilterExpenses 
                    filtered={filteredExpenses} 
                    getFiltered={getFilteredFunc}/>
                <ExpensesList expenses={expensesFiltered}/>
            </Card>
        </li>
    )
}

export default Expenses