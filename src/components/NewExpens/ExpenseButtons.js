import { useState } from 'react';

function ExpenseButton(props) {
  const { setForm } = props;

  return <button onClick={setForm}>Add New Expense!</button>;
}

export default ExpenseButton;
