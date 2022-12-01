import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default ProtectedRoutes