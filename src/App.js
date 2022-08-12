import logo from './logo.svg';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

//This function is what is being imported into index.js and then displayed in the div chosen by id="root" from index.html
const DUMMY_EXPENSES = [
  {id:1,title:'paper',amount:5,date: new Date(2020,1,5)},
  {id:2,title:'cups',amount:10,date: new Date(2020,5,13)},
  {id:3,title:'towels',amount:20,date: new Date(2020,8,22)},
  {id:4,title:'soap',amount:18,date: new Date(2020,11,19)},
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* References Expenses component and sets "items" from "props.items..." and sets each value based on expenses array above */}
        {/*Value of items attribute is expenses array*/}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </header>
    </div>
  );
}

export default App;
