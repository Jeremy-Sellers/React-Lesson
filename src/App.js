import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
//This function is what is being imported into index.js and then displayed in the div chosen by id="root" from index.html
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Hello, World!</p>
        <ExpenseItem></ExpenseItem>
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
