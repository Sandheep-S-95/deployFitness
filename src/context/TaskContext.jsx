import { createContext ,useReducer} from 'react'

export const TasksContext=createContext()

export const tasksReducer = (state, action) => {
    let updatedTasks;

    switch (action.type) {
        case "SET_TASKS":
            return { tasks: action.payload };

        case "CREATE_TASK":
            updatedTasks = [action.payload, ...state.tasks];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };

        case "DELETE_TASK":
            updatedTasks = state.tasks.filter((task) => task._id !== action.payload._id);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };

        case "UPDATE_TASK":
            updatedTasks = state.tasks.map((task) =>
                task._id === action.payload._id ? action.payload : task
            );
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };

        default:
            return state;
    }
};



export const TasksContextProvider=({children})=>{
    const [state, dispatch] = useReducer(tasksReducer, {
         tasks: [] 
    });

    return(
        <TasksContext.Provider value={{...state,dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider