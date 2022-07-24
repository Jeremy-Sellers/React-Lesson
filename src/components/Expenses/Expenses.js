import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props){

    return (
        <Card className="expenses">
            {/*References ExpenseItem component */}
            {/* "props" from parameter ".items" from App.js attribute [x].value is grabbed from the items values passed in from App.js */}
            <ExpenseItem title={props.items[0].title}
                         amount={props.items[0].dollarAmount}
                         date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title}
                         amount={props.items[1].dollarAmount}
                         date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title}
                         amount={props.items[2].dollarAmount}
                         date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title}
                         amount={props.items[3].dollarAmount}
                         date={props.items[3].date}></ExpenseItem>
        </Card>
    )
}

export default Expenses;