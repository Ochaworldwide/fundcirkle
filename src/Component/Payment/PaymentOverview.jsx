import React from "react";

const PaymentOverview = ({due,validations,receive}) => {

  return (
    <div className="flex overflow-x-auto space-x-3 py-4 hide-scrollbar">
      <div className="flex-shrink-0 w-[47%] py-4 px-2 bg-[#E5F7FF66] border rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[14px] font-semibold mb-2">Total Due</h2>
        </div>

        <div className="flex justify-between mb-5 text-[#141B3480]">
          <p className="text-sm text-gray-500">You Owe</p>
          <h3 className="text-sm font-bold text-black border rounded-full bg-white">
            {due.amount}
          </h3>
        </div>

        <div className="flex justify-between text-sm text-[#141B3480]">
          <p className="text-[10.5px]">Across</p>
          <p className="text-sm font-bold text-black border rounded-full bg-white">
            {due.cirkle_count}
          </p>
          <p className="text-[10.5px]">Cirkles</p>
        </div>
      </div>

      <div className="flex-shrink-0 w-[45%] py-4 px-2 bg-[#E5F7FF66] border rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[14px] font-semibold mb-2">Validations</h2>
        </div>

        <div className="flex justify-between mb-5 text-[#141B3480]">
          <p className="text-sm font-bold text-black border rounded-full bg-white">
            {validations.member_count}
          </p>
          <h3 className="text-[10.5px] text-gray-500">members across</h3>
        </div>

        <div className="flex justify-between text-sm text-[#141B3480]">
          <p className="text-sm font-bold text-black border rounded-full bg-white">
            {validations.cirkle_count}
          </p>
          <p className="text-[10.5px]">cirkles have paid</p>
        </div>
      </div>

      <div className="flex-shrink-0 w-[45%] py-4 px-2 bg-[#E5F7FF66] border rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[14px] font-semibold mb-2">To Receive</h2>
        </div>

        <div className="flex justify-between mb-5 text-[#141B3480]">
          <p className="text-[10.5px] text-gray-500">You will receive</p>
          <h3 className="text-sm font-bold text-black border rounded-full bg-white">
            {receive.amount}
          </h3>
        </div>

        <div className="flex justify-between text-sm text-[#141B3480]">
          <p className="text-[10.5px]">From</p>
          <p className="text-sm font-bold text-black border rounded-full bg-white">
            {receive.cirkle_count}
          </p>
          <p className="text-[10.5px]">Cirkles</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverview;



