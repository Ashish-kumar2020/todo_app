const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const { userRouter } = require("./routes/userRoutes");
const cors = require("cors");
const PORT_NUMBER = 3000;
app.use(
  cors({
    origin: "http://localhost:5173", // Allow this specific origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);
app.use("/api/v1/user", userRouter);
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_AUTH_URL);
    console.log("Connected to DB");
    app.listen(PORT_NUMBER, () => {
      console.log(
        `Connected to Mongo DB and Server is up and running on PORT_NUMBER : ${PORT_NUMBER}`
      );
    });
  } catch (error) {
    console.error("Error connecting to DB :", error);
  }
}

main();
