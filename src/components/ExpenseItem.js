import './ExpenseItem.css';

function ExpenseItem(){
    return (<div  className="expense-item">
        <div>Date: July 20th</div>
        <div className="expense-item__description">
            <h2>Title: Car Payment</h2>
            <div className="expense-item__price">Amount:$175.53</div>
        </div>
            </div>);
}

export default ExpenseItem;