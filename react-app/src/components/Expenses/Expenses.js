import { useState } from 'react';

import ExpenseItems from '../Expenses/ExpenseItems';
import Card from '../UI/Card';
import FilterExpenses from './FilterExpenses';

import '../../css/Expenses.css'

function Expenses(props){

    const {expenses} = props;

    const[ filteredExpenses,setFilteredExpenses ] = useState('2022');

    const getFiltered = (filtered) =>{
       const got = setFilteredExpenses(filtered);
       console.log(got,filteredExpenses);
    }

    return(
        <div>
            <Card>
                <FilterExpenses filtered={filteredExpenses} getFiltered={getFiltered}/> 
                <ExpenseItems 
                    title={expenses[0].title} 
                    amount={expenses[0].amount}
                    date={expenses[0].date}/>
                <ExpenseItems
                    title={expenses[1].title} 
                    amount={expenses[1].amount}
                    date={expenses[1].date}/>
                <ExpenseItems 
                    title={expenses[2].title} 
                    amount={expenses[2].amount}
                    date={expenses[2].date}/>
                <ExpenseItems
                    title={expenses[3].title} 
                    amount={expenses[3].amount}
                    date={expenses[3].date}/>
            </Card>
        </div>
    )
}

export default Expenses