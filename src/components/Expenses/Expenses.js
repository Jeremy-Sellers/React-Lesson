import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        //logs value inputted by user
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    //selected year is attirbute to pass to ExpensesFilter set to 2020
                    selectedYear={filteredYear}
                    onChangeFilter={filterChangeHandler}/>
            {/*Sets onChangeFilter to the function pointed to */}

            {/*References ExpenseItem component */}
            {/* "props" from parameter ".items" from App.js attribute [x].value is grabbed from the items values passed in from App.js */}
            {props.items.map((expense) => (
            <ExpenseItem title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />))}
        </Card>
    </div>
    );
}

export default Expenses;