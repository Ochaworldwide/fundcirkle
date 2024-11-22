
import React, { useState } from "react";

const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [locations, setLocations] = useState([
    "Udaipur",
    "Agra",
    "Jaipur",
    "Pune",
    "Jaisalmer",
    "Bangalore",
    "Chennai",
  ]);
  const [newCity, setNewCity] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocationChange = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else if (selectedLocations.length < 3) {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

//   const addNewCity = () => {
//     if (newCity.trim() !== "" && !locations.includes(newCity)) {
//       setLocations([...locations, newCity]);
//       setNewCity("");
//     }
//   };

  return (
    <div className="relative w-[40%]">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="px-4 w-[100%] flex justify-between py-2 text-[10.5px] text-[#505050] rounded-md border focus:outline-none"
      >
        City, States
        <img src="/images/arrow-down-01.svg" alt="" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-[350px] z-10">
          {/* Header with Close Button */}
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-sm font-medium text-gray-600">
              You can set up to 3 locations
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* Search Input with Add New Button */}
          <div className="flex items-center justify-between px-2 mt-2">
            <div className="flex border rounded-md w-[60%]">
              <img src="/images/search-icon.svg" alt="" srcset="" />
              <input
                type="text"
                placeholder="Search City"
                // value={newCity}
                //   onChange={(e) => setNewCity(e.target.value)}
                className=" px-3 w-[80%] py-1  outline-none"
              />
            </div>

            <button
              //   onClick={addNewCity}
              className=" flex items-center w-[33%] pl-1 justify-between border text-black text-[12px] rounded-md  "
            >
              Add New City
              <img src="/images/add-01.svg" alt="" srcset="" className="h-7" />
            </button>
          </div>

          {/* Locations List */}
          <ul className="max-h-40 overflow-y-auto p-4">
            {locations.map((location, index) => (
              <li key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={location}
                  className="mr-2"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationChange(location)}
                />
                <label htmlFor={location} className="text-gray-700">
                  {location}
                </label>
              </li>
            ))}
          </ul>

          {/* Footer Buttons */}
          <div className="flex justify-between px-4 py-3 border-t border-gray-200">
            <button
              onClick={() => {
                setIsOpen(false);
                console.log("Selected Locations:", selectedLocations);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Set Location
            </button>

            <button
              onClick={() => setSelectedLocations([])}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
