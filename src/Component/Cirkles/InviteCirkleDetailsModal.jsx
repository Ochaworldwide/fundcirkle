import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import CircularProgress from "./CircularProgress";
import PayoutCard from "./PayoutCard";
import axiosInstance from "../../service";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { toastConfig } from "../../constants/toastConfig";

const InviteCirkleDetailsModal = () => {
  const { isModalOpen, modalType, modalData, closeModal } = useModal();
  const [cirkleData, setCirkleData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen && modalType === "invite") {
      const fetchData = async () => {
        try {
          const cirkleId = modalData;
          const response = await axiosInstance.get(`/cirkles/${cirkleId}`);
          if (response.data.success) {
            setCirkleData(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          if (error.response?.data?.message) {
            toast.error(error.response.data.message, { ...toastConfig });
          } else {
            toast.error("An error occurred. Please try again.", {
              ...toastConfig,
            });
          }
        }
      };

      fetchData();
    }
  }, [isModalOpen, modalType]);

  if (!isModalOpen || modalType !== "invite") return null;

  if (!cirkleData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <FadeLoader size={50} color="#36D7B7" />
      </div>
    );
  }

  const payoutData = {
    progress: { current: 2, total: 7 },
    payoutDate: "25th of Nov 2024",
    amount: "60,000",
    currency: "/images/currency.svg",
  };

  const data = {
    title: "Hyderabad Pharmacist Union",
    description:
      "The Hyderabad Pharmacist Union is a Cirkle of Professional Pharmacists working in Hyderabad and its environs. The aim of this Cirkle is to create a social funding scheme for members to fund their private projects.",
    image: "/images/circlepeople.svg",
    groupName: "Hyderabad Pharmacist Union",
    payoutAmount: "420,000",
    amount: "420,000",
    dateRange: "August 2024 - February 2025",
    members: [
      {
        image: "/images/person1.svg",
        name: "Priya",
        memberDate: "Aug, 2024",
      },
      {
        image: "/images/person2.svg",
        name: "Ravi",
        memberDate: "Aug, 2024",
      },
      {
        image: "/images/person3.svg",
        name: "Lyla",
        memberDate: "Aug, 2024",
      },
      {
        image: "/images/person4.svg",
        name: "John",
        memberDate: "Aug, 2024",
      },
      {
        image: "/images/person5.svg",
        name: "Hana",
        memberDate: "Aug, 2024",
      },
      {
        image: "/images/person6.svg",
        name: "Steven",
        memberDate: "Aug, 2024",
      },
    ],
    payoutDate: "25th of Nov 2024",
    cirkleAmount: "60,000",
    currency: "/images/green-currency.svg",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50"
      onClick={() => {
        closeModal();
      }}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[80%] bg-white overflow-scroll"
      >
        <div className="pb-10 rounded-lg max-w-md w-full">
          <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl sticky top-0">
            <img src="/images/tricycle.svg" alt="" />
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
            <div className="items-center mb-5 flex space-x-10">
              <img
                src="/images/circlepeople.svg"
                alt="Group"
                className="w-12 h-12 rounded-full"
              />

              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {cirkleData.name}
              </h2>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {cirkleData.description}
            </p>

            <div className="flex justify-between items-center border rounded-lg text-[#00943F] font-bold mb-8 px-1">
              <div className="flex w-[50%] justify-evenly">
                <div className="mr-2">
                  <img src="/images/green-currency.svg" alt="" />
                </div>
                <div className="">
                  <p>{cirkleData.contribution_amount}</p>
                  <p className="text-xs text-black">Payout Amount</p>
                </div>
              </div>

              <div className="py-5 text-black w-[45%]">
                <p className="text-[18px]">
                  {`${cirkleData.contribution_day} of August 2024 - February 2025`}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap w-[100%] mb-7 justify-between overflow-scroll mx-auto opacity-[0.1]">
              {data.members.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-xs text-gray-500">{member.name}</p>
                  <p className="bg-[#00AAFF] rounded-sm px-1 py-[1px] text-[8px] text-white">
                    {member.memberDate}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 mx-auto flex justify-between w-[80%] ">
              <p>Contribution Amount</p>

              <div className="flex">
                <img src="/images/currency.svg" alt="" className="h-6" />
                <p>{cirkleData.contribution_amount}</p>
              </div>
            </div>

            <div className="flex mt-4 justify-between w-[90%] mx-auto">
              <button
                className="bg-[#00943F] text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => navigate("/acceptedinvite")}
              >
                Accept to join
              </button>
              <button className="border font-[400] border-gray-400 text-gray-600 px-4 py-2 rounded-lg text-sm">
                Decline Invitation
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InviteCirkleDetailsModal;
