import "./components/Expenseitem.css";
import ExpenseItem from "./components/Expenseltem.jsx";

const App = () => {
    const expenses = [
      {
        date: new Date(2024, 8, 12),
        title: "Raamat",
        price: 30.99
      },
      {
        date: new Date(2024, 8, 12),
        title: "Teksad",
        price: 99.99
      }
    ]
  return (
    <div className = "App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  );
}

export default App;
