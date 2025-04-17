import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import CircularProgress from "./CircularProgress";
import PayoutCard from "./PayoutCard";
import axiosInstance from "../../service";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";

const CirkleDetailsModal = () => {
  
  const { isModalOpen, modalType, modalData, closeModal,openModal } = useModal();
  const [cirkleData, setCirkleData] = useState("");



  useEffect(() => {
    if (isModalOpen && modalType === "detail") {
      const fetchData = async () => {
        try {
          const cirkleId = modalData;
          const response = await axiosInstance.get(`/cirkles/${cirkleId}`);
          if (response.data.success) {
            setCirkleData(response.data.data);
            console.log(response.data.data)
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

  if (!isModalOpen || modalType !== "detail") return null;


  const transferData = cirkleData?.id;
  console.log(cirkleData)

  const data = {
    title: cirkleData.name,
    description:cirkleData.description,
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
    progress: { current: 2, total: cirkleData?.member_count },
    payoutDate: cirkleData?.next_receiving_date,
    amount: cirkleData.contribution_amount,
    currency: "/images/currency.svg",
  };

  const rawDate = cirkleData?.created_at;
  const date = new Date(rawDate);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long", // "March"
    year: "numeric", // "2025"
  });

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
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[90%] bg-white overflow-scroll"
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
                onClick={() => openModal("edit", transferData)}
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

            <div className="flex justify-between items-center border rounded-lg text-[#00943F] font-bold mb-8 px-2">
              <div className="flex w-[50%] justify-evenly">
                <div className="mr-2">
                  <img src={data.currency} alt="" srcset="" />
                </div>
                <div className="">
                  <p>{cirkleData?.contribution_amount}</p>
                  <p className="text-xs text-black">Payment Amount</p>
                </div>
              </div>

              <div className="py-5 text-black w-[45%] ">
                <p className="text-[18px] text-right">{formattedDate}</p>
              </div>
            </div>

            <div className="flex flex-wrap w-[100%] mb-7 justify-between overflow-scroll mx-auto">
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

            <div className="mb-10">
              <PayoutCard data={payoutData} />
            </div>

            <div className="flex  mt-4 justify-center w-[90%] mx-auto">
              {/* <button className="bg-[#00943F] text-white px-2 py-2 rounded-lg text-sm">
                Pay Pie for October
              </button> */}
              <button
                className="border font-[400] border-gray-400 bg-[#00943F] text-white px-5 py-3 rounded-lg text-sm"
                onClick={() => openModal("swap", transferData)}
              >
                Swap Payment Month
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CirkleDetailsModal;



