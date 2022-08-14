import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from 'react'

const ExpenseItem = (props) => {
    return (
        <li>
        {/*Changing div element to "Card" gives the div an inner elements the Card.js file*/}
        <Card  className="expense-item">

        {/*Formats date output using ExpenseDate component and uses date={props.date} to get info to format from Expenses.js*/}
        <ExpenseDate date={props.date}/>

        <div className="expense-item__description">
            {/*"props" taken from function parameter
            "title" taken from Expenses.js attribute in ExpenseItem element thats value is then set in App.js*/}
            <h2>{props.title}</h2>
            {/* ".amount" is from Expenses.js where this was imported to. */}
            <div className="expense-item__price">${props.amount}</div>
        </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;