import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){

    return (
        <div  className="expense-item">

        {/*Formats date output using ExpenseDate component and uses date={props.date} to get info to format from Expenses.js*/}
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className="expense-item__description">
            {/*"props" taken from function parameter
            "title" taken from Expenses.js attribute in ExpenseItem element thats value is then set in App.js*/}
            <h2>{props.title}</h2>
            {/* ".amount" is from Expenses.js where this was imported to. */}
            <div className="expense-item__price">${props.amount}</div>
        </div>

        </div>);
}

export default ExpenseItem;