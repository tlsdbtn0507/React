import './ExpenseItems.css'

function ExpenseItems() {
  return(
  <div className='expense-item'>
    <div>March 28th 2023</div>
    <div className='expense-item__description'>
      <h2>Car insuracne</h2>
      <div className='expense-item__price'>29342</div>
    </div>
  </div>
  );
}

export default ExpenseItems;
