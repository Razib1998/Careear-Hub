import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Applied from './components/Applied/Applied';
import JobDetails from './components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';
import Login from './components/Header/Login/Login';
import Register from './components/Header/Register/Register';
import ContextProvider from './Context/ContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
  {
    path: '/',
    element:<Home></Home>
  },
  {
    path: "/login",
    element:<Login></Login>,
  },
  {
    path: "/register",
    element:<Register></Register>
  },
  {
    path: '/applied',
    element: <Applied></Applied>,
    loader: () => fetch('/jobs.json')
  },
  {
    path: '/job/:id',
    element: <JobDetails></JobDetails>,
    loader: ()=> fetch('../jobs.json')
  }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ContextProvider>
  </React.StrictMode>
);
