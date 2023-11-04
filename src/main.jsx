import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import PrivateRoutes from './components/PrivateRoutes';
import TaskList from './pages/TaskList';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import { AuthProvider } from './components/AuthContext';


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
    path: "/protected",
    element: <PrivateRoutes />,
  },
  {
    path: "/tasks",
    element: <PrivateRoutes component={TaskList}/>,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);