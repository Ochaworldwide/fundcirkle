import React, { useEffect, useRef, useState } from "react";
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

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const buttonRefs = {
    myCirkles: useRef(null),
    invites: useRef(null),
    newCirkle: useRef(null),
  };

  useEffect(() => {
    const updateIndicator = () => {
      const currentBtn = buttonRefs[activeTab].current;
      if (currentBtn) {
        const { offsetLeft, offsetWidth } = currentBtn;
        setIndicatorStyle({
          left: offsetLeft - 4,
          width: offsetWidth + 8,
        });
      }
    };

    updateIndicator(); // Initial set
    window.addEventListener("resize", updateIndicator); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", updateIndicator); // Cleanup
    };
  }, [activeTab]);


  return (
    <motion.div
      className="p-4  mx-auto bg-white rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex mb-4 w-[95%]  mx-auto">
        {/* <div className="flex w-[100%] bg-gray-100 p-1 rounded-lg justify-between ">
          <button
            className={` py-2 rounded-md text-[14px] w-[30%] ${
              activeTab === "myCirkles"
                ? "bg-white text-[#00943F] text-[14px] font-bold shadow-md"
                : "text-[#0000004D]"
            }`}
            onClick={() => setActiveTab("myCirkles")}
          >
            My Cirkles
          </button>
          <button
            className={` py-2 rounded-md text-[14px] w-[30%] ${
              activeTab === "invites"
                ? "bg-white text-[#00943F] font-bold  shadow-md"
                : "text-[#0000004D]"
            }`}
            onClick={() => setActiveTab("invites")}
          >
            Invites
          </button>
          <button
            className={`py-2 rounded-md text-[14px] w-[30%] ${
              activeTab === "newCirkle"
                ? "bg-white text-[#00943F] font-bold  shadow-md"
                : "text-[#0000004D]"
            }`}
            onClick={() => setActiveTab("newCirkle")}
          >
            New Cirkle
          </button>
        </div> */}

        <div className="relative flex w-full bg-gray-100 p-1 rounded-lg justify-between">
          {/* Sliding Indicator */}
          <div
            className="absolute top-1 bottom-1 bg-white rounded-md z-0 shadow-md transition-all duration-300 ease-in-out"
            style={indicatorStyle}
          />

          {[
            { key: "myCirkles", label: "My Cirkles" },
            { key: "invites", label: "Invites" },
            { key: "newCirkle", label: "New Cirkle" },
          ].map(({ key, label }) => (
            <button
              key={key}
              ref={buttonRefs[key]}
              className={`relative z-0 py-2 rounded-md text-base w-[30%] transition-colors duration-200 ${
                activeTab === key
                  ? "text-[#00943F] font-bold"
                  : "text-[#0000009a]"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
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
