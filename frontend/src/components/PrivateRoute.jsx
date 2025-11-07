
// import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return Loading...;
//   }

//   return user ? children : ;
// };

// export default PrivateRoute;
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Show a loading message while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is authenticated, render children
  // Otherwise, redirect to login
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
