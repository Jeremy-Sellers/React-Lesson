import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from 'react'

function ExpenseItem(props){
    //title= current value, newTitle= update function
    const [title,newTitle] = useState(props.title);

function clickHandler(){
    //calls function to update title
    newTitle('Updated again!')
    console.log(title)
}
    return (
        //Changing div element to "Card" gives the div an inner elements the Card.js file
        <Card  className="expense-item">

        {/*Formats date output using ExpenseDate component and uses date={props.date} to get info to format from Expenses.js*/}
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className="expense-item__description">
            {/*"props" taken from function parameter
            "title" taken from Expenses.js attribute in ExpenseItem element thats value is then set in App.js*/}
            <h2>{title}</h2>
            {/* ".amount" is from Expenses.js where this was imported to. */}
            <div className="expense-item__price">${props.amount}</div>
        </div>
            <button onClick={clickHandler}>Change Title</button>

        </Card>);
}

export default ExpenseItem;