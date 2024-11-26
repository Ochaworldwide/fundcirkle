import React from "react";
import { useModal } from "../Cirkles/ModalContext";


const PaymentFilterModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();

  if (!isModalOpen || modalType !== "paymentfilter") return null;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center h-screen justify-center bg-black bg-opacity-[0.01]"
      onClick={closeModal}
    >
      <div className="bg-white rounded-lg shadow-lg p-1 w-28 ml-auto">
        <ul className="text-sm text-gray-700 ">
          <li
            className="flex items-center justify-between cursor-pointer  p-1 border-b"
            onClick={closeModal}
          >
            <span>Due Date</span>
          </li>
          <li
            className="flex items-center justify-between cursor-pointer  p-1 border-b"
            onClick={closeModal}
          >
            <span>Amount</span>
          </li>
          <li
            className="flex items-center justify-between cursor-pointer  p-1 rounded"
            onClick={closeModal}
          >
            <span>Cirkle Name</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentFilterModal;
