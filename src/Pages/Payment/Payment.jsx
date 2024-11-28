import { div } from 'framer-motion/client'
import React from 'react'
import PaymentOverview from '../../Component/Payment/PaymentOverview'
import ManagePaymentCirkle from '../../Component/Payment/ManagePaymentCirkle';
import PaymentTable from '../../Component/Payment/PaymentTable';
import NavigationBar from '../../Component/BottomNav/NavigationBar';

const Payment = () => {
  return (
    <div className="mb-20">
      {/* Nav Bar */}
      <NavigationBar />



      {/* heading */}
      <div className="py-5 border-b text-[22px] font-[600] mb-5 sticky top-0 bg-white z-10">
        <h1 className="text-center">Payment</h1>
      </div>

      {/* Payment Overview */}

      <div className="w-[100%] px-5 ">
        <h1 className="   text-[18px] font-bold">Payment Overview</h1>
        <PaymentOverview />
      </div>

      {/* Manage Payment Cirkle */}

      <ManagePaymentCirkle />

      {/* History */}

      <div className="p-4">
        <h1 className="mb-5 text-[18px] font-bold ">Payment History</h1>

        <div className="flex justify-between mb-5">
          <div className="flex items-center space-x-1">
            <img
              src="/images/filter-history.svg"
              alt=""
              srcset=""
              className="h-7"
            />
            <span className="text-[10.5px]">Filters</span>
          </div>

          <div className="flex border p-2 rounded-lg w-[70%]">
            <img src="/images/search-01.svg" alt="" srcset="" className="" />
            <input
              type="text"
              placeholder="Search for a Cirkle or a User"
              className="outline-none pl-2 text-[10.5px]"
            />
          </div>

          <img src="/images/download-02.svg" alt="" srcset="" />
        </div>

        {/* filters */}

        <div className="flex space-x-5 mb-5 mx-auto w-fit">
          <div className="flex text-[10px] items-center">
            Mumbai
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            Personal
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            August
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            Completed
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>
        </div>

        {/* hand  icon */}

        <div className="flex text-[10px] items-center justify-center border-y py-5">
          <img src="/images/hand.svg" alt="" srcset="" />

          <p>Swipe left to view the hidden columns of the table</p>
        </div>

        {/* table */}

        <PaymentTable />
      </div>
    </div>
  );
}

export default Payment