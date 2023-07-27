import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Static/Layout";
import Home from "../Pages/Home";
import Register from "../Pages/authPages/Register";
import SignIn from "../Pages/authPages/SignIn";
import Todo from "../Pages/Dashboard/Todo";
import Task from "../Pages/Dashboard/Task";
import Progress from "../Pages/Dashboard/Progress";
import Done from "../Pages/Dashboard/Done";
import AllTask from "../Pages/Dashboard/AllTask";
import PrivateRouter from "./PrivateRouter";
import Highest from "../Pages/Dashboard/Highest";

const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/input-task/",
    element: (
      <PrivateRouter>
        <Todo />
      </PrivateRouter>
    ),
    children: [
      {
        path: "task",
        element: <Task />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "done",
        element: <Done />,
      },
      {
        path: "highest",
        element: <Highest />,
      },
      {
        index: true,
        element: <AllTask />,
      },
    ],
  },
]);

export default mainRoute;
