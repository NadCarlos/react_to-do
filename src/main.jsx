import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from './appContext/AuthContext';
import { ThemeProvider } from './appContext/ModeContext';
import { UserProvider } from './appContext/UserContext';

import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import PrivateRoutes from './appContext/PrivateRoutes';
import TaskList from './pages/TaskList';
import Error from './pages/Error';
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes component={Home}/>,
  },
  {
    path: "/contact",
    element: <PrivateRoutes component={Contact}/>,
  },
  {
    path: "/tasks",
    element: <PrivateRoutes component={TaskList}/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/protected",
    element: <PrivateRoutes />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
);