import React, { useEffect, useState } from "react";
import axiosInstance from "../../service";

const LocationDropdown = ({
  name,
  updateSelection,
  preselectedLocations = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] =
    useState(preselectedLocations);
  const [locations, setLocations] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocationChange = (location) => {
    let updatedLocations;
    if (selectedLocations.includes(location)) {
      updatedLocations = selectedLocations.filter((item) => item !== location);
    } else if (selectedLocations.length < 3) {
      updatedLocations = [...selectedLocations, location];
    } else {
      return; // Prevent adding more than 3 locations
    }
    setSelectedLocations(updatedLocations);
  };

  const handleSave = () => {
    updateSelection(name, selectedLocations); // Send selected locations to parent
    setIsOpen(false); // Close the dropdown after saving
  };

  const handleCancel = () => {
    setSelectedLocations(preselectedLocations); // Reset to preselected locations
    setIsOpen(false); // Close the dropdown
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const countriesResponse = await axiosInstance.get("/get/countries");
        const countries = countriesResponse.data.data;

        const userResponse = await axiosInstance.get("/account");
        const userCountry = userResponse.data.data.country;

        const country = countries.find(
          (country) => country.name === userCountry
        );
        const countryId = country ? country.id : null;

        if (countryId) {
          const stateResponse = await axiosInstance.get(
            `/get/countries/${countryId}/states`
          );
          const stateData = stateResponse.data.data;
          setLocations(stateData);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="px-4 w-full flex justify-between py-2 text-sm text-gray-600 items-center space-x-2 rounded-md border"
      >
        States
        <img src="/images/arrow-down-01.svg" alt="Dropdown Arrow" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-10"
          onClick={() => setIsOpen(false)} // Optional: Close dropdown if background clicked
        >
          <div
            className="bg-white border border-gray-200 rounded-md shadow-lg w-80"
            onClick={(e) => e.stopPropagation()} // Prevent closing dropdown on inner click
          >
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

            {/* Locations List */}
            <ul className="max-h-40 overflow-y-auto p-4">
              {locations.map((location) => (
                <li key={location.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={location.id}
                    className="mr-2"
                    checked={selectedLocations.includes(location.name)}
                    onChange={() => handleLocationChange(location.name)}
                  />
                  <label htmlFor={location.id} className="text-gray-700">
                    {location.name}
                  </label>
                </li>
              ))}
            </ul>

            {/* Footer Buttons */}
            <div className="flex justify-between px-4 py-3 border-t border-gray-200">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Set Location
              </button>
              <button
                onClick={handleCancel}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;

