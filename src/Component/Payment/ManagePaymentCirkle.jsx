import React, { useEffect, useRef, useState } from "react";
import All from "./All";
import AllPayment from "./All";
import Admin from "./Admin";
import ReceivingMember from "./RecievingMember";
import { useModal } from "../Cirkles/ModalContext";
import PaymentFilterModal from "./PaymentFilterModal";
import ActivityTabs from "./ActivityTabs";


const ManagePaymentCirkle = () => {


  const { isModalOpen, modalType, closeModal, openModal } = useModal();
    
  const [selectedFilter, setSelectedFilter] = useState("All");
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const buttonRefs = {
      All: useRef(null),
      Admin: useRef(null),
      "Receiving Member": useRef(null),
    };

useEffect(() => {
  const updateIndicator = () => {
    const currentBtn = buttonRefs[selectedFilter].current;
    if (currentBtn) {
      const { offsetLeft, offsetWidth } = currentBtn;
      setIndicatorStyle({
        left: offsetLeft - 4,
        width: offsetWidth + 8,
      });
    }
  };

  updateIndicator(); // Initial position
  window.addEventListener("resize", updateIndicator); // Recalculate on resize

  return () => {
    window.removeEventListener("resize", updateIndicator); // Cleanup
  };
}, [selectedFilter]);



  return (
    <div className="py-6 px-1 ">
      <h1 className="text-[18px] font-semibold mb-4 ml-3">
        Manage Cirkle Payment
      </h1>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between  mb-6 pr-3 ml-3">
        {/* <div className="flex gap-3 p-1 bg-[#4844731F] rounded-md lg:w-[85%] lg:justify-around">
          <button
            className={`px-4 py-1 rounded-lg text-[14px] lg:py-3 lg:w-[30%] ${
              selectedFilter === "All"
                ? "bg-white text-[#00943F] font-bold"
                : " text-[#0000004D]"
            }`}
            onClick={() => setSelectedFilter("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded-lg text-[14px] lg:py-3 lg:w-[30%] ${
              selectedFilter === "Admin"
                ? "bg-white text-[#00943F] font-bold"
                : " text-[#0000004D]"
            }`}
            onClick={() => setSelectedFilter("Admin")}
          >
            Admin
          </button>
          <button
            className={`px-4 py-1 rounded-lg text-[14px] lg:py-3 lg:w-[30%] ${
              selectedFilter === "Receiving Member"
                ? "bg-white text-[#00943F] font-bold"
                : " text-[#0000004D]"
            }`}
            onClick={() => setSelectedFilter("Receiving Member")}
          >
            Receiving Member
          </button>
        </div> */}

        <div className="relative flex gap-3 p-1 bg-[#4844731F] rounded-md lg:w-[85%] lg:justify-around">
          {/* Animated Sliding Indicator */}
          <div
            className="absolute top-1 bottom-1 bg-white rounded-lg z-0 transition-all  ease-in-out"
            style={indicatorStyle}
          />

          {["All", "Admin", "Receiving Member"].map((label) => (
            <button
              key={label}
              ref={buttonRefs[label]}
              className={`relative z-10 px-4 py-1 rounded-lg text-[14px] lg:py-3 lg:w-[30%] transition-colors duration-200 ${
                selectedFilter === label
                  ? "text-[#00943F] font-bold"
                  : "text-[#0000004D]"
              }`}
              onClick={() => setSelectedFilter(label)}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Filter icon */}
        <img
          src="/images/payment-filter.svg"
          alt=""
          srcset=""
          onClick={() => openModal("payment filter")}
        />

        <PaymentFilterModal />
      </div>

      {/* Render Content Based on Selected Filter */}
      <div>
        <ActivityTabs type={selectedFilter} />
      </div>
    </div>
  );
};

export default ManagePaymentCirkle;
