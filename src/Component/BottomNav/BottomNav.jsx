import React, { useState } from "react";

const BottomNav = ({ content }) => {
  const [activeTab, setActiveTab] = useState("My Cirkles");

  const renderContent = () => {
    return content[activeTab] || null;
  };

  return (
    <div className="flex flex-col items-center  h-screen">
      <div className="w-full ">{renderContent()}</div>

      <div className="w-full  flex justify-around bg-white shadow-lg py-2 fixed bottom-0">
        <button
          onClick={() => setActiveTab("My Cirkles")}
          className={`flex flex-col items-center ${
            activeTab === "My Cirkles" ? "text-[#00943F]" : "text-gray-500"
          }`}
        >
          <div className="w-6 h-6 mb-1">
            {/* Replace with your icon */}
            <span className="rounded-full border border-[#00943F] w-6 h-6 flex items-center justify-center">
              O
            </span>
          </div>
          <span className="text-xs">My Cirkles</span>
        </button>

        <button
          onClick={() => setActiveTab("Discover")}
          className={`flex flex-col items-center ${
            activeTab === "Discover" ? "text-[#00943F]" : "text-gray-500"
          }`}
        >
          <div className="w-6 h-6 mb-1">
            {/* Replace with your icon */}
            <span className="rounded-full border border-gray-500 w-6 h-6 flex items-center justify-center">
              D
            </span>
          </div>
          <span className="text-xs">Discover</span>
        </button>

        <button
          onClick={() => setActiveTab("Payments")}
          className={`flex flex-col items-center ${
            activeTab === "Payments" ? "text-[#00943F]" : "text-gray-500"
          }`}
        >
          <div className="w-6 h-6 mb-1">
            {/* Replace with your icon */}
            <span className="rounded-full border border-gray-500 w-6 h-6 flex items-center justify-center">
              P
            </span>
          </div>
          <span className="text-xs">Payments</span>
        </button>

        <button
          onClick={() => setActiveTab("Settings")}
          className={`flex flex-col items-center ${
            activeTab === "Settings" ? "text-[#00943F]" : "text-gray-500"
          }`}
        >
          <div className="w-6 h-6 mb-1">
            {/* Replace with your icon */}
            <span className="rounded-full border border-gray-500 w-6 h-6 flex items-center justify-center">
              S
            </span>
          </div>
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
