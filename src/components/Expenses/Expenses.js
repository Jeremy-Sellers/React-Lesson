import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        //logs value inputted by user
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No Expenses found.</p>

    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    //selected year is attirbute to pass to ExpensesFilter set to 2020
                    selectedYear={filteredYear}
                    onChangeFilter={filterChangeHandler}/>
            {/*Sets onChangeFilter to the function pointed to */}
                <ExpensesChart expenses={filteredExpenses}/>
            {/*References ExpenseItem component */}
            {/* "props" from parameter ".items" from App.js attribute [x].value is grabbed from the items values passed in from App.js */}
            <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>
    );
}

export default Expenses;