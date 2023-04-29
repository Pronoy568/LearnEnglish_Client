import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayoutComponent/HomeLayout";
import Home from "../pages/Home/Home";
import CoursesLayout from "../LayoutComponent/CoursesLayout";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import Premium from "../pages/Premium/Premium";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Terms from "../pages/Login/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/premium/:id",
        element: (
          <PrivateRoute>
            <Premium />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learn-english-server-pronoy568.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/courses",
    element: <CoursesLayout></CoursesLayout>,
    children: [
      {
        path: "/courses",
        element: <Navigate to="/courses/0"></Navigate>,
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://learn-english-server-pronoy568.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
