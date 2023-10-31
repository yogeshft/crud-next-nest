const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const usersController = require("./controller");

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://sidd_1:sidd1@cluster0.ta7gf.mongodb.net/db_check", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", usersController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
