import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    function dropdownChangeHandler(event){
        //props.onChangeFilter references the function from parent Expenses.js and uses value from <select> element below
        props.onChangeFilter(event.target.value);
        //
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select
                    //sets default value to selectedYear from Expenses.js
                    value={props.selectedYear}
                    onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;