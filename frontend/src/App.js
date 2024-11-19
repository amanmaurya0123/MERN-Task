import React, { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import TransactionsStatistics from "./components/TransactionsStatistics";
import TransactionsBarChart from "./components/TransactionsBarChart";
import TransactionsPieChart from "./components/TransactionsPieChart";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");

  return (
    <div>
      <h1>Transactions Dashboard</h1>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <TransactionsTable selectedMonth={selectedMonth} />
      <TransactionsStatistics selectedMonth={selectedMonth} />
      <TransactionsBarChart selectedMonth={selectedMonth} />
      <TransactionsPieChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
