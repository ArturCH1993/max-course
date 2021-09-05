import './ExpenseDate.css';

function ExpenseDate(props) {
  const { date } = props,
    day = date.toLocaleString('en-US', { day: 'numeric' }),
    month = date.toLocaleString('en-US', { month: 'long' }),
    year = date.getFullYear();
  return (
    <div>
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
