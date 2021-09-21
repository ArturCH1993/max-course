import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, setTitle] = useState(''),
    [amount, setAmount] = useState(''),
    [date, setDate] = useState('');

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function amountHandler(event) {
    setAmount(+event.target.value);
  }

  function dateHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(typeof amount);
    setAmount('');
    setDate('');
    setTitle('');
    props.onNewExpenseData(expenseData);
    props.setForm();
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={titleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={amountHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            onChange={dateHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expenses__action">
        <button type="submit">Add Expense!</button>
        <button onClick={props.setForm}>Cancel</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
