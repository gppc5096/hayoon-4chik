import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl md:text-xl text-lg font-bold text-purple-600">
            서현이의 수학모험
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.p
              className="text-2xl font-bold text-purple-800 font-gaegu"
              animate={{ 
                scale: [1, 1.05, 1],
                color: ['#6b21a8', '#7e22ce', '#6b21a8']
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              
            </motion.p>
          </motion.div>
          <div className="flex space-x-4">
            <Link to="/garden" className="text-gray-600 hover:text-purple-600">
              수학성적표 📊
            </Link>
            <Link to="/study" className="text-gray-600 hover:text-purple-600">
              학습하기 ✏️
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 