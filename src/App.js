import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
//This function is what is being imported into index.js and then displayed in the div chosen by id="root" from index.html
function App() {
  const expenses = [
    {id:1,title:'paper',dollarAmount:5,date: new Date(2020,1,5)},
    {id:2,title:'cups',dollarAmount:10,date: new Date(2020,5,13)},
    {id:3,title:'towels',dollarAmount:20,date: new Date(2020,8,22)},
    {id:4,title:'soap',dollarAmount:18,date: new Date(2020,11,19)}
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Hello, World!</p>
        <ExpenseItem title={expenses[0].title}
                     amount={expenses[0].dollarAmount}
                     date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title}
                     amount={expenses[1].dollarAmount}
                     date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title}
                     amount={expenses[2].dollarAmount}
                     date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title}
                     amount={expenses[3].dollarAmount}
                     date={expenses[3].date}></ExpenseItem>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
