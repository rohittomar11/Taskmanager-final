// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
    
      
//         Task Manager
//         Organize your tasks efficiently
        
          
//             Get Started
          
          
//             Login
          
        
      
    
//   );
// };

// export default Home;
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">Task Manager</h1>
      <p className="text-lg text-gray-700 mb-8">
        Organize your tasks efficiently and boost your productivity
      </p>

      <div className="flex gap-4">
        <Link
          to="/signup"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium border border-indigo-600 hover:bg-indigo-100 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
