import React from 'react';
import { motion } from 'framer-motion';
import workoutImage from '../assets/FitnessModel.jpg'; // Replace with your actual image path

import Footer from '../components/Footer';

const Community = () => {
  return (
    <div>
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Image Section with Scale Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mb-8 flex justify-center"
        >
          <img
            src={workoutImage}
            alt="Workout"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-100 object-cover w-1/2 h-auto"
          />
        </motion.div>

        {/* Text Section with Fade-In Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center p-6"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-400 via-red-800 to-blue-800 shadow-xl border border-purple-300">
            <h1 className="text-5xl font-extrabold mb-6 text-white tracking-wide 
              transition-transform duration-500 ease-in-out transform hover:scale-105">
              Build Tribe. Build Cult.
            </h1>
            <p className="text-lg leading-relaxed text-black-200 mb-6">
              Discover a variety of workouts tailored to your fitness level and goals. From strength training 
              to cardio, each session is designed to push your limits and deliver results. Stay motivated, 
              stay consistent, and achieve your best self.
            </p>
            <div className="flex space-x-4 justify-center">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg 
                hover:bg-purple-700 transition-colors duration-300 shadow-md">
                Explore Community
              </button>
              <button className="bg-gray-200 text-purple-900 px-6 py-3 rounded-lg 
                hover:bg-gray-300 transition-colors duration-300 shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
