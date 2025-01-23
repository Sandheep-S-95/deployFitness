import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Trophy } from 'lucide-react';

import Footer from '../components/Footer';

const FitnessPrograms = () => {
  const programs = [
    { 
      icon: <Clock className="w-12 h-12 text-blue-500" />, 
      title: '12-Week Transformation', 
      description: 'Comprehensive program designed to reshape your body and boost overall fitness.' 
    },
    { 
      icon: <Star className="w-12 h-12 text-blue-500" />, 
      title: 'Elite Athletic Development', 
      description: 'Advanced training for athletes seeking peak performance and competitive edge.' 
    },
    { 
      icon: <Trophy className="w-12 h-12 text-blue-500" />, 
      title: 'Beginner Fitness Bootcamp', 
      description: 'Structured program for newcomers to build fundamental strength and confidence.' 
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
          Fitness Programs
        </motion.h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl border border-blue-800 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                {program.icon}
              </div>
              <h2 className="text-2xl font-semibold text-center text-blue-300 mb-4">
                {program.title}
              </h2>
              <p className="text-gray-400 text-center">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div></div>
    </motion.div>
    <Footer />
    </div>
  );
};

export default FitnessPrograms;