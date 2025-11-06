import React from 'react'
import { Navigate } from 'react-router-dom'

function AuthRoute({ user, adminComponent, defaultComponent}) {
    console.log("auth user:", user);
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.rol === "A") {
    return adminComponent;
  }

  return defaultComponent;
}

export default AuthRoute