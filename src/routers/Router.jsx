import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Favorite from '../pages/Favorite';
import Readbook from '../pages/Readbook';

export default function Router() {
    
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/readbook",
      element: <Readbook />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (<RouterProvider router={router}/>)
}
