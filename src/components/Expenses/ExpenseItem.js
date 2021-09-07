import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const { title, amount, date } = props;
  const [newTitle, setNewTitle] = useState(title);
  // we are setting a constant "newTitle" to a default value of useState which in this case is "title"
  // that is why we are able to use "newTitle" on our h2 element
  function clickHandler() {
    console.log(title);
    setNewTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">{amount}zł</div>
      </div>
      <button onClick={clickHandler}>Change Title!</button>
    </Card>
  );
}

export default ExpenseItem;
