import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const { date } = props,
    day = date.toLocaleString('en-US', { day: 'numeric' }),
    month = date.toLocaleString('en-US', { month: 'long' }),
    year = date.getFullYear();
  return (
    <Card>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </Card>
  );
}

export default ExpenseDate;
