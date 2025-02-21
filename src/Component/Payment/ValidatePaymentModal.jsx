import React from "react";
import { useModal } from "../Cirkles/ModalContext";
import PaymentForm from "./PaymentForm";
import CardBox from "./CardBox";
import PaymentList from "./PaymentList";
import PaymentTable from "./PaymentTable";
import { motion } from "framer-motion";

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
      groupId: "selected",
    },
    {
      groupName: "Greenwood Community Medical Center Employee Guild",
      personCount: 5,
      persons: ["/images/paygroup-2.svg"],
      groupId: "selected",
    },
    {
      groupName: "Hyderabad Teaching Hospital Worker's Club",
      personCount: 3,
      persons: [
        "/images/paygroup-2.svg", // Replace with actual images
      ],
      groupId: "selected",
    },
  ];


  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50 "
      // className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50 "
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        // className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-y-scroll"
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[80%] bg-white overflow-scroll"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-green-100 rounded-t-lg sticky top-0 z-10">
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
        {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-4">
          {cardData.map((data, index) => (
            <CardBox
              key={index}
              groupName={data.groupName}
              personCount={data.personCount}
              persons={data.persons}
              groupId={data.groupId}
            />
          ))}
        </div> */}

        <div className="p-4 w-[100%] overflow-scroll hide-scrollbar ">
          <PaymentList />
        </div>

        {/* History */}
        <div className="p-4">
          <h1 className="mb-5 text-[18px] font-bold ">
            Cirkle Payment History
          </h1>

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
      </motion.div>
    </div>
  );
};

export default ValidatePaymentModal;
