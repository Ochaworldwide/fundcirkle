import React, { useState } from "react";
import { useModal } from "../Cirkles/ModalContext";
import LocationDropdown from "../Cirkles/LocationDropdown";
import CirkleCategoryModal from "./CirkleCategoryModal";
import ContributionAmountRangeModal from "../../Component/DiscoverModals/ContibutionAmountRangeModal";
import { filter } from "framer-motion/client";

const FilterModal = ({ setModal }) => {
  const { openModal } = useModal();

  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    range: [],
    locations:[]
  });

  const [categoryModal, setCategoryModal] = useState(false);

  const handleChange = (name, data) => {
    setFilterOptions({ ...filterOptions, [name]: data });
  };

  const handleClose = () => setModal((prev) => !prev);

  console.log(filterOptions)

  return (
    <>
      <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen">
        <div className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center pb-10 ">
            <h2 className="text-sm font-semibold">Filter Circles</h2>
            <button
              onClick={handleClose}
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
                <LocationDropdown
                  name="locations"
                  updateSelection={handleChange}
                />
                {/* <button className="flex-shrink-0 w-8 h-8 border flex items-center justify-center rounded-lg ">
                  +
                </button> */}
              </div>
            </div>

            {/* Circle Category */}
            <div className="flex items-center justify-between">
              <label className="text-[12px] font-medium mb-1">
                Circle Category
              </label>

              <div className="flex items-end space-x-1">
                <button
                  onClick={() => setCategoryModal(true)}
                  className="px-4 py-2 text-black border rounded-lg text-[12px] flex bg-[#F5F5F5]  "
                >
                  {filterOptions.categories.length
                    ? filterOptions.categories[0]?.name
                    : "Select"}
                  <img
                    src="/images/arrow-down-01.svg"
                    alt=""
                    srcset=""
                    className="ml-3"
                  />
                </button>

                {/* <button className="flex-shrink-0 w-8 h-8 border flex items-center justify-center rounded-lg ">
                  +
                </button> */}
              </div>
            </div>

            {/* Contribution Amount */}
            <div className="flex items-center justify-between">
              <label className="text-[12px] font-medium mb-1">
                Contribution Amount
              </label>
              <button
                onClick={() => openModal("contributionAmountRange")}
                className="px-4 py-2 border text-[10.5px] text-black bg-[#F5F5F5] rounded-lg flex items-center space-x-4"
              >
                <img
                  src="/images/currency.svg"
                  alt=""
                  srcset=""
                  className="h-5 "
                />

                <div>{filterOptions.range?.label || "Select"}</div>

                {/* <p>30K to 70K</p> */}

                <img src="/images/arrow-down-01.svg " alt="" srcset="" />
              </button>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
              Apply
            </button>
          </div>
        </div>
        <ContributionAmountRangeModal
          name="range"
          updateSelection={handleChange}
        />
        {categoryModal && (
          <CirkleCategoryModal
            name="categories"
            updateSelection={handleChange}
            closeModal={() => setCategoryModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default FilterModal;
