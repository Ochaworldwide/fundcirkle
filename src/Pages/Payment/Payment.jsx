import { div } from 'framer-motion/client'
import React from 'react'
import PaymentOverview from '../../Component/Payment/PaymentOverview'
import ManagePaymentCirkle from '../../Component/Payment/ManagePaymentCirkle';

const Payment = () => {
  return (
    <div>
      {/* heading */}
      <div className="py-5 border-b text-[22px] font-[600] mb-3">
        <h1 className="text-center">Payment</h1>
      </div>

      <div className="w-[100%] px-5 ">
        <h1 className='  text-[18px]'>Payment Overview</h1>
        <PaymentOverview />
      </div>

      <ManagePaymentCirkle />


      <div>
        <h1>
          Payment History
        </h1>

        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Payment