import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionsTable = ({ selectedMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, page, searchText]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/transactions",
        {
          params: { month: selectedMonth, page, search: searchText },
        }
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn._id}>
              <td>{txn.title}</td>
              <td>{txn.description}</td>
              <td>{txn.price}</td>
              <td>{new Date(txn.dateOfSale).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
        Previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default TransactionsTable;
