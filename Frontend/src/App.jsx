import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import DashBoard from "./components/DashBoard";
import Notes from "./components/Notes";
import EditProfile from "./components/EditProfile";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import CompletedTask from "./components/CompletedTask";
import InProgressTask from "./components/InProgressTask";
import Backlog from "./components/Backlog";

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
        { path: "CompletedTask", element: <CompletedTask /> },
        { path: "InProgressTask", element: <InProgressTask /> },
        { path: "Backlog", element: <Backlog /> },
        { path: "Notes", element: <Notes /> },
        { path: "EditProfile", element: <EditProfile /> },
        { path: "/body", element: <Navigate to="/body/Dashboard" /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
