import React from "react";

const PaymentOverview = () => {
  // Define the data for each section
  const sections = [
    {
      title: "Total Due",
      dropdownLabel: "Oct",
      highlightText: "₹ 450K",
      comment: "You Owe",
      description: "Across",
      descNum: "5",
      desc: "Cirkles",
      buttonText: "Make Payment",
      // buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Validation",
      dropdownLabel: "Oct",
      highlightText2: "Members Accross",
      hightlightNum: "12",
      description2: "Circles have Paid",
      paidCirkle: "3",
      buttonText: "Validate Payments",
      // buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "To Receive",
      dropdownLabel: "Oct",
      highlightText: "₹ 450K",
      comment: "You Owe",
      description: "Across",
      descNum: "5",
      desc: "Cirkles",
      buttonText: "View Details",
      // buttonColor: "bg-gray-500 hover:bg-gray-600",
    },
  ];

  return (
    <div className="flex overflow-x-auto space-x-3 py-4 hide-scrollbar">
      {/* Render sections dynamically */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[45%] py-4 px-2 bg-[#E5F7FF66] border rounded-md   "
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[14px] font-semibold mb-2 ">{section.title}</h2>
            <select className="border border-gray-300 rounded text-[8px] p-1 bg-[#80FFFF]">
              <option>{section.dropdownLabel}</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex justify-between mb-5 text-[#141B3480]">
            <p className="text-sm text-gray-500">
              {section.comment}
              {section.hightlightNum}
            </p>
            <h3 className="text-sm font-bold text-black">
              {section.highlightText}{" "}
              <span className="font-normal text-[#141B3480] text-[10.5px]">
                {section.highlightText2}
              </span>
            </h3>
          </div>

          <div className="flex justify-between text-sm text-[#141B3480]">
            <p className="text-[10.5px]">
              {section.description}
              {section.paidCirkle}
            </p>

            <p>{section.descNum}</p>

            <p className="text-[10.5px]">
              {section.desc}
              {section.description2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentOverview;
