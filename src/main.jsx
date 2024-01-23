import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDash from "./AdminDash/AdminDash.jsx";
import Register from "./Authentication/Register/Register.jsx";
import Login from "./Authentication/Login/Login.jsx";
import Reset from "./Authentication/Reset/Reset.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDash></AdminDash>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
