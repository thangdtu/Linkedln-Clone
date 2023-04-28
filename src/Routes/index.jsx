import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"

export const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/",
      element: <Home/>,
    },
    
  ]);