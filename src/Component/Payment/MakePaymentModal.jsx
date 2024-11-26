import React from "react";
import { useModal } from "../Cirkles/ModalContext";
import PaymentForm from "./PaymentForm";


const MakePaymentModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();

  if (!isModalOpen || modalType !== "makepayment") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-green-100 rounded-t-lg">
          <div className="flex items-center gap-2">
            <img
              src="/images/payment-head-image.svg"
              alt="Payment Icon"
              className="w-8 h-8"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Submit for Payment
            </h2>
          </div>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>

        {/* Payment Instructions */}
        <div className="p-6">
          <h3 className="text-sm font-semibold mb-2 text-gray-600">
            How to Pay
          </h3>
          <p className="text-[8px] text-gray-600 mb-4">
            You can make payment through cash or bank transfer to the listed
            account of your Cirkle’s admin or the receiving member. After making
            payment, please choose your payment method and provide the required
            payment information for validation.
          </p>

          {/* Payment Amount */}
          <div className="flex justify-center space-x-2 items-center mb-4">
            <span className="text-gray-600 text-sm">Amount to Pay</span>
            <span className="font-semibold text-gray-800 text-lg">₹60,000</span>
          </div>

          {/* Payment Options */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="paymentTo" className="form-radio" />
              <span className="text-[10.5px] text-gray-600">Pay to Admin</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="paymentTo" className="form-radio" />
              <span className="text-[10.5px] text-gray-600">
                Pay to Receiving Member
              </span>
            </label>
          </div>

          
          {/* Payment Form */}

          <PaymentForm />


         
        </div>

        {/* Submit Button */}
        <div className="p-4">
          <button className="w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
            Submit Payment Proof
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakePaymentModal;
