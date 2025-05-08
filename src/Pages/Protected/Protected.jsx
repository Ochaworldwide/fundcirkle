import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Protected = () => {

  const token = localStorage.getItem("token");
  const location = useLocation();
  if (!token) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default Protected;
