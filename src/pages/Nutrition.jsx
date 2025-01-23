import React from 'react';
import { motion } from 'framer-motion';
import bodyBuilderImage from '../assets/leftSideBodyBuilder.jpg';

import Footer from '../components/Footer';

const Nutrition = () => {
  return (
    <div>
    <div className="bg-black text-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section with Left to Right Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 w-full mb-6 md:mb-0 md:mr-6"
        >
          <img
            src={bodyBuilderImage}
            alt="Fitness Model"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 object-cover w-full h-96"
          />
        </motion.div>

        {/* Text Section with Right to Left Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 w-full text-center md:text-left p-4"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-200 to-blue-900 shadow-xl border border-blue-200">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-light-900 tracking-tight 
              transition-transform duration-500 ease-in-out transform hover:scale-105">
              Nutrition for Peak Performance
            </h1>
            <p className="text-xl leading-relaxed text-gray-800 mb-6">
              Achieving fitness excellence requires a holistic approach to nutrition. A strategic diet 
              provides the essential fuel for muscle growth, recovery, and sustained energy. By balancing 
              macronutrients and micronutrients, you optimize your body's potential, transforming workouts 
              from routine to remarkable.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg 
                hover:bg-blue-700 transition-colors duration-300 shadow-md">
                Nutrition Plans
              </button>
              <button className="bg-gray-200 text-blue-900 px-6 py-3 rounded-lg 
                hover:bg-gray-300 transition-colors duration-300 shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Nutrition;