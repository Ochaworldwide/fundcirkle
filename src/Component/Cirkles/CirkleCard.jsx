import React, { useState } from "react";
import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";
import MyCirkles from "./MyCirkles";
import Invites from "./Invites";
import NewCirkle from "../../Pages/Home/NewCirkle";

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
        return <Invites/>;
      case "newCirkle":
        return <NewCirkle />;
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
      <div className="flex mb-4 w-[95%]  mx-auto">
        <div className="flex w-[100%] bg-gray-100 p-1 rounded-lg justify-between ">
          <button
            className={` py-2 rounded-md text-[14px] w-[30%] ${
              activeTab === "myCirkles"
                ? "bg-white text-[#00943F] font-semibold shadow-md"
                : "text-[#0000004D]"
            }`}
            onClick={() => setActiveTab("myCirkles")}
          >
            My Cirkles
          </button>
          <button
            className={` py-2 rounded-md text-[14px] w-[30%] ${
              activeTab === "invites"
                ? "bg-white text-[#00943F] font-semibold shadow-md"
                : "text-[#0000004D]"
            }`}
            onClick={() => setActiveTab("invites")}
          >
            Invites
          </button>
          <button
            className={`py-2 rounded-md text-[14px] w-[30%] ${
              activeTab === "newCirkle"
                ? "bg-white text-[#00943F] font-semibold shadow-md"
                : "text-[#0000004D]"
            }`}
            onClick={() => setActiveTab("newCirkle")}
          >
            New Cirkle
          </button>
        </div>

        
      </div>

      {/* Content Area */}
      <div className="h-[400px] overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar ">
        {renderContent()}
      </div>
    </motion.div>
  );
};

export default CirkleCard;
