import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDash from "./AdminDash/AdminDash.jsx";
import Register from "./Authentication/Register/Register.jsx";
import Login from "./Authentication/Login/Login.jsx";
import Reset from "./Authentication/Reset/Reset.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import DashLayout from "./DashLayout/DashLayout.jsx";
import Profile from "./DashLayout/DashboardRoutes/Profile/Profile.jsx";
import RoleChange from "./DashLayout/User Manage/RoleChange.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Private from "./Provider/Private.jsx";

const queryClient = new QueryClient();
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
    children: [],
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
    element: (
      <Private>
        <DashLayout></DashLayout>
      </Private>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "user",
        element: <RoleChange />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>{" "}
    </QueryClientProvider>
  </React.StrictMode>
);
