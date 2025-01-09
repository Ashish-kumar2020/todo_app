import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import VitalTask from "./components/VitalTask";
import DashBoard from "./components/DashBoard";
import MyTask from "./components/MyTask";
import TaskCategories from "./components/TaskCategories";
import Settings from "./components/Settings";
import Help from "./components/Help";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Signin />,
    },
    {
      path: "/body",
      element: <AppLayout />,
      children: [
        { path: "Dashboard", element: <DashBoard /> },
        { path: "VitalTask", element: <VitalTask /> },
        { path: "MyTask", element: <MyTask /> },
        { path: "TaskCategories", element: <TaskCategories /> },
        { path: "Settings", element: <Settings /> },
        { path: "Help", element: <Help /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
