import React, { useState } from "react";

function MultiSelect({ options, onSelectionChange }) {
  const [selectedId, setSelectedId] = useState(null); // Only one selected ID

  const handleSelect = (option) => {
    const updatedSelection = selectedId === option.id ? null : option.id; // Toggle selection

    setSelectedId(updatedSelection);
    onSelectionChange(updatedSelection ? [option] : []); // Pass the selected option or an empty array
  };

  return (
    <ul>
      {options.map((option) => (
        <li
          key={option.id}
          className="p-4 border hover:bg-gray-100 cursor-pointer flex"
          onClick={() => handleSelect(option)}
        >
          <input
            type="checkbox"
            checked={selectedId === option.id} // Only one can be checked
            readOnly
            className="mr-3 accent-green-500"
          />
          {option.name}
        </li>
      ))}
    </ul>
  );
}

export default MultiSelect;


