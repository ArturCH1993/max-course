import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const { expenses } = props;
  const [currentYear, setCurrentYear] = useState('');
  const filteredExpenses = expenses.filter(
    (expenseItem) => expenseItem.date.getFullYear().toString() === currentYear
  );

  function onYearChangeHandler(year) {
    setCurrentYear(year);
  }

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={currentYear}
          onYearChange={onYearChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
