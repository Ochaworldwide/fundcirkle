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
      className="p-4  mx-auto bg-white rounded-lg "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex mb-4 w-[95%] justify-between mx-auto">
        <div className="flex w-[80%] bg-gray-100 p-1 rounded-lg justify-between">
          <button
            className={` py-2 rounded-md text-xs w-[30%] ${
              activeTab === "myCirkles"
                ? "bg-white text-red-500 font-semibold shadow-md"
                : "text-red-400"
            }`}
            onClick={() => setActiveTab("myCirkles")}
          >
            My Cirkles
          </button>
          <button
            className={` py-2 rounded-md text-xs w-[30%] ${
              activeTab === "invites"
                ? "bg-white text-red-500 font-semibold shadow-md"
                : "text-red-400"
            }`}
            onClick={() => setActiveTab("invites")}
          >
            Invites
          </button>
          <button
            className={`py-2 rounded-md text-xs w-[30%] ${
              activeTab === "newCirkle"
                ? "bg-white text-red-500 font-semibold shadow-md"
                : "text-red-400"
            }`}
            onClick={() => setActiveTab("newCirkle")}
          >
            New Cirkle
          </button>
        </div>

        {/* Search Icon */}
        <button className="ml-auto p-2 rounded-full bg-white shadow-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="#141B34"
              stroke-opacity="0.5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="#141B34"
              stroke-opacity="0.5"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Content Area */}
      <div className=" ">{renderContent()}</div>
    </motion.div>
  );
};

export default CirkleCard;
