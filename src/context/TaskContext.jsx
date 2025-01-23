import { createContext ,useReducer} from 'react'

export const TasksContext=createContext()

export const tasksReducer=(state,action)=>{
    switch(action.type){
        case 'SET_TASKS':
            return{
                tasks:action.payload
            }
        case 'CREATE_TASK':
            return{
                tasks:[action.payload, ...state.tasks]
            }
        case 'DELETE_TASK':
            return{
                tasks:state.tasks.filter((task)=> task._id!==action.payload._id)
            }
        case 'UPDATE_TASK':
            const updatedTasks = state.tasks.map(task => 
                task._id === action.payload._id ? action.payload : task
            );
            
            console.log("Updated Tasks:", updatedTasks); // Log the updated tasks array
        
            return {
                tasks: updatedTasks // Return the updated state
            }
        default:
            return state
    }
}

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