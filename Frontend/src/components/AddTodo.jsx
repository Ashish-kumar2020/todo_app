import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [startDate, setSelectStartDate] = useState(null);
  const [endDate, setSelectEndDate] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleStartDateChange = (newValue) => {
    setSelectStartDate(newValue);
  };
  const handleEndDateChange = (newValue) => {
    setSelectEndDate(newValue);
  };

  const handleAddTodoData = async () => {
    try {
      let userID = localStorage.getItem("userID");
      const data = {
        title,
        description,
        priority,
        startDate,
        endDate,
        userID,
        isCompleted: false,
      };
      console.log(data);
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/createtodo",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data) {
        console.log("Message : ", response.data.message);
        setTitle("");
        setDescription("");
        setPriority("");
        setSelectStartDate(null);
        setSelectEndDate(null);
      }
    } catch (error) {
      console.error(
        "Error during signup:",
        error.response?.data || error.message
      );
      alert("Signin Failed! Please try again.");
    }
  };
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          border: "1px solid grey",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <TextField
          label="Add your title here"
          variant="outlined"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          sx={{
            marginBottom: "20px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "black",
              },
            },
          }}
        />
        <TextField
          label="Add your detailed description here"
          variant="outlined"
          multiline
          minRows={3}
          maxRows={6}
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          sx={{
            marginBottom: "20px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "black",
              },
            },
          }}
        />
        <InputLabel id="demo-simple-select-label">
          Select Task Priority
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          label="Priority"
          onChange={handlePriorityChange}
          sx={{ width: "200px", marginBottom: "20px" }}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Start Date"
            value={startDate}
            onChange={handleStartDateChange}
            sx={{
              marginLeft: "30px",
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select End Date"
            value={endDate}
            onChange={handleEndDateChange}
            sx={{
              marginLeft: "30px",
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Stack spacing={2} direction="row">
          <Button
            sx={{
              width: "100vw",
              height: "50px",
              backgroundColor: "#FF6767",
            }}
            onClick={handleAddTodoData}
            variant="contained"
          >
            Submit Todo
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default AddTodo;
