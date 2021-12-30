import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

// Assignment: Time to Practice: React & Component Basics
/*Complete the instructions mentioned in the above video.
In detail:
    Create a new component that is responsible for displaying expenses
    Add multiple ExpenseItem components in that component
    Keep the expenses data in the App component and pass that data into the newly created component
You can use this .css file for some styling for your Expenses 
*/

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </div>
  );
}

export default Expenses;
