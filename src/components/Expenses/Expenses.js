import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses({ expenses }) {
  const [currentYear, setCurrentYear] = useState('');
  const filteredExpenses = expenses.filter(
    (expenseItem) => expenseItem.date.getFullYear().toString() === currentYear
  );

  function onYearChangeHandler(year) {
    setCurrentYear(year);
  }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={currentYear}
          onYearChange={onYearChangeHandler}
        />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
