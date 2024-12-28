const { Router } = require("express");
const { userModel } = require("../DB");
const { Types } = require("mongoose");
const jwt = require("jsonwebtoken");
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
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are mandatory",
    });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "User not found| please signup",
      });
    }

    if (existingUser.password !== password) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      {
        user: existingUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "User signed in successfully",
      userDetails: {
        email: existingUser.email,
        firstName: existingUser.firstName,
        lastName: existingUser.password,
        userID: existingUser.userID,
      },
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

// fetch all user specific todos
userRouter.get("/fetchtodos", (req, res) => {
  return res.status(200).json({
    message: "All Todos fetched successfully",
  });
});

// create a todo
userRouter.post("/createtodo", async (req, res) => {
  const { title, description, isCompleted, priority, userID } = req.body;

  if (
    !title ||
    !description ||
    isCompleted == undefined ||
    !priority ||
    !userID
  ) {
    return res.status(400).json({
      message: "All fields are mandatory",
    });
  }

  try {
    const existingUser = await userModel.findOne({ userID });

    if (!existingUser) {
      return res.status(400).json({
        message: "Invalid user",
      });
    }

    const todoDetails = {
      title,
      description,
      isCompleted,
      priority,
    };
    existingUser.todos.push(todoDetails);
    await existingUser.save();
    console.log(existingUser.todos);

    return res.status(200).json({
      message: "Todo created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while adding the todo",
      error: error.message,
    });
  }
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
