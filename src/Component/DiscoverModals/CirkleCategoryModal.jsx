import React from "react";
import { useModal } from "../Cirkles/ModalContext";

const CirkleCategoryModal = () => {
  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "cirkleCategory") {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen">
      <div className="bg-white w-11/12 md:w-1/3 py-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 w-[90%] mx-auto">
          <h2 className="text-xl font-semibold">Select Circle Category</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div
            className="p-4 border  hover:bg-gray-100 cursor-pointer flex"
            onClick={() => {
              console.log("Selected: Personal");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500"
            />
            Personal (Includes Family and Friends)
          </div>
          <div
            className="p-4 border  hover:bg-gray-100 cursor-pointer flex"
            onClick={() => {
              console.log("Selected: Business");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500"
            />
            Business and Work (Includes Colleagues and Partners)
          </div>

          <div
            className="p-4 border  hover:bg-gray-100 cursor-pointer flex "
            onClick={() => {
              console.log("Selected: Community");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500"
            />
            Community (Includes Neighbors and local acquaintances)
          </div>

          <div
            className="p-4 border g hover:bg-gray-100 cursor-pointer flex "
            onClick={() => {
              console.log("Selected: Social");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500 "
            />
            Social (Includes common interest groups, and welfare associations)
          </div>

          {/* buttons */}
          <div className="flex  ml-auto w-[60%] justify-between px-1">
            <button
              className="bg-[#00943F] py-2 px-4 rounded-md text-white"
              onClick={() => {
                closeModal();
              }}
            >
              Set Category
            </button>

            <button
              className=" border py-2 px-4 rounded-md"
              onClick={() => {
                closeModal();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CirkleCategoryModal;
