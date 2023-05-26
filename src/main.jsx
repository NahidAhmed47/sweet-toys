import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/DefaultPages/Home/Home/Home";
import AllToys from "./pages/DefaultPages/AllToys/AllToys";
import Blogs from "./pages/DefaultPages/Blogs/Blogs";
import MyToys from "./pages/UserAccessPages/MyToys/MyToys";
import AddToys from "./pages/UserAccessPages/AddToys/AddToys";
import Login from "./pages/LoginPages/Login";
import Registration from "./pages/LoginPages/Registration";
import AuthProviders from "./providers/AuthProviders";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ViewDetails from "./pages/UserAccessPages/ViewDetails/ViewDetails";
import PrivateRoute from "./pages/PrivateRoutes/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>
      },
      {
        path: "my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "add-toys",
        element: <AddToys></AddToys>,
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sweet-toys-server1.vercel.app/teddy-data/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "user/login",
        element: <Login></Login>,
      },
      {
        path: "user/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
);
