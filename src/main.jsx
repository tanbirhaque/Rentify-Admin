import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDash from "./AdminDash/AdminDash.jsx";
import Register from "./Authentication/Register/Register.jsx";
import Login from "./Authentication/Login/Login.jsx";
import Reset from "./Authentication/Reset/Reset.jsx";
import AuthProvider, { AuthContext } from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import DashLayout from "./DashLayout/DashLayout.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AdminDash></AdminDash>,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/reset",
  //   element: <Reset />,
  // },
  {
    path: "/",
    element: <Login />,
    children: [

    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
  // Dashboard routes here
  {
    path: "dashboard",
    element: <DashLayout></DashLayout>,
    children: [

    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
