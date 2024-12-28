const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  userID: ObjectId,
});

const todoSchema = new Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  dueDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value instanceof Date && !isNaN(value);
      },
      message: "Invalid date format.",
    },
  },
});

const todoModel = mongoose.model("todos", todoSchema);
const userModel = mongoose.model("users", userSchema);

module.exports = {
  todoModel,
  userModel,
};
