"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const FaqAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          {question}
        </h3>
        <span>
          {isOpen ? (
            <MinusIcon className="w-6 h-6 text-primary" />
          ) : (
            <PlusIcon className="w-6 h-6 text-gray-500" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-lg text-gray-600 dark:text-gray-400">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordion;
