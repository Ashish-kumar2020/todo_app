const { Router } = require("express");
const { userModel } = require("../DB");
const { Types } = require("mongoose");

const userRouter = Router();

// create a new user
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({
      message: "All fields are mandatory",
    });
  }

  try {
    const checkIfUserExists = await userModel.findOne({ email });
    if (checkIfUserExists) {
      return res.status(200).json({
        message: "Email ID Already Registed",
      });
    }
    const userID = new Types.ObjectId();
    const user = await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userID: userID,
    });

    return res.status(200).json({
      message: "User added successfully",
      user: user,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    if (error.name === "MongoServerError" && error.code === 11000) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// signin user
userRouter.post("/signin", (req, res) => {
  return res.status(200).json({
    message: "User signed in successfully",
  });
});

// fetch all user specific todos
userRouter.get("/fetchtodos", (req, res) => {
  return res.status(200).json({
    message: "All Todos fetched successfully",
  });
});

// create a todo
userRouter.post("/createtodo", (req, res) => {
  return res.status(200).json({
    message: "Todo created successfully",
  });
});

// delete a todo
userRouter.delete("/deletetodo", (req, res) => {
  return res.status(200).json({
    message: "Todo deleted successfully",
  });
});

// update existing todo
userRouter.put("/updatetodo", (req, res) => {
  return res.status(200).json({
    message: "Todo updated successfully",
  });
});

module.exports = {
  userRouter: userRouter,
};
