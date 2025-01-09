import React, { useState } from "react";

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Recommended Cirkles"
  );

  const categories = [
    "Recommended Cirkles",
    "Most Popular Cirkles",
    "Most Recent Cirkles",
    "Family & Friends Cirkles",
    "Business & Work Cirkles",
    "Community & Social Cirkles",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative w-64 pl-1">
      <button
        onClick={toggleDropdown}
        className="w-full  rounded-md py-2 px-4 flex justify-between items-center text-[18px]"
      >
        <span>{selectedCategory}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(category)}
              className="py-2 px-4  hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesDropdown;
