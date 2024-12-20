import React, { useState } from "react";
import { useModal } from "../Cirkles/ModalContext";

const priceRanges = [
  { label: "Below 5000", min: 0, max: 4999 },
  { label: "5000 to 50000", min: 5000, max: 50000 },
  { label: "50000 to 100000", min: 50001, max: 100000 },
  { label: "100000 to 250000", min: 100001, max: 250000 },
  { label: "250000 to 500000", min: 250001, max: 500000 },
  { label: "500000 to 1000000", min: 500001, max: 1000000 },
  { label: "Above 1000000", min: 1000001, max: Infinity },
];

const ContributionAmountRangeModal = ({ updateSelection, name }) => {
  const { isModalOpen, modalType, closeModal, openModal } = useModal();
  const [selectedRange, setSelectedRange] = useState([]);
  const handleSelection = (range) => {
    setSelectedRange(range);
    // setSelectedRanges(
      // (prev) => prev.filter((r) => r !== range)
      // prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    // );
  };

  const handleSave = () => {
    updateSelection(name, selectedRange);
    closeModal();
  };

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
            // onClick={closeModal}
            onClick={() => openModal("filter")}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Contribution Amount Ranges */}
        <div className="space-y-2 text-sm">
          <div>
            {priceRanges.map((range, index) => (
              <div
                key={index}
                className="p-4 border hover:bg-gray-100 cursor-pointer flex"
                onClick={() => handleSelection(range)}
              >
                <input
                  type="checkbox"
                  checked={selectedRange == range}
                  onChange={() => handleSelection(range)}
                  className="mr-3 accent-green-500"
                />
                {range.label}
              </div>
            ))}
          </div>

          {/* buttons */}
          <div className="flex  ml-auto w-[60%] justify-between px-1">
            <button
              className="bg-[#00943F] py-2 px-4 rounded-md text-white"
              onClick={handleSave}
            >
              Set Range
            </button>

            <button
              className=" border py-2 px-4 rounded-md"
              onClick={() => openModal("filter")}
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
