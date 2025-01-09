import React, { useState, useRef, useEffect } from "react";

const SimpleDropdown = ({ options, onSelect , optionHeading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(optionHeading);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle item selection
  const handleSelect = (value, id) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) {
      onSelect(value,id); // Trigger the callback function on selection
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-[50%] mb-2 mx-auto">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-1 px-2 rounded-md text-left flex justify-between items-center"
      >
        <span className="text-[10.5px]">{selectedValue}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              id={`option-${index + 1}`} // Unique ID
              onClick={() => handleSelect(option, index + 1)}
              className="px-1 py-2 hover:bg-gray-100 cursor-pointer text-center text-[10.5px]"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SimpleDropdown;
