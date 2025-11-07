// const TaskCard = ({ task, onEdit, onDelete }) => {
//   const statusColors = {
//     pending: 'bg-yellow-100 text-yellow-800',
//     'in-progress': 'bg-blue-100 text-blue-800',
//     completed: 'bg-green-100 text-green-800'
//   };

//   const priorityColors = {
//     low: 'bg-gray-100 text-gray-800',
//     medium: 'bg-orange-100 text-orange-800',
//     high: 'bg-red-100 text-red-800'
//   };

//   return (
    
      
//         {task.title},
        
          
//             {task.status},
          
          
//             {task.priority},
          
        
      
      
//       {task.description},
      
//       {task.dueDate && (
        
//           Due: {new Date(task.dueDate).toLocaleDateString()}
        
//       )}
      
      
//         <button
//           onClick={() => onEdit(task)}
//           className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
//         >
//           Edit
          
        
//         <button
//           onClick={() => onDelete(task._id)}
//           className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
//         >
//           Delete
        
      
    
//   );
// };

// export default TaskCard;
const TaskCard = ({ task, onEdit, onDelete }) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  const priorityColors = {
    low: "bg-gray-100 text-gray-800",
    medium: "bg-orange-100 text-orange-800",
    high: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 border border-gray-200">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>

      {/* Status and Priority badges */}
      <div className="flex items-center gap-2">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[task.status]}`}
        >
          {task.status}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700">{task.description}</p>

      {/* Due Date */}
      {task.dueDate && (
        <p className="text-sm text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => onEdit(task)}
          className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
