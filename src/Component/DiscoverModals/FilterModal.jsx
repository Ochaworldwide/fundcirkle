// import React from "react";
// import { useModal } from "../Cirkles/ModalContext";
// import LocationDropdown from "../Cirkles/LocationDropdown";
// import CirkleCategoryModal from "./CirkleCategoryModal";


// const FilterModal = () => {
//   const { isModalOpen, modalType, closeModal } = useModal();

//   if (!isModalOpen || modalType !== "filter") {
//     return null;
//   }

  

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen">
//       <div className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg">
//         {/* Modal Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Filter Circles</h2>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Filter Options */}
//         <div className="space-y-4">
//           {/* Preferred Location */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <label className=" text-[12px] font-medium mb-1">
//                 Preferred Location
//               </label>
//             </div>

//             <div className="flex space-x-1 ">
//               <LocationDropdown className="" />

//               <button className="flex-shrink-0 w-8 h-8 bg-gray-200 flex items-center justify-center rounded-lg hover:bg-gray-300">
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Circle Category */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <label className=" text-[12px] font-medium mb-1">
//                 Circle Category
//               </label>
//             </div>

//             {/* Button to open CirkleCategoryModal */}
//             <button
//               onClick={() => openModal("cirkleCategory")}
//               className="px-4 py-2 bg-green-500 text-white rounded-lg"
//             >
//               Open Circle Category Modal
//             </button>

//             {/* Modals */}
//             <CirkleCategoryModal />
//           </div>

//           {/* Contribution Amount */}
//           <div className="flex items-center space-x-2">
//             <div className="flex-grow">
//               <label className="block text-sm font-medium mb-1">
//                 Contribution Amount
//               </label>
//               <div className="relative">
//                 <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
//                   <option>₹ 30K to 70K</option>
//                   <option>₹ 70K to 1L</option>
//                   <option>₹ 1L+</option>
//                 </select>
//                 <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                   ⌄
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-end mt-6 space-x-4">
//           <button
//             onClick={closeModal}
//             className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
//             Apply
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterModal;





import React from "react";
import { useModal } from "../Cirkles/ModalContext";
import LocationDropdown from "../Cirkles/LocationDropdown";

const FilterModal = () => {
  const { isModalOpen, modalType, closeModal, openModal } = useModal();

  if (!isModalOpen || modalType !== "filter") {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen">
      <div className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-10 ">
          <h2 className="text-sm font-semibold">Filter Circles</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Filter Options */}
        <div className="space-y-4">
          {/* Preferred Location */}
          <div className="flex items-center justify-between">
            <label className="text-[12px] font-medium mb-1">
              Preferred Location
            </label>
            <div className="flex space-x-1">
              <LocationDropdown />
              <button className="flex-shrink-0 w-8 h-8 border flex items-center justify-center rounded-lg ">
                +
              </button>
            </div>
          </div>

          {/* Circle Category */}
          <div className="flex items-center justify-between">
            <label className="text-[12px] font-medium mb-1">
              Circle Category
            </label>

            <div className="flex items-end space-x-1">
              <button
                onClick={() => openModal("cirkleCategory")}
                className="px-4 py-2 text-black border rounded-lg text-[12px] flex bg-[#F5F5F5]  "
              >
                Personal
                <img
                  src="/images/arrow-down-01.svg"
                  alt=""
                  srcset=""
                  className="ml-3"
                />
              </button>

              <button className="flex-shrink-0 w-8 h-8 border flex items-center justify-center rounded-lg ">
                +
              </button>
            </div>
          </div>

          {/* Contribution Amount */}
          <div className="flex items-center justify-between">
            <label className="text-[12px] font-medium mb-1">
              Contribution Amount
            </label>
            <button
              onClick={() => openModal("contributionAmountRange")}
              className="px-4 py-2 border text-[10.5px] text-black bg-[#F5F5F5] rounded-lg flex items-center space-x-3"
            >
              <img src="/images/currency.svg" alt="" srcset="" className="h-5"/>
              <p>
                30K to 70K
              </p>
              

              <img src="/images/arrow-down-01.svg " alt="" srcset="" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
