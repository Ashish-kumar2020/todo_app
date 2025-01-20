import React, { useEffect, useState } from "react";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Slide,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import axios from "axios";
const CompletedTask = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleTaskOpening = (task) => {
    setSelectedTask(task);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedTask(null);
  };

  const handleDelete = async () => {
    const userID = localStorage.getItem("userID");
    const data = {
      userID: userID,
      todoID: selectedTask._id,
    };

    console.log(data);
    let response = await axios.post(
      "http://localhost:3000/api/v1/user/deletetodo",
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data) {
      fetchTodos();
      handleClose();
    }
  };

  const fetchTodos = async () => {
    try {
      let userID = localStorage.getItem("userID");
      const data = {
        userID,
      };
      let response = await axios.post(
        "http://localhost:3000/api/v1/user/completedTodos",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data) {
        setTasks(response.data.todos);
      }
    } catch (error) {
      console.error(
        "Error during fetching todos:",
        error.response?.data || error.message
      );
      alert(" Problem in fetching! Please try again.");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontWeight: "bold" }}
        >
          Completed Tasks - {tasks.length}
        </Typography>

        {/* Flex container to hold all cards */}
        <div className="flex flex-wrap gap-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Card sx={{ maxWidth: 335 }} key={task.id} className="flex">
                <CardActionArea onClick={() => handleTaskOpening(task)}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {task.title.slice(0, 50)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {task.description.length > 50
                        ? `${task.description.slice(0, 50)}...`
                        : task.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No completed tasks found.
            </Typography>
          )}
          <Dialog open={openDialog} onClose={handleClose}>
            <DialogTitle>Task Details</DialogTitle>
            <DialogContent>
              {selectedTask && (
                <>
                  <Typography variant="h6">{selectedTask.title}</Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                    {selectedTask.description}
                  </Typography>
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button
                startIcon={<DeleteForeverIcon />}
                color="error"
                onClick={handleDelete}
              >
                Delete
              </Button>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Container>
    </div>
  );
};

export default CompletedTask;
