import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Authentication/Register/Register.jsx";
import Login from "./Authentication/Login/Login.jsx";
import Reset from "./Authentication/Reset/Reset.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import DashLayout from "./DashLayout/DashLayout.jsx";
import OwnerRequest from "./DashLayout/DashboardRoutes/Owner Request/OwnerRequest.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Private from "./Provider/Private.jsx";
import Comments from "./DashLayout/DashboardRoutes/Comments/Comments.jsx";
import Reviews from "./DashLayout/DashboardRoutes/Reviews/Reviews.jsx";
import ErrorPage from "./Error/ErrorPage.jsx";
import Blogs from "./DashLayout/DashboardRoutes/Profile/Blogs/Blogs.jsx";
import AllProperties from "./DashLayout/DashboardRoutes/Properties/AllProperties.jsx";
import Profile from "./DashLayout/DashboardRoutes/Profile/Profile/Profile.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Private>
        <DashLayout />
      </Private>
    ),
    // element: <Login />,
    children: [
      {
        path: "/",
        element: (
          <Private>
            <Profile />
          </Private>
        ),
      },
      {
        path: "owners",
        element: <OwnerRequest />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "property-verification",
        element: <AllProperties />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
