import React, { useState } from "react";
import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";
import messageIcon from "/src/assets/images/message.png";
import catIcon from "/src/assets/images/cat.png";
import moreIcon from "/src/assets/images/more.png";

const contribution = {
  amount: "60K",
  currencySymbol: "₹",
  paymentStatus: {
    completed: 5,
    total: 7,
  },
};

function MyCirkles() {

  // Header Data
  const header = {
    groupName: "Hyderabadwwwwwwwwwwwwwwwww",
    groupImage: "/src/assets/images/circlepeople.png",
    notifications: [
      { icon: messageIcon, count: 1 },
      { icon: catIcon },
      { icon: moreIcon },
    ],
  };

  // Payment Dates
  const Dates = {
    nextPayment: "Oct 1, 2024",
    yourTurn: "Nov 1, 2024",
  };

  // Members Data
  const members = [
    { name: "Alice", image: "/src/assets/images/member1.png" },
    { name: "Bob", image: "/src/assets/images/member2.png" },
    { name: "Carol", image: "/src/assets/images/member3.png" },
    { name: "Dave", image: "/src/assets/images/member4.png" },
    { name: "Eve", image: "/src/assets/images/member5.png" },
    { name: "Frank", image: "/src/assets/images/member6.png" },
    { name: "Grace", image: "/src/assets/images/member7.png" },
  ];

  return (
    <div>
      <div className=" border-[1px] rounded-[12px] flex bg-gray-50 p-2 shadow-sm">
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
                {Dates.nextPayment}
              </p>
            </div>
            <div className="flex text-xs leading-[15.75px] font-[400] poppins items-center">
              <p className="text-gray-600">Your Turn</p>
              <p className="font-medium bg-[#FEF0F2] ml-auto p-2  border rounded-[8px] text-[#141B34]">
                {Dates.yourTurn}
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
    </div>
  );
}

export default MyCirkles;
