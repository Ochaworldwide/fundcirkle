import React from "react";
import { motion } from "framer-motion";
import { useModal } from "../../Component/Cirkles/ModalContext";

const EditBankInformationModal = () => {
  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "Edit Bank Information") return null;

  
  return (
    <div className="fixed inset-0 z-[50] flex items-center h-screen justify-center bg-black bg-opacity-50 ">
      <motion.div
        initial={{ x: "100%", opacity: 0 }} // Start off-screen
        animate={{ x: 0, opacity: 1 }} // Slide into view
        exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        className=" bg-white shadow-lg mt-4 rounded-lg mx-auto w-[90%] z-50 "
        // transition={{ type: "spring", stiffness: 100, damping: 15 }}
        // className="fixed top-0 right-0 mt-4 mr-4 bg-white shadow-lg rounded-lg w-96 z-50 p-4"
      >
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-5 space-y-4 border">
          <div className="flex justify-between items-center pb-5 border-b">
            <h2 className="text-sm font-semibold">Your Bank Details</h2>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-800"
            >
              <img src="/images/cancel-square.svg" alt="" />
            </button>
          </div>

          <div className="pb-5 border-b">
            <h1 className="text-[12px] mb-1 font-[500]">Bhaavik Arhaan</h1>

            <p className="text-[8px]">
              Your Account Name and details should match your profile name
              above.
            </p>
          </div>

          <form action="">
            <div className="flex items-center justify-between border-b pb-3">
              <label htmlFor="" className="text-[10.5px]">
                Account No:
              </label>

              <input
                type="text"
                placeholder="12345678...."
                className="border outline-none rounded-md w-[60%] py-2 px-2 text-[10.5px] text-[#141B3480]"
              />
            </div>

            <div className="flex items-center justify-between border-b py-4">
              <label htmlFor="" className="text-[10.5px]">
                Bank Name:
              </label>

              <input
                type="text"
                placeholder="State Bank "
                className="border outline-none rounded-md w-[60%] py-2 px-2 text-[10.5px] text-[#141B3480]"
              />
            </div>

            <div className="flex items-center justify-between border-b py-4">
              <label htmlFor="" className="text-[10.5px]">
                Account Type:
              </label>

              <select
                name=""
                id=""
                className="border outline-none rounded-md w-[60%] py-2 px-2 text-[10.5px] text-[#141B3480] bg-white"
              >
                <option value="">Saving</option>
                <option value="">Current</option>
              </select>
            </div>

            <div className="flex items-center justify-between border-b py-4">
              <label htmlFor="" className="text-[10.5px]">
                IFSC Code:
              </label>

              <input
                type="text"
                placeholder="SBIN00012... "
                className="border outline-none rounded-md w-[60%] py-2 px-2 text-[10.5px] text-[#141B3480]"
              />
            </div>

            <div className="flex items-center justify-between border-b py-4">
              <label htmlFor="" className="text-[10.5px]">
                Branch Address
              </label>

              <input
                type="text"
                placeholder="..... Mumbai, Maharashtra "
                className="border outline-none rounded-md w-[60%] py-2 px-2 text-[10.5px] text-[#141B3480]"
              />
            </div>

            <div className="flex items-center justify-between py-4">
              <button
                type="submit"
                className="bg-[#00943F] text-[10.5px] font-[700] text-white w-[40%] py-4 rounded-md"
              >
                Submit
              </button>

              <button
                type="submit"
                className="bg-white border text-[10.5px] font-[700] text-black w-[45%] py-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EditBankInformationModal;
