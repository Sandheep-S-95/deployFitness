import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Target, Zap } from 'lucide-react';

import Footer from '../components/Footer';

const Workouts = () => {
  const workoutTypes = [
    { 
      icon: <Dumbbell className="w-12 h-12 text-blue-500" />, 
      title: 'Strength Training', 
      description: 'Build muscle, increase strength, and boost metabolism through targeted resistance exercises.' 
    },
    { 
      icon: <Target className="w-12 h-12 text-blue-500" />, 
      title: 'HIIT Workouts', 
      description: 'High-Intensity Interval Training for maximum fat burn and cardiovascular conditioning.' 
    },
    { 
      icon: <Zap className="w-12 h-12 text-blue-500" />, 
      title: 'Endurance Training', 
      description: 'Improve stamina, cardiovascular health, and overall athletic performance.' 
    }
  ];

  return (
    <div>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white min-h-screen py-16 px-4"
    >
      <div className="container mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-12 text-blue-400"
        >
          Workout Programs
        </motion.h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {workoutTypes.map((workout, index) => (
            <motion.div
              key={workout.title}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl border border-blue-800 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                {workout.icon}
              </div>
              <h2 className="text-2xl font-semibold text-center text-blue-300 mb-4">
                {workout.title}
              </h2>
              <p className="text-gray-400 text-center">
                {workout.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    <Footer />
    </div>
  );
};

export default Workouts;