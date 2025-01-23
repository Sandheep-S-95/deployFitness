import { useState } from "react";
import { useTaskContext } from "../hooks/useTasksContext";
import { Trash2, Edit } from "lucide-react";

const TaskDetails = ({ task }) => {
    const { dispatch } = useTaskContext();
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({
        title: task.title,
        load: task.load,
        reps: task.reps,
    });

    const handleDelete = () => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const filteredTasks = storedTasks.filter((t) => t._id !== task._id);
        localStorage.setItem("tasks", JSON.stringify(filteredTasks));
        dispatch({ type: "DELETE_TASK", payload: task });
    };

    const handleUpdate = () => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = storedTasks.map((t) =>
            t._id === task._id ? { ...task, ...updatedTask } : t
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        dispatch({ type: "UPDATE_TASK", payload: { ...task, ...updatedTask } });
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div className="bg-black border border-blue-500 rounded-lg p-6 mb-6 shadow-lg shadow-blue-500/20 w-[320px] ml-0">
                <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="space-y-4">
                    <div>
                        <label className="text-blue-400 text-sm font-semibold">Title:</label>
                        <input
                            type="text"
                            value={updatedTask.title}
                            onChange={(e) => setUpdatedTask({...updatedTask, title: e.target.value})}
                            className="w-full mt-1 bg-blue-500/20 border border-blue-500/30 rounded-md p-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="text-blue-400 text-sm font-semibold">Load (kg):</label>
                        <input
                            type="number"
                            value={updatedTask.load}
                            onChange={(e) => setUpdatedTask({...updatedTask, load: e.target.value})}
                            className="w-full mt-1 bg-blue-500/20 border border-blue-500/30 rounded-md p-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="text-blue-400 text-sm font-semibold">Reps:</label>
                        <input
                            type="number"
                            value={updatedTask.reps}
                            onChange={(e) => setUpdatedTask({...updatedTask, reps: e.target.value})}
                            className="w-full mt-1 bg-blue-500/20 border border-blue-500/30 rounded-md p-2 text-white"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Save
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="bg-black border border-blue-500 rounded-lg p-6 mb-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] transform hover:-translate-y-1 w-[320px] ml-0">
            <div className="flex items-center justify-start bg-blue-600 text-white py-2 px-4 rounded-t-lg">
                <h4 className="text-lg font-bold truncate">{task.title}</h4>
            </div>

            <div className="space-y-4 mt-4">
                <div className="flex items-center justify-start">
                    <span className="text-blue-400 text-sm font-semibold">Load:</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-md border border-blue-500/30 text-gray-300 text-sm ml-2">
                        {task.load} kg
                    </span>
                </div>

                <div className="flex items-center justify-start">
                    <span className="text-blue-400 text-sm font-semibold">Reps:</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-md border border-blue-500/30 text-gray-300 text-sm ml-2">
                        {task.reps}
                    </span>
                </div>
            </div>

            <div className="mt-4 flex space-x-4">
                <button 
                    onClick={() => setIsEditing(true)}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1 text-xs"
                >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                </button>
                <button 
                    onClick={handleDelete}
                    className="text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center space-x-1 text-xs"
                >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete workout</span>
                </button>
            </div>
        </div>
    );
};

export default TaskDetails;