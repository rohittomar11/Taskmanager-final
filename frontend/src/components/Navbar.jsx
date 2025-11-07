// import { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
    
      
        
//           TaskManager
        
        
//           {user ? (
//             <>
              
//                 Dashboard
              
//               Welcome, {user.name}
              
//                 Logout
              
//             </>
//           ) : (
//             <>
              
//                 Login
              
              
//                 Sign Up
              
//             </>
//           )}
        
      
    
//   );
// };

// export default Navbar;
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold">
        TaskManager
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link
              to="/dashboard"
              className="hover:text-indigo-200 transition-colors"
            >
              Dashboard
            </Link>

            <span className="text-sm bg-indigo-500 px-3 py-1 rounded-full">
              Welcome, {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-lg text-sm font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="hover:text-indigo-200 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-indigo-600 px-4 py-1 rounded-lg font-medium hover:bg-indigo-100 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
