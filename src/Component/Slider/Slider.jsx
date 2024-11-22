import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide content
  const slides = [
    'Slide 1 Content',
    'Slide 2 Content',
    'Slide 3 Content',
  ];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3000 ms (3 seconds)
    
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Slider container */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {/* Slide elements */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full flex justify-center items-center text-white text-xl bg-blue-500 transition-all duration-500 ${
              currentSlide === index ? 'scale-110' : 'scale-100'
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full bg-white opacity-60 cursor-pointer ${
              currentSlide === index ? 'opacity-100' : 'opacity-60'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
