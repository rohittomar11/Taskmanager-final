// import { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
// import TaskCard from '../components/TaskCard';
// import TaskForm from '../components/TaskForm';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);
//   const [filter, setFilter] = useState('all');
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`
//         }
//       };
//       const { data } = await axios.get('/api/tasks', config);
//       setTasks(data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const handleCreateTask = async (taskData) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`
//         }
//       };
//       await axios.post('/api/tasks', taskData, config);
//       setShowForm(false);
//       fetchTasks();
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleUpdateTask = async (taskData) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`
//         }
//       };
//       await axios.put(`/api/tasks/${editingTask._id}`, taskData, config);
//       setEditingTask(null);
//       fetchTasks();
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleDeleteTask = async (id) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${user.token}`
//           }
//         };
//         await axios.delete(`/api/tasks/${id}`, config);
//         fetchTasks();
//       } catch (error) {
//         console.error('Error deleting task:', error);
//       }
//     }
//   };

//   const filteredTasks = tasks.filter(task => {
//     if (filter === 'all') return true;
//     return task.status === filter;
//   });

//   const stats = {
//     total: tasks.length,
//     pending: tasks.filter(t => t.status === 'pending').length,
//     inProgress: tasks.filter(t => t.status === 'in-progress').length,
//     completed: tasks.filter(t => t.status === 'completed').length
//   };

//   return (
    
      
        
//           My Tasks
          
          
            
//               Total Tasks
//               {stats.total}
            
            
//               Pending
//               {stats.pending}
            
            
//               In Progress
//               {stats.inProgress}
            
            
//               Completed
//               {stats.completed}
            
          

          
            
//               <button
//                 onClick={() => setFilter('all')}
//                 className={`px-4 py-2 rounded-lg ${
//                   filter === 'all'
//                     ? 'bg-indigo-600 text-white'
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 All
              
//               <button
//                 onClick={() => setFilter('pending')}
//                 className={`px-4 py-2 rounded-lg ${
//                   filter === 'pending'
//                     ? 'bg-indigo-600 text-white'
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 Pending
              
//               <button
//                 onClick={() => setFilter('in-progress')}
//                 className={`px-4 py-2 rounded-lg ${
//                   filter === 'in-progress'
//                     ? 'bg-indigo-600 text-white'
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 In Progress
              
//               <button
//                 onClick={() => setFilter('completed')}
//                 className={`px-4 py-2 rounded-lg ${
//                   filter === 'completed'
//                     ? 'bg-indigo-600 text-white'
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 Completed
              
            

//             <button
//               onClick={() => {
//                 setShowForm(!showForm);
//                 setEditingTask(null);
//               }}
//               className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//             >
//               {showForm ? 'Cancel' : '+ New Task'}
            
          
        

//         {(showForm || editingTask) && (
//           <TaskForm
//             task={editingTask}
//             onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
//             onCancel={() => {
//               setShowForm(false);
//               setEditingTask(null);
//             }}
//           />
//         )}

        
//           {filteredTasks.map(task => (
            
//           ))}
        

//         {filteredTasks.length === 0 && (
          
//             No tasks found
          
//         )}
      
    
//   );
// };

// export default Dashboard;
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) fetchTasks();
  }, [user]);

  const fetchTasks = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const { data } = await axios.get("/api/tasks", config);
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      await axios.post("/api/tasks", taskData, config);
      setShowForm(false);
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      await axios.put(`/api/tasks/${editingTask._id}`, taskData, config);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        await axios.delete(`/api/tasks/${id}`, config);
        fetchTasks();
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === "pending").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-medium">Total Tasks</h3>
          <p className="text-xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-medium">Pending</h3>
          <p className="text-xl font-bold">{stats.pending}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-medium">In Progress</h3>
          <p className="text-xl font-bold">{stats.inProgress}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-medium">Completed</h3>
          <p className="text-xl font-bold">{stats.completed}</p>
        </div>
      </div>

      {/* Filters & New Task */}
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        {["all", "pending", "in-progress", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg ${
              filter === status
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            {status === "all"
              ? "All"
              : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}

        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingTask(null);
          }}
          className="ml-auto bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {showForm ? "Cancel" : "+ New Task"}
        </button>
      </div>

      {/* Task Form */}
      {(showForm || editingTask) && (
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      )}

      {/* Task List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={(t) => {
                setEditingTask(t);
                setShowForm(true);
              }}
              onDelete={handleDeleteTask}
            />
          ))
        ) : (
          <p className="text-gray-500">No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
