const { Router } = require("express");

const userRouter = Router();

// create a new user
userRouter.post("/signup", (req, res) => {
  return res.status(200).json({
    message: "User added successfully",
  });
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
