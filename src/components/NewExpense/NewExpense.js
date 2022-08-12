import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData)
        //Sends data to App.js where attribute of ExpenseForm component is set to a function
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
        {/*onSaveExpenseData referenced in ExpenseForm passes function to ExpenseForm to get info saved through function there*/}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
           </div>
    )
}
export default NewExpense;