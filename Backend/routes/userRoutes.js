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
userRouter.post("/fetchtodos", async (req, res) => {
  const { userID } = req.body;

  if (!userID) {
    return res.status(400).json({
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

    // Filter todos where isCompleted is false
    const pendingTodos = findUser.todos.filter((todo) => !todo.isCompleted);

    return res.status(200).json({
      message: "Pending Todos fetched successfully",
      todos: pendingTodos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

// fetch all completed user specific todos
userRouter.post("/completedTodos", async (req, res) => {
  const { userID } = req.body;

  if (!userID) {
    return res.status(400).json({
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

    // Filter todos where isCompleted is false
    const completedTodos = findUser.todos.filter((todo) => todo.isCompleted);

    return res.status(200).json({
      message: "Pending Todos fetched successfully",
      todos: completedTodos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

// create a todo

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
userRouter.post("/deletetodo", async (req, res) => {
  const { userID, todoID } = req.body;
  console.log(userID, todoID);
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

userRouter.post("/markasdone", async (req, res) => {
  const { isCompleted, userID, todoID } = req.body;

  if (!isCompleted == undefined || !userID || !todoID) {
    return res.status(400).json({
      message: "All fields are mandatory",
    });
  }
  try {
    const findTodo = await userModel.findOne({ userID });
    if (findTodo.todos.length == 0) {
      return res.status(400).json({
        message: "No todo found || Please add todo",
      });
    }
    const todoIndex = findTodo.todos.findIndex((todo) => todo._id == todoID);
    if (todoIndex === -1) {
      return res.status(404).json({
        message: "Todo Not found",
      });
    }
    if (isCompleted !== undefined)
      findTodo.todos[todoIndex].isCompleted = isCompleted;

    await findTodo.save();

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
