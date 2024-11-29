import React from "react";
import { useModal } from "../Cirkles/ModalContext";
import PaymentForm from "./PaymentForm";
import CardBox from "./CardBox";
import PaymentList from "./PaymentList";

const ValidatePaymentModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();

  if (
    !isModalOpen ||
    ![
      "Confirm Payment",
      "validate payment",
      "Request Reupload",
      "View Proof",
    ].includes(modalType)
  )
    return null;

  const cardData = [
    {
      groupName: "Hyderabad Teaching Hospital Worker's Club",
      personCount: 3,
      persons: [
        "/images/paygroup-1.svg", // Replace with actual images
      ],
    },
    {
      groupName: "Greenwood Community Medical Center Employee Guild",
      personCount: 5,
      persons: ["/images/paygroup-2.svg"],
    },
    {
      groupName: "Hyderabad Teaching Hospital Worker's Club",
      personCount: 3,
      persons: [
        "/images/paygroup-2.svg", // Replace with actual images
      ],
    },
  ];


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
              Review & Validate Payments
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
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-4">
          {cardData.map((data, index) => (
            <CardBox
              key={index}
              groupName={data.groupName}
              personCount={data.personCount}
              persons={data.persons}
            />
          ))}
        </div>

        <div className="p-4 w-[100%] overflow-scroll hide-scrollbar ">
          <PaymentList />
        </div>

       
      </div>
    </div>
  );
};

export default ValidatePaymentModal;
