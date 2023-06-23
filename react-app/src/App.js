import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

const DUMY_DATA  = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses,setExpense] = useState(DUMY_DATA);

  const addExpenseFunc = expense => {
    // setExpense([expense,...expenses]);
    setExpense(prevEx => [expense,...prevEx]);
  };

  return (
    <div>
        <NewExpense onEmitExpenseData={addExpenseFunc}/>
      <Card className="expenses">
        <Expenses expenses={expenses}/>
      </Card>
    </div>
  );
}

export default App;
