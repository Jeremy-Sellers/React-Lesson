import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){

    return (
        <div  className="expense-item">

        {/*".date" comes from App.js, App -> ExpenseDate -> ExpenseItem*/}
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className="expense-item__description">
            {/*"props" taken from function parameter
            "title" taken from App.js attribute in ExpenseItem element*/}
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>

        </div>);
}

export default ExpenseItem;