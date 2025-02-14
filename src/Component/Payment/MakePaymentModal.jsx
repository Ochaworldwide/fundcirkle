import React from "react";
import { useModal } from "../Cirkles/ModalContext";
import PaymentForm from "./PaymentForm";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const MakePaymentModal = () => {
  const navigate = useNavigate();
  const { isModalOpen, closeModal, modalType, modalData } = useModal();

  console.log('payment modal', modalData);
  const handleSubmit = () =>{
    navigate("/paymentsuccessful")
    closeModal();
  }

  if (!isModalOpen || modalType !== "make payment") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
      >
        <div className="bg-white rounded-lg  w-full max-w-md ">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 bg-green-100 rounded-t-lg sticky  top-0">
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
              <img src="/images/arrow-down-01.svg" alt="" srcset="" />
            </button>
          </div>

          {/* Payment Instructions */}
          <div className="p-6">
            <h3 className="text-sm font-semibold mb-2 text-gray-600">
              How to Pay
            </h3>
            <p className="text-[8px] text-gray-600 mb-4">
              You can make payment through cash or bank transfer to the listed
              account of your Cirkle’s admin or the receiving member. After
              making payment, please choose your payment method and provide the
              required payment information for validation.
            </p>

            {/* Payment Amount */}
            {/* <div className="flex justify-center space-x-3 items-center mb-4">
              <span className="text-gray-600 text-sm">Amount to Pay</span>
              <span className="font-semibold text-gray-800 text-lg flex items-center">
                {" "}
                <img
                  src="/images/currency.svg"
                  alt=""
                  srcset=""
                  className="h-4"
                />
                60,000
              </span>
            </div> */}

            {/* Payment Options */}

            {/* Payment Form */}

            <PaymentForm cirkle={modalData} handler={handleSubmit}/>
          </div>

          {/* Submit Button */}
          {/* <div className="p-4 w-[80%] mx-auto">
            <button
              className=" w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
              
            >
              Submit Payment Proof
            </button>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default MakePaymentModal;
