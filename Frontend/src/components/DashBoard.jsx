import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

import AddTodo from "./AddTodo";

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const DashBoard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="dashboard tabs"
        sx={{
          "& .MuiTab-root": {
            color: "inherit",
            "&.Mui-selected": {
              color: "red",
            },
            "&:hover": {
              color: "red",
            },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "red",
          },
        }}
      >
        <Tab label="Add Task" />
        <Tab label="Add Notes" />
      </Tabs>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        {/* Add new Todo component */}
        <AddTodo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Upcoming
      </TabPanel>
    </Box>
  );
};

export default DashBoard;
