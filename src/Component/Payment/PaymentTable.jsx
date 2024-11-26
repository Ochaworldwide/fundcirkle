import React from "react";

const PaymentTable = () => {
  const data = [
    {
      id: 1,
      name: "Sunshine Valley General Hospital Staff Association",
      paymentDate: "10-24-2024",
      currency: "/images/currency.svg",
      amount: "50000",
      staus: "Paid",
      proof: "Confimed",
    },
    {
      id: 2,
      name: "Hyderabad Teaching Hospital Worker's Club",
      paymentDate: "10-24-2024",
      currency: "/images/currency.svg",
      amount: "30000",
      staus: "Paid",
      proof: "Upload",
    },
    {
      id: 3,
      name: "Greenwood Community Medical Center Employees",
      paymentDate: "10-24-2024",
      currency: "/images/currency.svg",
      amount: "80000",
      staus: "Paid",
      proof: "Confimed",
    },
    {
      id: 4,
      name: "Hyderabad Teaching Hospital Worker's Club",
      paymentDate: "10-24-2024",
      currency: "/images/currency.svg",
      amount: "50000",
      staus: "Pending",
      proof: "Upload",
    },
    {
      id: 5,
      name: "Hyderabad Teaching Hospital Worker's Club",
      paymentDate: "10-24-2024",
      currency: "/images/currency.svg",
      amount: "10000",
      staus: "Paid",
      proof: "Confimed",
    },
    {
      id: 6,
      name: "Hyderabad Teaching Hospital Worker's Club",
      paymentDate: "10-24-2024",
      currency: "/images/currency.svg",
      amount: "10000",
      staus: "Paid",
      proof: "Confimed",
    },
    {
      id: 7,
      name: "Hyderabad Teaching Hospital Worker's Club",
      paymentDate: "10-24-2024",
      currency: "/images/currency.svg",
      amount: "10000",
      staus: "Paid",
      proof: "Confimed",
    },
  ];

  return (
    <div className="py-4 px-2 overflow-scroll hide-scrollbar">
      <table className=" w-[1100px] bg-white  rounded-lg shadow-sm ">
        <thead>
          <tr className="border-b  text-left text-xs font-semibold text-gray-600">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">
              <div className="flex items-center">
                Cirkle Name
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto"
                >
                  <path
                    d="M12 7.66919C12 7.66919 9.05407 3.6692 8 3.66919C6.94587 3.66918 4 7.66919 4 7.66919"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.6692C12 11.6692 9.05407 15.6692 8 15.6692C6.94587 15.6692 4 11.6692 4 11.6692"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center">
                Payment Date
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M12 7.66919C12 7.66919 9.05407 3.6692 8 3.66919C6.94587 3.66918 4 7.66919 4 7.66919"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.6692C12 11.6692 9.05407 15.6692 8 15.6692C6.94587 15.6692 4 11.6692 4 11.6692"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center">
                Contribution Amount
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M12 7.66919C12 7.66919 9.05407 3.6692 8 3.66919C6.94587 3.66918 4 7.66919 4 7.66919"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.6692C12 11.6692 9.05407 15.6692 8 15.6692C6.94587 15.6692 4 11.6692 4 11.6692"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Proof of payment Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={` text-xs text-gray-700 mb-10 `}>
              <td className="px-4 py-4 flex items-center  ">{item.id}</td>
              <td className="px-4 py-4 ">{item.name}</td>
              <td className="px-4 py-4 ">{item.paymentDate}</td>
              <td className="px-4 py-4  flex items-center ">
                <img
                  src={item.currency}
                  alt=""
                  srcset=""
                  className="h-4 mr-1"
                />
                {item.amount}
              </td>
              <td className="px-4 py-4 ">{item.staus}</td>
              <td className="px-4 py-4 ">{item.proof}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
