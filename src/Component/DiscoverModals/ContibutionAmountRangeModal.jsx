import React from "react";
import { useModal } from "../Cirkles/ModalContext";

const ContributionAmountRangeModal = () => {
  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "contributionAmountRange") {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 md:w-1/3 py-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4 w-[90%] mx-auto">
          <h2 className="text-xl font-semibold">Select Contribution Amount</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Contribution Amount Ranges */}
        <div className="space-y-2 text-sm">
          <div
            className="p-4 border  hover:bg-gray-100 cursor-pointer flex"
            onClick={() => {
              console.log("Selected: Below 5000");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500"
            />
            Below 5000
          </div>
          <div
            className="p-4 border  hover:bg-gray-100 cursor-pointer flex"
            onClick={() => {
              console.log("Selected: 5000 to 50000");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500"
            />
            5000 to 50000
          </div>

          <div
            className="p-4 border  hover:bg-gray-100 cursor-pointer flex "
            onClick={() => {
              console.log("Selected: 50000 to 100000");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500"
            />
            50000 to 100000
          </div>

          <div
            className="p-4 border g hover:bg-gray-100 cursor-pointer flex "
            onClick={() => {
              console.log("Selected: 100000 to 250000");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500 "
            />
            100000 to 250000
          </div>

          <div
            className="p-4 border g hover:bg-gray-100 cursor-pointer flex "
            onClick={() => {
              console.log("Selected: 250000 to 500000");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500 "
            />
            250000 to 500000
          </div>

          <div
            className="p-4 border g hover:bg-gray-100 cursor-pointer flex "
            onClick={() => {
              console.log("Selected: 500000 to 1000000");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500 "
            />
            500000 to 1000000
          </div>

          <div
            className="p-4 border g hover:bg-gray-100 cursor-pointer flex "
            onClick={() => {
              console.log("Selected: Above 1000000");
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-3 accent-green-500 "
            />
            Above 1000000
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

export default ContributionAmountRangeModal;
