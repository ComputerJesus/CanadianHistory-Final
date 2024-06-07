'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SimulatePage() {
  const [showResponses, setShowResponses] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 0 // Adjust this value if you want the menu to start from a different position
    },
    visible: {
      opacity: 1,
      y: -150
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 p-4">
      {/* Chat button */}
      <button
        className="w-1/2 mx-auto focus:outline-none transition duration-300 ease-in-out bg-gray-400 hover:bg-gray-600 active:bg-gray-700 p-2 text-white rounded-md flex items-center justify-center"
        onClick={() => setShowResponses(!showResponses)}
      >
           What if...   
      </button>

      {/* Animated menu */}
      <AnimatePresence>
        {showResponses && (
          <motion.div
            className="absolute top-0 left-0 right-0 bg-white shadow-lg rounded-lg p-4 mt-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.6 }} // You can adjust the duration for the speed of the animation
          >
            {/* Responses */}
            {["Hello, how can I help you?", "What are you interested in learning about Canadian history?", "Feel free to ask any questions you have."].map((response, index) => (
              <div key={index} className="p-2 hover:bg-gray-2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  00 rounded-md cursor-pointer">
                {response}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}