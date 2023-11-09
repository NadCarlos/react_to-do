import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


//Private routes
export default function ProtectedRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
}
