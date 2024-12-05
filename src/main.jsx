import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import AllTourist from "./Pages/AllTourist";
import AddTourist from "./Pages/AddTourist";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyCart from "./Pages/MyCart";
import AuthProvider from "./Provider/AuthProvider";
import ViewDetails from "./Conponents/ViewDetails";
import CountrySpot from "./Conponents/CountrySpot";
import Update from "./Conponents/Update";
import PrivetRout from "./Root/PrivetRout";
import ErrorPage from "./Conponents/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement : <ErrorPage></ErrorPage>,
        loader : () => fetch('https://world-explor-server.vercel.app/add'),
      },
      {
        path: "/allTourist",
        element: <AllTourist></AllTourist>,
        errorElement : <ErrorPage></ErrorPage>
      },
      {
        path: "/addTourist",
        element: <PrivetRout><AddTourist></AddTourist></PrivetRout>
      },
      {
        path: "/myCart",
        element: <PrivetRout><MyCart></MyCart></PrivetRout>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path : '/details/:id',
        element: <PrivetRout><ViewDetails></ViewDetails></PrivetRout>,
        loader : ({params}) => fetch(`https://world-explor-server.vercel.app/add/${params.id}`)
      },
      {
        path : '/sameCountry/:countryName',
        element : <CountrySpot></CountrySpot>,
        loader : ({params}) => fetch(`https://world-explor-server.vercel.app/get-by-country/${params.countryName}`)
      },
      {
        path : '/update/:id',
        element :<PrivetRout><Update></Update></PrivetRout>,
        loader : ({params}) => fetch(`https://world-explor-server.vercel.app/add/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
