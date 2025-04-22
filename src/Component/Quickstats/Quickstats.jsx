import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import currency from "/images/currency.svg";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";
import { useModal } from "../Cirkles/ModalContext";

const QuickStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showStatusReport } = useModal();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        ROUTES.ACCOUNT.GET_DASHBOARD_STATS
      );
      if (response.data.success) {
        const data = response.data.data;

        // Transform API response to match the required structure
        const transformedStats = [
          {
            label: "Currently Active Cirkles",
            value: data.active_cirkles,
            bgColor: "bg-[#80D4FF33]",
          },
          {
            label: "Your Total Contributions",
            value: `${data.total_contributions.toLocaleString()} `,
            bgColor: "bg-[#80C99F33]",
            currency: currency,
          },
          {
            label: "Total Payout Amount",
            value: `${data.total_payout_amount.toLocaleString()} `,
            bgColor: "bg-[#80D4FF33]",
            currency: currency,
          },
          {
            label: "Your Total Due Payment - October",
            value: `${data.total_due.toLocaleString()} `,
            bgColor: "bg-[#80C99F33]",
            currency: currency,
          },
        ];

        setStats(transformedStats);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error(
      //   error.response?.data?.message || "An error occurred. Please try again.",{ ...toastConfig }
      // );
      showStatusReport(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      className="w-[95%] mx-auto mb-20 lg:w-full lg:mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-[14px] font-[400] leading-[18.2px] font-[Poppins] lg:text-xl">
        Quick Stats
      </h3>

      {loading ? (
        <p className="text-center text-gray-500">Loading stats...</p>
      ) : (
        <div className="flex overflow-x-auto space-x-3 py-4 hide-scrollbar">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex flex-col justify-between w-2/6 py-4 px-2 border border-[#00000066] rounded-lg ${stat.bgColor} lg:w-[23%] lg:h-36 lg:border-none `}
            >
              <p className="text-gray-700 text-xs font-[400] lg:text-[21px] lg:leading-normal">{stat.label}</p>
              <p className="text-[20px] font-semibold mt-2 flex items-center justify-center text-[#292D32] lg:text-[25px]">
                {stat.currency && (
                  <span className="text-white">
                    <img
                      src={stat.currency}
                      alt="currency"
                      className="object-contain h-7"
                    />
                  </span>
                )}
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default QuickStats;

