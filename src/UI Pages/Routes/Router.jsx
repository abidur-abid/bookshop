import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Main Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import Profile from "../Components/Profile";
import AddBook from "../Components/AddBooks";
import UpdateBook from "../Components/UpdateBooks";
import TotalBooks from "../Components/TotalBooks";
import Login from "../../Authentication/components/Login";
import Registration from "../../Authentication/components/Registration";
import PrivateRoute from "../../Authentication/Routes/PrivateRoute";
import UpdateBooks from "../Components/UpdateBooks";

 // here router must be export for all project 
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>
        },
        {
          path: '/dashboard/addbook',
          element: <AddBook></AddBook>
        },
        {
          path: '/dashboard/updatebook/:id',
          element: <UpdateBooks></UpdateBooks>,
          loader: ({ params }) =>
            fetch(`http://localhost:3000/books/${params.id}`),
        },
        {
          path: '/dashboard/totalbooks',
          element: <TotalBooks></TotalBooks>
        },
      ]
    }
  ]);