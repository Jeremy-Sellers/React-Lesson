import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');


    function titleChangeHandler(event){
        setEnteredTitle(event.target.value)
    }

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
        //setting values back to empty upon submitting form to clear form input boxes, must set value in each input form

        //using props and passes expenseData to NewExpense to use in function created there
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('')
        setEnteredTitle('')
        setEnteredDate('')
    };

    return ( <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                       value={enteredTitle}//resets input box to empty
                       onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"
                       value={enteredAmount}
                       onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"
                       value={enteredDate}
                       onChange={dateChangeHandler}/>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
            </form>)
}

export default ExpenseForm;