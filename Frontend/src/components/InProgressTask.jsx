import React, { useState } from "react";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
const InProgressTask = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskStatus, setTaskStatus] = useState();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, aut!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 2,
      title: "Task 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 3,
      title: "Task 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 4,
      title: "Task 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 5,
      title: "Task 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 6,
      title: "Task 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 7,
      title: "Task 7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 8,
      title: "Task 8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 9,
      title: "Task 9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 10,
      title: "Task 10",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 11,
      title: "Task 11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 12,
      title: "Task 12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 13,
      title: "Task 13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 14,
      title: "Task 14",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 15,
      title: "Task 15",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 16,
      title: "Task 16",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 17,
      title: "Task 17",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 18,
      title: "Task 18",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 19,
      title: "Task 19",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
    {
      id: 20,
      title: "Task 20",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum suscipit autem ducimus id eaque fugiat itaque voluptatibus iste animi cumque quas aliquam asperiores, facere alias nobis ratione labore quasi!",
    },
  ]);

  const handleTaskOpening = (task) => {
    setSelectedTask(task);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedTask(null);
  };

  const handleDelete = () => {
    if (selectedTask) {
      setTasks(tasks.filter((task) => task.id !== selectedTask.id));
      handleClose();
    }
  };

  const handleEditClick = () => {
    setTaskStatus("edit");
  };

  const handleSaveChanges = () => {
    if (selectedTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === selectedTask.id
            ? {
                ...task,
                title: selectedTask.title,
                description: selectedTask.description,
              }
            : task
        )
      );
      handleClose();
      setTaskStatus();
    }
  };

  const handleInputChange = (field, value) => {
    setSelectedTask((prev) => ({ ...prev, [field]: value }));
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontWeight: "bold" }}
        >
          Inprogress Tasks - {tasks.length}
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
                  {taskStatus === "edit" ? (
                    <>
                      <TextField
                        label="Title"
                        fullWidth
                        value={selectedTask.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        sx={{ marginBottom: 2 }}
                      />
                      <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={selectedTask.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <Typography variant="h6">{selectedTask.title}</Typography>
                      <Typography variant="body1" sx={{ marginTop: 2 }}>
                        {selectedTask.description}
                      </Typography>
                    </>
                  )}
                </>
              )}
            </DialogContent>
            <DialogActions>
              {taskStatus === "edit" ? (
                <Button onClick={handleSaveChanges} color="primary">
                  Save
                </Button>
              ) : (
                <Button
                  startIcon={<EditNoteSharpIcon />}
                  color="primary"
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              )}
              <Button
                startIcon={<DoneAllOutlinedIcon />}
                color="success"
                onClick={handleClose}
              >
                Mark as Done
              </Button>
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

export default InProgressTask;
