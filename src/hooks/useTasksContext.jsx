import { TasksContext } from "../context/TaskContext";
import { useContext } from "react";

export const useTaskContext=()=>{
    const context = useContext(TasksContext)

    if(!context){
        throw Error("useTaskContext must be inside a TaskContextProvider")
    }

    return context
}