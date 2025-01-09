
// import { div } from "framer-motion/client";
// import React, { useState } from "react";

// const LocationDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLocations, setSelectedLocations] = useState([]);
//   const [locations, setLocations] = useState([
//     "Udaipur",
//     "Agra",
//     "Jaipur",
//     "Pune",
//     "Jaisalmer",
//     "Bangalore",
//     "Chennai",
//   ]);
//   const [newCity, setNewCity] = useState("");

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleLocationChange = (location) => {
//     if (selectedLocations.includes(location)) {
//       setSelectedLocations(
//         selectedLocations.filter((item) => item !== location)
//       );
//     } else if (selectedLocations.length < 3) {
//       setSelectedLocations([...selectedLocations, location]);
//     }
//   };

//   return (

//     <div className="">
//       <div className=" w-[100%]">
//       {/* Trigger Button */}
//       <button
//         onClick={toggleDropdown}
//         className="px-4 w-[100%] flex justify-between py-2 text-[10.5px] text-[#505050] rounded-md border e"
//       >
//         States
//         <img src="/images/arrow-down-01.svg" alt="" />
//       </button>

//       {/* Dropdown */}
//       {isOpen && (
//         <div
//           className="absolute top-1/2 left-1/2 bg-white border border-gray-200 rounded-md shadow-lg w-[350px] z-10 transform -translate-x-1/2 -translate-y-1/2
// "
//         >
//           {/* Header with Close Button */}
//           <div className="p-4 flex justify-between items-center border-b border-gray-200">
//             <h2 className="text-sm font-medium text-gray-600">
//               You can set up to 3 locations
//             </h2>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Search Input with Add New Button */}
//           <div className="flex items-center justify-between px-2 mt-2">
//             <div className="flex border rounded-md w-[60%]">
//               <img src="/images/search-icon.svg" alt="" srcset="" />
//               <input
//                 type="text"
//                 placeholder="Search City"
//                 // value={newCity}
//                 //   onChange={(e) => setNewCity(e.target.value)}
//                 className=" px-3 w-[80%] py-1  outline-none"
//               />
//             </div>

//             <button
//               //   onClick={addNewCity}
//               className=" flex items-center w-[33%] pl-1 justify-between border text-black text-[12px] rounded-md  "
//             >
//               Add New City
//               <img src="/images/add-01.svg" alt="" srcset="" className="h-7" />
//             </button>
//           </div>

//           {/* Locations List */}
//           <ul className="max-h-40 overflow-y-auto p-4">
//             {locations.map((location, index) => (
//               <li key={index} className="flex items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id={location}
//                   className="mr-2"
//                   checked={selectedLocations.includes(location)}
//                   onChange={() => handleLocationChange(location)}
//                 />
//                 <label htmlFor={location} className="text-gray-700">
//                   {location}
//                 </label>
//               </li>
//             ))}
//           </ul>

//           {/* Footer Buttons */}
//           <div className="flex justify-between px-4 py-3 border-t border-gray-200">
//             <button
//               onClick={() => {
//                 setIsOpen(false);
//                 // console.log("Selected Locations:", selectedLocations);
//               }}
//               className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//             >
//               Set Location
//             </button>

//             <button
//               onClick={() => setSelectedLocations([])}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
    
//   );
// };

// export default LocationDropdown;




// import { div } from "framer-motion/client";
// import React, { useState } from "react";

// const LocationDropdown = ({ name, updateSelection }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLocations, setSelectedLocations] = useState([]);
//   const [locations, setLocations] = useState([
//     "Udaipur",
//     "Agra",
//     "Jaipur",
//     "Pune",
//     "Jaisalmer",
//     "Bangalore",
//     "Chennai",
//   ]);
//   const [newCity, setNewCity] = useState("");

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleLocationChange = (locations) => {
//     let updatedLocations;
//     if (selectedLocations.includes(locations)) {
//       updatedLocations = selectedLocations.filter((item) => item !== locations);
//     } else if (selectedLocations.length < 3) {
//       updatedLocations = [...selectedLocations, locations];
//     } else {
//       return; // Prevent adding more than 3 locations
//     }
//     setSelectedLocations(updatedLocations);
//     if (handleSave) {
//       handleSave(updatedLocations);
//     }
//   };

//   const handleSave = () => {
//     updateSelection(name, selectedLocations);
    
//   };

//   return (
//     <div className="">
//       <div className="w-[100%]">
//         {/* Trigger Button */}
//         <button
//           onClick={toggleDropdown}
//           className="px-4 w-[100%] flex justify-between py-2 text-[10.5px] text-[#505050] rounded-md border"
//         >
//           States
//           <img src="/images/arrow-down-01.svg" alt="" />
//         </button>

//         {/* Dropdown */}
//         {isOpen && (
//           <div className="absolute top-1/2 left-1/2 bg-white border border-gray-200 rounded-md shadow-lg w-[350px] z-10 transform -translate-x-1/2 -translate-y-1/2">
//             {/* Header with Close Button */}
//             <div className="p-4 flex justify-between items-center border-b border-gray-200">
//               <h2 className="text-sm font-medium text-gray-600">
//                 You can set up to 3 locations
//               </h2>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Search Input with Add New Button */}
//             <div className="flex items-center justify-between px-2 mt-2">
//               <div className="flex border rounded-md w-[60%]">
//                 <img src="/images/search-icon.svg" alt="" />
//                 <input
//                   type="text"
//                   placeholder="Search City"
//                   className="px-3 w-[80%] py-1 outline-none"
//                 />
//               </div>

//               <button className="flex items-center w-[33%] pl-1 justify-between border text-black text-[12px] rounded-md">
//                 Add New City
//                 <img src="/images/add-01.svg" alt="" className="h-7" />
//               </button>
//             </div>

//             {/* Locations List */}
//             <ul className="max-h-40 overflow-y-auto p-4">
//               {locations.map((locations, index) => (
//                 <li key={index} className="flex items-center mb-2">
//                   <input
//                     type="checkbox"
//                     id={locations}
//                     className="mr-2"
//                     checked={selectedLocations.includes(locations)}
//                     onChange={() => handleLocationChange(locations)}
//                   />
//                   <label htmlFor={locations} className="text-gray-700">
//                     {locations}
//                   </label>
//                 </li>
//               ))}
//             </ul>

//             {/* Footer Buttons */}
//             <div className="flex justify-between px-4 py-3 border-t border-gray-200">
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
                  
//                 }}
//                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//               >
//                 Set Location
//               </button>

//               <button
//                 onClick={() => {
//                   setSelectedLocations([]);
//                   // if (handleSave) {
//                   //   handleSave([]);
//                   // }
//                 }}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LocationDropdown;







import React, { useState } from "react";

const LocationDropdown = ({ name, updateSelection }) => {
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
    setSelectedLocations([]); // Clear selected locations
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="">
      <div className="w-full">
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
          <div className="absolute top-1/2 left-1/2 bg-white border border-gray-200 rounded-md shadow-lg w-80 z-10 transform -translate-x-1/2 -translate-y-1/2">
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
        )}
      </div>
    </div>
  );
};

export default LocationDropdown;
