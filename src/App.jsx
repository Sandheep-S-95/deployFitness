import { BrowserRouter , Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

import Home from "./pages/Home.jsx"
import Nutrition from './pages/Nutrition.jsx';
import Community from "./pages/Community.jsx";
import Workouts from "./pages/Workouts.jsx";
import FitnessPrograms from "./pages/Programs.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path='/community' element={<Community />}/>
            <Route path='/workouts' element={<Workouts />}/>
            <Route path='/programs' element={<FitnessPrograms />}/>
          </Routes>
        </div>
    </div>       
  )
}

export default App
