import React, { useEffect, useState, } from "react";
import { getExpenses, } from "./services/expense_service";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  
  const [expenses, setExpense] = useState([]);
  useEffect(() => {
    let mounted = true;
    getExpenses().then(items => {
      if(mounted){
        setExpense(items)
      }
    })
    return () => mounted = false;
  }, [])

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
