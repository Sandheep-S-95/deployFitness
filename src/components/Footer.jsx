import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black relative py-6">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.5)]" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <p className="text-blue-400 text-lg font-semibold">
          © 2024 Sandheep S. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;