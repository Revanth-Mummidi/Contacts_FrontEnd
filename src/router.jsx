import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import HomeScreen from "./Screens/HomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <HomeScreen />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
