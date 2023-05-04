import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"
import AdministrativeAssistant from "../Pages/Searches/AdministrativeAssistant/AdministrativeAssistant";
import BusinessDevelopment from "../Pages/Searches/BusinessDevelopment/BusinessDevelopment";
import CustomerService from "../Pages/Searches/CustomerService/CustomerService";
import Enginerring from "../Pages/Searches/Enginerring/Enginerring";
import Finance from "../Pages/Searches/Finance/Finance";
import InformationTechnology from "../Pages/Searches/InformationTechnology/InformationTechnology";
import Marketing from "../Pages/Searches/Marketing/Marketing";
import Operations from "../Pages/Searches/Operations/Operations";
import RetailAssociate from "../Pages/Searches/RetailAssociate/RetailAssociate";

export const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/AdministrativeAssistant",
      element: <AdministrativeAssistant/>,
    },
    {
      path: "/BusinessDevelopment",
      element: <BusinessDevelopment/>,
    },
    {
      path: "/CustomerService",
      element: <CustomerService/>,
    },
    {
      path: "/Enginerring",
      element: <Enginerring/>,
    },
    {
      path: "/Finance",
      element: <Finance/>,
    },
    {
      path: "/InformationTechnology",
      element: <InformationTechnology/>,
    },
    {
      path: "/Marketing",
      element: <Marketing/>,
    },
    {
      path: "/Operations",
      element: <Operations/>,
    },
    {
      path: "/RetailAssociate",
      element: <RetailAssociate/>,
    },
    
  ]);