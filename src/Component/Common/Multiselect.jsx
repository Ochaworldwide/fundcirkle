import React, { useState } from "react";

function MultiSelect({ options, onSelectionChange }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (option) => {
    const updatedSelection = !!selectedIds.find((s) => s.id == option.id)
      ? selectedIds.filter((selected) => selected.id !== option.id)
      : [...selectedIds, option];

    setSelectedIds(updatedSelection);
    onSelectionChange(updatedSelection);
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
            checked={!!selectedIds.find((s) => s.id == option.id)}
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