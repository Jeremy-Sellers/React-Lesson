import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData)
        //Sends data to App.js where attribute of ExpenseForm component is set to a function
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
        {/*onSaveExpenseData referenced in ExpenseForm passes function to ExpenseForm to get info saved through function there*/}
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {/* isEditing starts false, code checks for false value and displays "Add Expense" button */}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}

           {/* If code is evaluated as true, ExpenseForm will populate */}
           </div>
    )
}
export default NewExpense;