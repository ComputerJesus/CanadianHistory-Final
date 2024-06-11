"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SimulatePage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResponses, setShowResponses] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: -190,
    },
  };

  const submenuVariants = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    visible: {
      opacity: 1,
      y: -510,
    },
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowResponses(false);
    setShowSubmenu(false);
  };

  const handleMoreClick = () => {
    setShowSubmenu(!showSubmenu);
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
            transition={{ duration: 0.6 }}
          >
            {/* Responses */}
            {["What if the First nations were diffrent?", "What if the First Settlers were diffrent ?", "What if someone else won the first world war."].map((response, index) => (
              <div key={index} className="p-2 hover:bg-gray-200 rounded-md cursor-pointer" onClick={() => handleOptionClick(response)}>
                {response}
              </div>
            ))}

            {/* More button */}
            <div className="p-2 hover:bg-gray-200 rounded-md cursor-pointer" onClick={handleMoreClick}>
              More...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submenu */}
      <AnimatePresence>
        {showSubmenu && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg p-4 mt-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={submenuVariants}
            transition={{ duration: 0.6 }}
          >
            {/* Submenu items */}
            <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">Submenu item 1</div>
            <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">Submenu item 2</div>
            <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">Submenu item 3</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text box */}
      {selectedOption && (
        <div className="mt-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder={`You selected: ${selectedOption}`}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
