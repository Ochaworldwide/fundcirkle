import React from "react";

const PayoutCard = ({ data }) => {
  const { progress, payoutDate, amount, currency } = data;

  // Calculate progress
  const percentage = (progress.current / progress.total) * 100;
  const strokeDasharray = 314; // Full circumference for r = 50
  const strokeDashoffset =
    strokeDasharray - (percentage / 100) * strokeDasharray;

  return (
    <div className="flex items-center   rounded-lg  justify-between w-[100%]">
      {/* Circular Progress Bar */}
      <div className="relative">
        <svg width="120" height="120" className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#E5F4EC" /* Tailwind's gray-200 */
            strokeWidth="10"
          />
          {/* Progress Circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34D399" />{" "}
              {/* Tailwind's emerald-400 */}
              <stop offset="100%" stopColor="#06B6D4" />{" "}
              {/* Tailwind's cyan-500 */}
            </linearGradient>
          </defs>
        </svg>
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-[12px] text-black">
          <span className="font-bold  ">Payouts</span>
          <span className="">Done</span>
          <span className="">
            {progress.current}/{progress.total}
          </span>
        </div>
      </div>

      {/* Payout Details */}
      <div className="flex flex-col space-y-5 w-[60%] ">
        <div className="text-black flex justify-between items-center">
          <span className="font-[400] text-[12px]">Your Payout Date</span>
          <div className=" px-3 py-1 bg-[#FBC8CE1A] text-gray-700 border border-gray-300 font-[400] text-[12px] rounded-md">
            {payoutDate}
          </div>
        </div>
        <div className="text-black flex justify-between items-center">
          <span className="font-[400] text-[12px]">Cirkle Amount</span>
          <div className=" text-black font-bold flex items-center  px-5">
            {/* <span className="text-lg">{currency}</span> */}
            <img src={currency} alt="" srcset="" className="h-7" />
            <span className="text-[14px] ">{amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutCard;
