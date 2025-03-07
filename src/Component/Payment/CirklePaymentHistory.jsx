import React, { useEffect, useState } from "react";
import axiosInstance from "../../service";

const CirklePaymentHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/cirkle/${4}/payments`);
        if (response.data.success) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-4 px-2 overflow-scroll hide-scrollbar">
      <table className=" w-[1100px] bg-white  rounded-lg shadow-sm ">
        <thead>
          <tr className="border-b  text-left text-xs font-semibold text-gray-600">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Cirkle Name</th>
            <th className="px-4 py-2">Payment Date</th>
            <th className="px-4 py-2">Contribution Amount</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Proof of payment Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={` text-xs text-gray-700 mb-10 `}>
              <td className="px-4 py-4 flex items-center  ">{index + 1}</td>
              <td className="px-4 py-4 ">{item.name}</td>
              <td className="px-4 py-4 ">
                {new Date(item.data).toLocaleDateString()}
              </td>
              <td className="px-4 py-4  flex items-center ">
                <img src="/images/currency.svg" alt="" className="h-4 mr-1" />
                {item.amount}
              </td>
              <td className="px-4 py-4 ">{item.status}</td>
              <td className="px-4 py-4 ">{item.proof_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CirklePaymentHistory;
