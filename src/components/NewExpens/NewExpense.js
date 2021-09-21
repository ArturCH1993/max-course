import { useState } from 'react';
import ExpenseButtons from './ExpenseButtons';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [formState, setFormState] = useState(false);

  function newExpenseData(expenseData) {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.expensesHandler(newExpenseData);
  }

  function addForm() {
    setFormState(true);
  }

  function removeForm() {
    setFormState(false);
  }

  if (formState === false)
    return (
      <div className='new-expense'>
        <ExpenseButtons setForm={addForm} />
      </div>
    );

  return (
    <div className='new-expense'>
      <ExpenseForm onNewExpenseData={newExpenseData} setForm={removeForm} />
    </div>
  );
}

export default NewExpense;
