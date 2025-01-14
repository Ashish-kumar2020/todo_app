const { Router } = require("express");
const { userModel } = require("../DB");
const { Types } = require("mongoose");
const jwt = require("jsonwebtoken");
const userRouter = Router();

// create a new user
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName, userName } = req.body;
  if (!email || !password || !firstName || !lastName || !userName) {
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
      userName: userName,
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
userRouter.get("/fetchtodos", async (req, res) => {
  const { userID } = req.body;
  if (!userID) {
    return res.json(400).json({
      message: "All fields are mandatory",
    });
  }

  try {
    const findUser = await userModel.findOne({ userID });
    if (!findUser) {
      return res.status(400).json({
        message: "Invalid user",
      });
    }

    return res.status(200).json({
      message: "All Todos fetched successfully",
      todos: findUser.todos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

// create a todo

// {
//   "title": "Ashish",
//   "description": "This is my first ever todo",
//   "priority": "Medium",
//   "startDate": "2025-01-13T18:30:00.000Z",
//   "endDate": "2025-01-15T18:30:00.000Z",
//   "userID": "67868cb8e6965c0b9bf4f993"
// }
userRouter.post("/createtodo", async (req, res) => {
  const {
    title,
    description,
    isCompleted,
    priority,
    userID,
    startDate,
    endDate,
  } = req.body;

  if (
    !title ||
    !description ||
    isCompleted == undefined ||
    !priority ||
    !userID ||
    !startDate ||
    !endDate
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
      startDate: new Date(startDate),
      endDate: new Date(endDate),
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
userRouter.delete("/deletetodo", async (req, res) => {
  const { userID, todoID } = req.body;

  if (!userID || !todoID) {
    return res.status(400).json({
      message: "All fields are mandatory",
    });
  }

  try {
    const findTodo = await userModel.findOne({ userID });
    if (findTodo.todos.length == 0) {
      return res.status(400).json({
        message: "No todo found || Please Add Todos",
      });
    }

    console.log(findTodo.todos);
    const todoIndex = findTodo.todos.findIndex((todo) => todo._id == todoID);
    if (todoIndex === -1) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    findTodo.todos.splice(todoIndex, 1);
    await findTodo.save();
    return res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

// update existing todo
userRouter.put("/updatetodo", async (req, res) => {
  const { title, description, isCompleted, priority, userID, todoID } =
    req.body;

  if (
    !title ||
    !description ||
    isCompleted == undefined ||
    !priority ||
    !userID ||
    !todoID
  ) {
    return res.status(400).json({
      message: "All fields are mandatory",
    });
  }

  try {
    const findTodo = await userModel.findOne({ userID });
    if (findTodo.todos.length == 0) {
      return res.status(400).json({
        message: "No todo found || Please Add Todos",
      });
    }
    const todoIndex = findTodo.todos.findIndex((todo) => todo._id == todoID);
    console.log("Todo Index", todoIndex);
    if (todoIndex === -1) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    if (title) findTodo.todos[todoIndex].title = title;
    if (description) findTodo.todos[todoIndex].description = description;
    if (isCompleted !== undefined)
      findTodo.todos[todoIndex].isCompleted = isCompleted;
    if (priority) findTodo.todos[todoIndex].priority = priority;

    await findTodo.save();

    console.log(findTodo.todos[todoIndex]);
    return res.status(200).json({
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

module.exports = {
  userRouter: userRouter,
};
