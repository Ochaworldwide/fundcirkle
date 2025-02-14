import React, { useState } from "react";
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


  return (
    <div className="py-6 px-1 ">
      <h1 className="text-[18px] font-semibold mb-4 ml-3">
        Manage Cirkle Payment
      </h1>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between  mb-6 pr-3 ml-3">
        <div className="flex gap-3 p-1 bg-[#4844731F] rounded-md">
          <button
            className={`px-4 py-1 rounded-lg text-[14px] ${
              selectedFilter === "All"
                ? "bg-white text-[#00943F] font-bold"
                : " text-[#0000004D]"
            }`}
            onClick={() => setSelectedFilter("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded-lg text-[14px] ${
              selectedFilter === "Admin"
                ? "bg-white text-[#00943F] font-bold"
                : " text-[#0000004D]"
            }`}
            onClick={() => setSelectedFilter("Admin")}
          >
            Admin
          </button>
          <button
            className={`px-4 py-1 rounded-lg text-[14px] ${
              selectedFilter === "Receiving Member"
                ? "bg-white text-[#00943F] font-bold"
                : " text-[#0000004D]"
            }`}
            onClick={() => setSelectedFilter("Receiving Member")}
          >
            Receiving Member
          </button>
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
        <ActivityTabs type={selectedFilter}/>
      </div>
    </div>
  );
};

export default ManagePaymentCirkle;
