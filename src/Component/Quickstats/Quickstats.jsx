import React from "react";
import { motion } from "framer-motion";
import currency from "/images/currency.svg";

const QuickStats = () => {
  const stats = [
    {
      label: "Currently Active Circles",
      value: "1",
      bgColor: "bg-[#80D4FF33]",
    },
    {
      label: "Your Total Contributions",
      value: "120K",
      bgColor: "bg-[#80C99F33]",
      currency: currency,
    },
    {
      label: "Total Payout Amount",
      value: "420",
      bgColor: "bg-[#80D4FF33]",
      currency: currency,
    },
    {
      label: "Your Total Due Payment - October",
      value: "120k",
      bgColor: "bg-[#80C99F33]",
      currency: currency,
    },
  ];

  return (
    <motion.div
      className="w-[95%] mx-auto mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-[14px] font-[400] leading-[18.2px] poppins">
        Quick Stats
      </h3>

      <div className="flex overflow-x-auto space-x-3 py-4 hide-scrollbar   ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-2/6 py-4 px-2 rounded-lg ${stat.bgColor}`}
          >
            <p className="text-gray-700 text-xs font-[400]">{stat.label}</p>
            <p className="text-[20px] font-semibold mt-2 flex items-center justify-center text-[#292D32]">
              <span className=" text-white  ">
                <img src={stat.currency} alt="" srcset="" className="object-contain h-7" />
              </span>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickStats;
