import React, { useState } from "react";
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
  const [selectStartDate, setSelectStartDate] = useState(null);
  const [selectEndDate, setSelectEndDate] = useState(null);

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
            value={selectStartDate}
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
            value={selectEndDate}
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
            onClick={() => {
              console.log({
                Title: title,
                description: description,
                priority: priority,
                startDate: selectStartDate,
                endDate: selectEndDate,
              });
              setTitle("");
              setDescription("");
              setPriority("");
              setSelectStartDate(null);
              setSelectEndDate(null);
            }}
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
