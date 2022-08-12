import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    //formats each part of date object
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
        {/*Displays each part of formatted date*/}
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day},</div>
        <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;