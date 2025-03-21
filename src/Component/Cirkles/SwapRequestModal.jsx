import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import CircularProgress from "./CircularProgress";
import PayoutCard from "./PayoutCard";
import axiosInstance from "../../service";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AiOutlineDown } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toastConfig } from "../../constants/toastConfig";

const SwapRequestModal = () => {
  const { isModalOpen, modalType, modalData, closeModal, openModal } =
    useModal();
  const [cirkleData, setCirkleData] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [cirkleMembers, setCirkleMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen && modalType === "swap" && modalData) {
      const fetchData = async () => {
        try {
          const cirkleId = modalData;

          const [cirkleResponse, membersResponse] = await Promise.all([
            axiosInstance.get(`/cirkles/${cirkleId}`),
            axiosInstance.get(`/cirkles/${cirkleId}/members`),
          ]);

          if (cirkleResponse.data.success) {
            setCirkleData(cirkleResponse.data.data);
            console.log("Cirkle Data:", cirkleResponse.data.data);
          }

          if (membersResponse.data.success) {
            setCirkleMembers(membersResponse.data.data);
            console.log("Cirkle Members:", membersResponse.data.data);
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
  }, [
    isModalOpen,
    modalType,
    modalData,
    axiosInstance,
    toast,
    setCirkleData,
    setCirkleMembers,
  ]);

  if (!isModalOpen || modalType !== "swap") return null;

  const cirkleId = cirkleData?.id;

  const data = {
    title: cirkleData.name,
    description: cirkleData.description,
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

  const payoutData = {
    progress: { current: 2, total: 7 },
    payoutDate: "25th of Nov 2024",
    amount: cirkleData.contribution_amount,
    currency: "/images/currency.svg",
  };

  const members = [
    {
      name: "Rebecca Lee",
      month: "March",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "John Doe",
      month: "April",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      month: "May",
      image: "https://via.placeholder.com/50",
    },
  ];

  const handleClick = async () => {
    const payload = {
      user_id: selectedMember.id, // Replace with dynamic user ID
    };

    axiosInstance
      .post(`/cirkles/${cirkleId}/swap`, payload)
      .then((response) => {
        navigate("/goalachieved");
      })
      .catch((error) => console.error("Error posting data:", error))
      .finally(() => closeModal());    
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50 ">
      <motion.div
        initial={{ y: "100%", opacity: 0 }} // Start off-screen
        animate={{ y: 0, opacity: 1 }} // Slide into view
        exit={{ y: "100%", opacity: 0 }} // Slide out when unmounted
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[80%] bg-white overflow-scroll"
      >
        <div className=" pb-10 rounded-lg max-w-md w-full">
          <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl sticky top-0">
            <img src="/images/tricycle.svg" alt="" srcset="" />

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
            <div className="items-center mb-5 flex">
              <img
                src={data.image}
                alt="Group"
                className="w-12 h-12 rounded-full"
              />

              <h2 className="text-lg font-bold text-gray-800 mb-2 mx-auto">
                {data.title}
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">{data.description}</p>
            <div className="flex justify-between items-center border  border-[#00000066] rounded-lg text-[#00943F] font-bold mb-8 px-1">
              <div className="flex w-[50%] justify-evenly">
                <div className="mr-2">
                  <img src={data.currency} alt="" srcset="" />
                </div>
                <div className="">
                  <p>{data.amount}</p>
                  <p className="text-xs text-black">Payment Amount</p>
                </div>
              </div>

              <div className="py-5 text-black w-[45%]">
                <p className="text-[18px]">{data.dateRange}</p>
              </div>
            </div>

            <div className="w-[100%] mx-auto py-4">
              <label className="block text-sm font-semibold mb-4">
                Set A member to swap with:
              </label>

              <div className="relative">
                <select
                  className="w-full px-3 py-2 border text-sm border-[#00000066] bg-white rounded-lg appearance-none cursor-pointer outline-none"
                  // onChange={(e) =>
                  //   setSelectedMember(
                  //     cirkleMembers.find((m) => m.name === e.target.value)
                  //   )
                  // }
                  onChange={(e) =>
                    setSelectedMember(
                      cirkleMembers.find(
                        (m) => m.pivot.user_id.toString() === e.target.value
                      )
                    )
                  }
                >
                  <option>Select a Member</option>
                  {cirkleMembers.map((member) => (
                    <option
                      key={member.pivot.user_id}
                      value={member.pivot.user_id}
                    >
                      {member.first_name} {member.last_name}
                      {/* <span className="ml-auto">{member.month}</span> */}
                    </option>
                  ))}
                </select>
                <AiOutlineDown className="absolute top-3 right-3 text-gray-500" />
              </div>

              {selectedMember && (
                <div className="mt-4 p-4 border border-[#00000066] rounded-lg flex justify-between items-center gap-4">
                  <img
                    src={selectedMember.profile_pic}
                    alt={selectedMember.name}
                    className="w-12 h-12 rounded-full border"
                  />
                  <span className="text-lg font-medium">
                    {selectedMember.first_name} {selectedMember.last_name}
                  </span>
                  <BiCheckCircle className="text-green-500" />
                </div>
              )}

              <p className="mt-4 text-sm text-gray-600">
                Please note that your request needs to be accepted by the member
                for the new month to become active. You can only swap once for
                each Payment Cycle.
              </p>
            </div>

            <div className="flex  mt-4 justify-between w-[90%] mx-auto ">
              <button
                className="border font-[500] w-[90%]  border-gray-400 text-white bg-[#00943F] px-2 py-3 rounded-lg text-base mx-auto"
                onClick={() => {
                  handleClick();
                }}
              >
                Send Swap Request
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SwapRequestModal;
