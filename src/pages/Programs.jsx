import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Medal, Target } from 'lucide-react';
import caliMan from '../assets/calisthenics.png';
import gym from '../assets/gym.png';
import chinaBuilder from '../assets/chineseBuilder.jpeg';

import Footer from '../components/Footer';

const FitnessPrograms = () => {
  const programs = [
    { 
      icon: <Dumbbell className="w-16 h-16 text-blue-500" />,
      emoji: '💪', 
      title: '12-Week Transformation', 
      description: 'Comprehensive program to reshape your body and boost metabolism.',
      longDescription: "Our scientifically designed 12-week program focuses on personalized fitness goals, combining strength training, cardio, and nutritional guidance to transform your physique. Each week builds upon the last, progressively challenging your body and breaking through plateau barriers. Our expert trainers provide personalized support, tracking your progress and adjusting strategies to ensure optimal results. We integrate advanced metabolic testing, nutrition counseling, and recovery techniques to maximize your body's potential.",
      additionalDetails: [
        'Personalized workout plans',
        'Nutrition and meal planning',
        'Weekly progress tracking',
        'Recovery and injury prevention strategies',
        'Small group and one-on-one coaching sessions'
      ],
      imageUrl: caliMan
    },
    { 
      icon: <Medal className="w-16 h-16 text-blue-500" />,
      emoji: '🏆', 
      title: 'Elite Athletic Development', 
      description: 'Advanced training for athletes seeking peak performance.',
      longDescription: 'Tailored for competitive athletes, this program integrates cutting-edge training techniques, sports psychology, and performance analytics to unlock your full potential. We utilize advanced biomechanical assessments, sport-specific conditioning, and data-driven training methodologies. Our multidisciplinary team includes strength coaches, nutritionists, and sports psychologists who collaborate to develop a holistic performance enhancement strategy.',
      additionalDetails: [
        'Advanced performance metrics',
        'Sport-specific training modules',
        'Psychological performance coaching',
        'Biomechanical analysis',
        'Recovery and regeneration protocols'
      ],
      imageUrl: gym
    },
    { 
      icon: <Target className="w-16 h-16 text-blue-500" />,
      emoji: '🎯', 
      title: 'Beginner Fitness Bootcamp', 
      description: 'Structured program to build fundamental strength and confidence.',
      longDescription: 'Perfect for fitness newcomers, our bootcamp provides a supportive environment with expert guidance, helping you establish a solid foundation for lifelong fitness. We break down complex movements into manageable steps, focusing on proper form, technique, and building confidence. Our program combines functional training, bodyweight exercises, and introductory strength training to help you develop a comprehensive understanding of fitness.',
      additionalDetails: [
        'Foundational movement workshops',
        'Beginner-friendly group classes',
        'Technique correction and guidance',
        'Motivational support system',
        'Nutritional education and basics'
      ],
      imageUrl: chinaBuilder
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto relative mb-16">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex items-center">
          <div className="flex-grow h-1 bg-blue-600 opacity-50 mr-4"></div>
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center text-blue-400 px-8 bg-black relative z-10"
          >
            Fitness Journey Programs
          </motion.h1>
          <div className="flex-grow h-1 bg-blue-600 opacity-50 ml-4"></div>
        </div>
      </div>

      {programs.map((program, index) => (
        <div key={program.title} className="container mx-auto mb-16 pb-8 border-b border-blue-800">
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={`flex flex-col md:flex-row items-center justify-center 
              ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
              gap-8 px-4`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={program.imageUrl} 
                alt={program.title} 
                className="w-80 h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {program.icon}
              </div>
              
              <h2 className="text-3xl font-bold text-blue-300 mb-4">
                {program.emoji} {program.title} {program.emoji}
              </h2>
              
              <p className="text-xl text-blue-200 mb-4">
                {program.description}
              </p>
              
              <p className="text-gray-400 mb-4">
                {program.longDescription}
              </p>

              <div className="text-blue-100">
                <h3 className="text-xl font-semibold mb-2">Program Highlights:</h3>
                <ul className="list-disc list-inside text-left">
                  {program.additionalDetails.map((detail, idx) => (
                    <li key={idx} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default FitnessPrograms;
