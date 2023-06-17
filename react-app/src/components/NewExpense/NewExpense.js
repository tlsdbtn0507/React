import '../../css/NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{

    const emitExpenseDataFunc = (emited)=> {
        const expenseData ={
            ...emited,
            id:Math.random().toString()
        };
        props.onEmitExpenseData(expenseData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm emitExpenseData={emitExpenseDataFunc}/>
        </div>
    )
}

export default NewExpense