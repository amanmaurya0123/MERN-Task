const express = require("express");
const axios = require("axios");
const Transaction = require("../models/Transaction");

const router = express.Router();

// API to fetch and initialize data
router.get("/initialize", async (req, res) => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const transactions = response.data;

    // Clear existing data and insert new data
    await Transaction.deleteMany({});
    await Transaction.insertMany(transactions);

    res.status(200).send("Database initialized successfully!");
  } catch (error) {
    res.status(500).send("Error initializing database");
  }
});

// Additional APIs (e.g., /transactions, /statistics, etc.)
router.get("/transactions", async (req, res) => {
  // Implement search and pagination logic here
});

module.exports = router;
