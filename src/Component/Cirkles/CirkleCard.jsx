import React from "react";
import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";
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

 
  return (
    <motion.div
      className="p-4  mx-auto bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header with tabs */}
      <div className="flex justify-between mb-4 border-b border-gray-200 pb-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              tab.isActive ? "text-pink-600 font-semibold" : "text-gray-400"
            }`}
          >
            {tab.name}
          </button>
        ))}
        <button className="text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 2a2 2 0 100 4h4a2 2 0 100-4h-4zM6 10a2 2 0 100 4h12a2 2 0 100-4H6zM2 18a2 2 0 100 4h20a2 2 0 100-4H2z" />
          </svg>
        </button>
      </div>

      {/* Main content */}

      <div className="p-2 border-[1px] rounded-[12px] flex">
        {/* Left side */}
        <div className=" w-[50%] mb-4 h-fit ">
          {/* Header with title */}
          <div className="flex items-center w-[100%] mb-8">
            <img
              src={header.groupImage}
              alt="Group"
              className="w-14 h-14 rounded-full"
            />
            <span className="ml-3 bg-[#B41ACD] text-white px-3 py-1 tetx-[14px] rounded-[8px] text-ellipsis overflow-hidden ">
              {header.groupName}
            </span>
          </div>

          {/* Contribution  */}
          <div className="mb-5 leading-[15.75px] flex">
            <h1 className=" text-xs leading-[15.75px] font-[400]text-wrap overflow-hidden text-black">
              Contribution Amount
            </h1>
            <p className="text-xs] font-bold text-[#292D32] flex px-3">
              {contribution.currencySymbol}
              {contribution.amount}
            </p>
          </div>
          {/* Next Payment Dates */}
          <div className="flex justify-between flex-col">
            <div className="mb-5 flex text-xs leading-[15.75px] font-[400] poppins items-center">
              <p className="text-gray-600 ">Next Payment</p>
              <p className="font-medium bg-[#FEF0F2] ml-auto p-2 border rounded-[8px] text-[#141B34]">
                {dates.nextPayment}
              </p>
            </div>
            <div className="flex text-xs leading-[15.75px] font-[400] poppins items-center">
              <p className="text-gray-600">Your Turn</p>
              <p className="font-medium bg-[#FEF0F2] ml-auto p-2  border rounded-[8px] text-[#141B34]">
                {dates.yourTurn}
              </p>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="mb-4 h-fit w-[50%] flex flex-col items-center">
          {/*icons */}
          <div className="flex space-x-2 text-gray-600 w-[80%] justify-evenly ml-auto mt-4 mb-8">
            {header.notifications.map((notification, index) => (
              <button key={index} className="relative">
                <img src={notification.icon} alt="" srcset="" className="w-8" />
                {notification.count && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {notification.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Payment Info */}
          <div className="flex justify-between items-center mb-4  ">
            <div className="text-center">
              <p className="text-black mb-3">Payment Status</p>

              <CircularProgress contribution={contribution} />

              <button className="mt-2 bg-[#F0243B] text-white px-4 py-3 rounded-[8px] text-xs leading-[15.75px]">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Members */}
      <div className="border border-gray-200 p-2 mt-3 rounded-lg">
        <p className="text-black">7 Members</p>
        <div className="flex mt-2 space-x-2">
          {members.map((member, index) => (
            <img
              key={index}
              src={member.image}
              alt={member.name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CirkleCard;
