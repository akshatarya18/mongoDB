const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db.config");
const app = express();
const userRouter = require("./routes/user.route");
const productRouter= require("./routes/product.route");
const carRouter = require("./routes/car.route");
const laptop = require("./routes/laptop.route");
const book = require("./routes/book.route")
dotenv.config(); // Load environment variables from .env file
app.use(express.json()); // Middleware to parse JSON request bodies
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product",productRouter);
app.use("/api/v1/car",carRouter);
app.use("/api/v1/laptop",laptop);
app.use("/api/v1/book",book);
async function startServer() {
  try {
    await connectDB(); // Ensure the database connection is established

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
  }
}

startServer(); // Start the server after connecting to the database