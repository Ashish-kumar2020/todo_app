import "./App.css";
import { useSelector } from "react-redux";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Body from "./components/Body";
import DashBoard from "./components/DashBoard";
import MyTask from "./components/MyTask";
import TaskCategories from "./components/TaskCategories";
import Settings from "./components/Settings";
import Help from "./components/Help";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import VitalTask from "./components/VitalTask";

function App() {
  const isSideNavVisible = useSelector((state) => state.visibility);
  console.log(isSideNavVisible);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
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
          element: <Body />,
          children: [
            {
              path: "Dashboard",
              element: isSideNavVisible.Dashboard ? (
                <div>Hi</div>
              ) : (
                <Navigate to="/" />
              ),
            },
            {
              path: "VitalTask",
              element: isSideNavVisible.VitalTask ? (
                <VitalTask />
              ) : (
                <div>Access Denied</div>
              ),
            },
            {
              path: "MyTask",
              element: isSideNavVisible.MyTask ? (
                <MyTask />
              ) : (
                <div>Access Denied</div>
              ),
            },
            {
              path: "TaskCategories",
              element: isSideNavVisible.TaskCategories ? (
                <TaskCategories />
              ) : (
                <div>Access Denied</div>
              ),
            },
            {
              path: "Settings",
              element: isSideNavVisible.Settings ? (
                <Settings />
              ) : (
                <div>Access Denied</div>
              ),
            },
            {
              path: "Help",
              element: isSideNavVisible.Help ? (
                <Help />
              ) : (
                <div>Access Denied</div>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
