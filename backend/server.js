const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());


app.use("/api", transactionRoutes);


mongoose
  .connect("mongodb://127.0.0.1:27017/transactions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
