import React from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";

const CirkleDetailsModal = () => {
  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "detail") return null;

  const data = {
    title: "Hyderabad Pharmacist Union",
    description:
      "The Hyderabad Pharmacist Union is a Cirkle of Professional Pharmacists working in Hyderabad and its environs. The aim of this Cirkle is to create a social funding scheme for members to fund their private projects.",
    image: "https://via.placeholder.com/50",
    groupName: "Hyderabad Pharmacist Union",
    payoutAmount: "420,000",
    amount: "420,000",
    dateRange: "August 2024 - February 2025",
    members: [
      { image: "https://via.placeholder.com/24", name: "Priya" },
      { image: "https://via.placeholder.com/24", name: "Ravi" },
      { image: "https://via.placeholder.com/24", name: "Lyla" },
      { image: "https://via.placeholder.com/24", name: "John" },
      { image: "https://via.placeholder.com/24", name: "Hana" },
      { image: "https://via.placeholder.com/24", name: "Steven" },
    ],
    payoutDate: "25th of Nov 2024",
    cirkleAmount: "₹60,000",
  };


  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center h-fit pt-20"
    >
      <div className="bg-white pb-10 rounded-lg max-w-md w-full">
        <div className="py-5 px-3 bg-[#FAF5FF] flex justify-between w-[80%] mx-auto rounded-xl">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="15.5" stroke="#F0243B" />
            <circle cx="16" cy="16" r="10.1667" stroke="#F0243B" />
            <circle cx="16" cy="16" r="4.83333" stroke="#F0243B" />
          </svg>

          <p className="text-[18px] font-[400]">View Circle Details</p>
          <button onClick={closeModal} className="text-gray-500 float-right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-3 mx-auto">
          <div className="items-center mb-5 flex justify-between">
            <img
              src={data.image}
              alt="Group"
              className="w-12 h-12 rounded-full"
            />

            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {data.title}
            </h2>

            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.4249 14.6051L27.4149 13.6151C28.2351 12.795 29.5648 12.795 30.3849 13.6151C31.205 14.4352 31.205 15.7649 30.3849 16.5851L29.3949 17.5751M26.4249 14.6051L19.7656 21.2644C19.2581 21.772 18.898 22.4078 18.724 23.1041L18 26L20.8959 25.276C21.5922 25.102 22.228 24.7419 22.7356 24.2344L29.3949 17.5751M26.4249 14.6051L29.3949 17.5751"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M28.9999 23.5C28.9999 26.7875 28.9999 28.4312 28.092 29.5376C27.9258 29.7401 27.7401 29.9258 27.5375 30.092C26.4312 31 24.7874 31 21.4999 31H21C17.2288 31 15.3432 31 14.1716 29.8284C13 28.6569 13 26.7712 13 23V22.5C13 19.2125 13 17.5688 13.9079 16.4624C14.0742 16.2599 14.2599 16.0742 14.4624 15.9079C15.5688 15 17.2125 15 20.5 15"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p className="text-sm text-gray-600 mb-4">{data.description}</p>

          {/* <div className="flex items-center space-x-4 mb-4">
            <img
              src={data.image}
              alt="Group"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-700">{data.groupName}</p>
              <p className="text-xs text-gray-500">
                Payout Amount: {data.payoutAmount}
              </p>
            </div>
          </div> */}

          <div className="flex justify-between items-center border rounded-lg text-[#00943F] font-bold mb-4 px-1">
            <div className="flex w-[50%]">
              <div className="mr-2">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.8 24 4.8C13.3961 4.8 4.8 13.3961 4.8 24C4.8 34.6039 13.3961 43.2 24 43.2ZM16.8001 12C15.4746 12 14.4001 13.0745 14.4001 14.4C14.4001 15.7255 15.4746 16.8 16.8001 16.8H19.2001C20.9768 16.8 22.528 17.7653 23.3579 19.2H16.8001C15.4746 19.2 14.4001 20.2745 14.4001 21.6C14.4001 22.9255 15.4746 24 16.8001 24H23.3579C22.528 25.4347 20.9768 26.4 19.2001 26.4H16.8001C15.8294 26.4 14.9542 26.9847 14.5828 27.8816C14.2113 28.7784 14.4166 29.8107 15.103 30.4971L22.303 37.6971C23.2403 38.6343 24.7599 38.6343 25.6971 37.6971C26.6344 36.7598 26.6344 35.2402 25.6971 34.3029L22.1367 30.7425C25.2534 29.7422 27.676 27.1925 28.4976 24H31.2001C32.5256 24 33.6001 22.9255 33.6001 21.6C33.6001 20.2745 32.5256 19.2 31.2001 19.2H28.4976C28.2785 18.3485 27.9455 17.5428 27.5158 16.8H31.2001C32.5256 16.8 33.6001 15.7255 33.6001 14.4C33.6001 13.0745 32.5256 12 31.2001 12H16.8001Z"
                    fill="#F45B6C"
                  />
                </svg>
              </div>
              <div className="">
                <p>{data.amount}</p>
                <p className="text-xs text-black">Payment Amount</p>
              </div>
            </div>

            <div className="py-5 text-black w-[45%]">
              <p>{data.dateRange}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {data.members.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-xs text-gray-500">{member.name}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 pt-4">
            <p className="text-xs text-gray-500 mb-2">
              Your Payout Date: <strong>{data.payoutDate}</strong>
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Cirkle Amount: <strong>{data.cirkleAmount}</strong>
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
              Pay Pie for October
            </button>
            <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded-lg text-sm">
              Swap Payment Month
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CirkleDetailsModal;
