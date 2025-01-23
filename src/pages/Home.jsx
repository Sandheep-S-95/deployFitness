// Home.jsx
import { useEffect } from "react"
import { motion } from "framer-motion"
import {useTaskContext} from "../hooks/useTasksContext.jsx"
//components
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";
import Footer from "../components/Footer.jsx";

const Home = ()=>{
    const {tasks,dispatch}=useTaskContext()
    useEffect(() => {
        const fetchTasks = async () => {
            // Instead of calling the API, directly dispatch an empty array
            const emptyArray = [];
            dispatch({ type: 'SET_TASKS', payload: emptyArray });
        };
    
        fetchTasks();
    }, []);
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="home bg-gradient-to-r from-blue-900 via-blue-700 to-black min-h-screen relative"
        >
            <div className="container mx-auto px-4 lg:flex lg:space-x-6">
                {/* Tasks Column */}
                <div className="lg:w-2/3 space-y-4 pt-6">
                    {tasks && tasks.map((task, index) => (
                        <motion.div
                            key={task._id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1 
                            }}
                        >
                            <TaskDetails task={task}/>
                        </motion.div>
                    ))}
                </div>
                
                {/* Task Form Column */}
                <div className="lg:w-1/3 pt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <TaskForm/>
                    </motion.div>
                </div>
            </div>
            
            <Footer />
        </motion.div>
    )
}

export default Home