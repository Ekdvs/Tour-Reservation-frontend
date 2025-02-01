import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const userEmail = localStorage.getItem("userEmail"); // Check if the user is logged in
  const userRole = localStorage.getItem("role"); // Get the role of the user

  if (!userEmail) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  if (!userRole || userRole !== role) {
    // If the user is logged in but doesn't have the required role, redirect to home page
    return <Navigate to="/" />;
  }

  return children; // If logged in and role matches, render the protected route
};

export default ProtectedRoute;
