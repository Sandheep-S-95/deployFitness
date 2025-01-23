// TaskDetails.jsx
import { Trash2, Edit } from 'lucide-react';
import { useState } from 'react';
import { useTaskContext } from '../hooks/useTasksContext';

const TaskDetails = ({ task }) => {
    const { dispatch } = useTaskContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        title: task.title,
        load: task.load,
        reps: task.reps
    });

    const handleDelete = async () => {
        const response = await fetch('/api/tasks/' + task._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_TASK', payload: json });
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        const response = await fetch('/api/tasks/' + task._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editForm)
        });

        const updatedTask = await response.json(); // Get the updated task from the response

        console.log("++++++++++++",updatedTask);

        if (response.ok) {
            // Dispatch the updated task directly
            dispatch({ 
                type: 'UPDATE_TASK', 
                payload: updatedTask  // Pass the updated task directly
            });
            setIsEditing(false);  // Close the edit form
        } else {
            console.error("Failed to update task:", updatedTask);
        }
    };

    if (isEditing) {
        return (
            <div className="bg-black border border-blue-500 rounded-lg p-6 mb-6 shadow-lg shadow-blue-500/20 w-[320px] ml-0">
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="text-blue-400 text-sm font-semibold">Title:</label>
                        <input
                            type="text"
                            value={editForm.title}
                            onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                            className="w-full mt-1 bg-blue-500/20 border border-blue-500/30 rounded-md p-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="text-blue-400 text-sm font-semibold">Load (kg):</label>
                        <input
                            type="number"
                            value={editForm.load}
                            onChange={(e) => setEditForm({...editForm, load: e.target.value})}
                            className="w-full mt-1 bg-blue-500/20 border border-blue-500/30 rounded-md p-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="text-blue-400 text-sm font-semibold">Reps:</label>
                        <input
                            type="number"
                            value={editForm.reps}
                            onChange={(e) => setEditForm({...editForm, reps: e.target.value})}
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