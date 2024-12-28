const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const PORT_NUMBER = 3000;

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
