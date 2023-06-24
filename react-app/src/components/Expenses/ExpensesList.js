import '../../css/ExpensesList.css'
import ExpenseItems from './ExpenseItems'

const ExpensesList = (props) =>{

    const {expenses} = props;

    let expenseContent;

    if (expenses.length === 0) 
        expenseContent = <h2 className='expenses-list__fallback'>No Expenses found</h2>
    else 
        expenseContent = expenses.map( e => {
        return <ExpenseItems 
            key={e.id} 
            title={e.title} 
            amount={e.amount} 
            date = {e.date}/>
        })
    

    // expenses.length > 0 ? expenses.map
    // (e => 
    // <ExpenseItems key={e.id} title={e.title} amount={e.amount} date = {e.date}/>)
    // : <p>No Expenses found</p>
    //v-for처럼 key를 주지 않으면 react는 expenses배열의 변화를 감지해서
    //HTML, 즉 JSX를 다시 랜더링 하고나서 순서에 맞게 재 배치하는데 그러면
    //성능에도 좋지 않고 버그가 발생할 여지가 있어서 key, 고유id를 줘서 최상단의
    //html을 변경하지 않고 새로 업데이트 된 expenses의 내용을 렌더링함

    return(
        <ul className='expenses-list'>
            {expenseContent}
        </ul>
    )
}

export default ExpensesList