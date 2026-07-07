import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../utils/helpers';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const auth = isAuthenticated();
  const role = getUserRole();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;