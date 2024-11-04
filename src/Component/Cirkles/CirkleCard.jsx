import React, { useState } from "react";
import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";
import MyCirkles from "./MyCirkles";

const CirkleCard = ({ tabs, header,  dates, members }) => {
  // Contribution & Payment Info
  const contribution = {
    amount: "60K",
    currencySymbol: "₹",
    paymentStatus: {
      completed: 5,
      total: 7,
    },
  };

  

  const [activeTab, setActiveTab] = useState("myCirkles");

  const renderContent = () => {
    switch (activeTab) {
      case "myCirkles":
        return <MyCirkles />;
      case "invites":
        return <div>Invites Content</div>;
      case "newCirkle":
        return <div>New Cirkle Content</div>;
      default:
        return null;
    }
  };


  return (
    <motion.div
      className="p-4  mx-auto bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex  bg-gray-100 rounded-lg p-2 mb-4 w-[100%]">
        <button
          className={` py-2 rounded-md text-xs w-[25%] ${
            activeTab === "myCirkles"
              ? "bg-white text-red-500 font-semibold shadow-md"
              : "text-red-400"
          }`}
          onClick={() => setActiveTab("myCirkles")}
        >
          My Cirkles
        </button>
        <button
          className={` py-2 rounded-md text-xs w-[25%] ${
            activeTab === "invites"
              ? "bg-white text-red-500 font-semibold shadow-md"
              : "text-red-400"
          }`}
          onClick={() => setActiveTab("invites")}
        >
          Invites
        </button>
        <button
          className={`py-2 rounded-md text-xs w-[25%] ${
            activeTab === "newCirkle"
              ? "bg-white text-red-500 font-semibold shadow-md"
              : "text-red-400"
          }`}
          onClick={() => setActiveTab("newCirkle")}
        >
          New Cirkle
        </button>
        {/* Search Icon */}
        <button className="ml-auto p-2 rounded-full bg-white shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l7 7"
            />
          </svg>
        </button>
      </div>

      {/* Content Area */}
      <div className=" ">
        {renderContent()}
      </div>

    </motion.div>
  );
};

export default CirkleCard;
