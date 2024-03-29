import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate + 'T00:00:00') //adding string fixes date from being entered as one day prior to chosen date
        }

        console.log(expenseData);
        //setting values back to empty upon submitting form to clear form input boxes, must set value in each input form

        //using props and passes expenseData to NewExpense to use in function created there
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
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
        </div>



            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>

            </form>
    );
};

export default ExpenseForm;