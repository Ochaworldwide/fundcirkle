import React, { useEffect, useState } from "react";


const StatusReportModal = ({ report, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black h-screen  bg-opacity-50 ">
      <div className=" w-[90%] rounded-sm min-h-[30%] bg-white flex flex-col items-center justify-center relative lg:w-[50%] lg:min-h-[50%]">
        <h1 className="mb-4 font-semibold">Status</h1>
        <p className="mb-7 text-center w-[95%] mx-auto text-gray-500 lg:mb-10">
          {report}
        </p>

        <button
          onClick={onClose}
          className="text-[#00943F] w-full font-medium shadow-sm border hover:underline focus:outline-none absolute bottom-0 py-5"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default StatusReportModal;



