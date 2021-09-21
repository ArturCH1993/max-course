import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  const { filteredExpenses } = props;
  let expensesContet = <p>There are no expenses to be found!</p>;

  if (filteredExpenses.length === 0) {
    return expensesContet;
  }
  return (
    <ul className='expenses-list'>
      {
        (expensesContet = filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        )))
      }
    </ul>
  );
}

export default ExpensesList;
