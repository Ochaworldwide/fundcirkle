"use client";

import { useState, useEffect } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ImageCarousel = ({ images, interval = 9000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto w-[280px] bg-gray-800 rounded-[40px] p-2 shadow-2xl">
      <div className="w-24 h-4 bg-gray-800 absolute top-2 left-1/2 -translate-x-1/2 rounded-b-lg z-10"></div>
      <div className="relative w-full h-[608px] bg-black rounded-[30px] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Feature showcase ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center space-x-2 py-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
