// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import CircularProgress from "./CircularProgress";
// import PayoutCard from "./PayoutCard";
// import axiosInstance from "../../service";
// import { FadeLoader } from "react-spinners";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import MultiEmailInput from "../Common/multiEmailInput";

// const EditCirkleModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal,openModal } = useModal();
//   const [cirkleData, setCirkleData] = useState("");
//   const [isPublic, setIsPublic] = useState(true);
//   const [privacy, setPrivacy] = useState("public");
//   const navigate = useNavigate();
//   const [emails, setEmails] = useState([]);

//   useEffect(() => {
//     if (isModalOpen && modalType === "edit") {
//       const fetchData = async () => {
//         try {
//           const cirkleId = modalData;
//           const response = await axiosInstance.get(`/cirkles/${cirkleId}`);
//           if (response.data.success) {
//             setCirkleData(response.data.data);
//             console.log(response.data.data);
//           }
//         } catch (error) {
//           console.error("Error fetching data:", error);
//           if (error.response?.data?.message) {
//             toast.error(error.response.data.message);
//           } else {
//             toast.error("An error occurred. Please try again.");
//           }
//         }
//       };

//       fetchData();
//     }
//   }, [isModalOpen, modalType]);

//   if (!isModalOpen || modalType !== "edit") return null;

//   const data = {
//     title: cirkleData.name,
//     description: cirkleData.description,
//     image: "/images/circlepeople.svg",
//     groupName: "Hyderabad Pharmacist Union",
//     payoutAmount: "420,000",
//     amount: "420,000",
//     dateRange: "August 2024 - February 2025",
//     members: [
//       {
//         image: "/images/person1.svg",
//         name: "Priya",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person2.svg",
//         name: "Ravi",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person3.svg",
//         name: "Lyla",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person4.svg",
//         name: "John",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person5.svg",
//         name: "Hana",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person6.svg",
//         name: "Steven",
//         memberDate: "Aug, 2024",
//       },
//     ],
//     payoutDate: "25th of Nov 2024",
//     cirkleAmount: "60,000",
//     currency: "/images/green-currency.svg",
//   };

//     const handleEmailsChange = (updatedEmails) => {
//       setEmails(updatedEmails); // Update the parent state with the latest emails
//       // console.log("Emails from MultiEmailInput:", updatedEmails); // Log or use the emails as needed
//     };

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50 ">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }} // Start off-screen
//         animate={{ y: 0, opacity: 1 }} // Slide into view
//         exit={{ y: "100%", opacity: 0 }} // Slide out when unmounted
//         transition={{
//           duration: 0.5,
//           ease: "easeInOut",
//         }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[80%] bg-white overflow-scroll"
//       >
//         <div className=" pb-10 rounded-lg max-w-md w-full">
//           <>
//             {/* Second Case */}

//             {/* Head */}
//             <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl mb-5 sticky top-0">
//               <img
//                 src="/images/arrowback.svg"
//                 alt="Circle Icon"
//                 // onClick={handlePrev}
//                 onClick={() => openModal("detail",cirkleData.id)}
//               />

//               <p className="text-[18px] font-[400]">Edit Cirkle</p>
//               <button
//                 // onClick={closeModal}
//                 onClick={() => openModal("detail",cirkleData.id)}
//                 className="text-gray-500 float-right"
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                     stroke="#141B34"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="w-[90%] mx-auto mb-5 border-y  py-4">
//               <div className=" flex justify-between mb-3">
//                 <div className=" text-[12px] flex items-center space-x-2 pl-3">
//                   <img
//                     src="/images/person4.svg"
//                     alt=""
//                     srcset=""
//                     className="h-10"
//                   />

//                   <div>
//                     <h1>Bhaavik Arhaan</h1>
//                     <p>bhaavik.arhaan@xyz.com</p>
//                   </div>
//                 </div>

//                 <div className="p-4 flex space-x-3">
//                   <img src="/images/crown.svg" alt="" srcset="" />
//                   <p>owner</p>
//                 </div>
//               </div>

//               <div>
//                 <p className=" text-[10.5px]">Invite Members</p>

//                 <div className="flex justify-between">
//                   <MultiEmailInput onEmailsChange={handleEmailsChange} />
//                 </div>
//               </div>
//             </div>

//             <div className="flex w-[70%] mx-auto justify-between">
//               <div className="px-2 py-2 border rounded-lg flex items-center justify-evenly w-[45%]">
//                 <img src="/images/copy.svg" alt="" srcset="" />

//                 <p className="text-[10.5px]">Copy Link</p>
//               </div>

//               <div className="px-2 py-2 border rounded-lg flex items-center justify-evenly w-[45%]">
//                 <img src="/images/share.svg" alt="" srcset="" />

//                 <p className="text-[10.5px]">Share Link</p>
//               </div>
//             </div>

//             {/* Member Payment Schedule */}

//             <div className="mb-2">
//               <div className="">
//                 <div className="p-5 flex justify-between">
//                   {/* <p>Member Payment Schedule</p> */}

//                   <img src="/images/badge.svg" alt="" srcset="" />
//                 </div>

//                 <div className="flex justify-between px-5">
//                   <img src="/images/person4.svg" alt="" srcset="" />

//                   <img
//                     src="/images/person1.svg"
//                     alt=""
//                     srcset=""
//                     className="opacity-[0.1]"
//                   />

//                   <img
//                     src="/images/person2.svg"
//                     alt=""
//                     srcset=""
//                     className="opacity-[0.1]"
//                   />

//                   <img
//                     src="/images/person3.svg"
//                     alt=""
//                     srcset=""
//                     className="opacity-[0.1]"
//                   />

//                   <img
//                     src="/images/person5.svg"
//                     alt=""
//                     srcset=""
//                     className="opacity-[0.1]"
//                   />

//                   <img
//                     src="/images/person6.svg"
//                     alt=""
//                     srcset=""
//                     className="opacity-[0.1]"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* public and private section */}

//             <div className="flex flex-col items-center justify-center  rounded-md w-[100%]">
//               {/* Toggle Buttons */}
//               <div className="flex bg-gray-200 rounded-lg mb-4 p-1">
//                 <button
//                   className={`px-4 py-2 rounded-md text-[10.5px] ${
//                     isPublic
//                       ? "bg-white text-black font-medium shadow"
//                       : "bg-gray-200 text-gray-500"
//                   }`}
//                   onClick={() => {
//                     setIsPublic(true);
//                     setPrivacy("public");
//                   }}
//                 >
//                   Public Cirkle
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded-md text-[10.5px] ${
//                     !isPublic
//                       ? "bg-white text-black font-medium shadow"
//                       : "bg-gray-200 text-gray-500"
//                   }`}
//                   onClick={() => {
//                     setIsPublic(false);
//                     setPrivacy("private");
//                   }}
//                 >
//                   Private Cirkle
//                 </button>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 text-center text-[10.5px] mb-6">
//                 {isPublic
//                   ? "Public - Visible to all Users, members request to join"
//                   : "Private - Invitation-only via the admin's direct invites"}
//               </p>

//               {/* Confirm Button */}
//               <button
//                 className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg w-[80%] mx-auto transition"
//                 // onClick={() => {
//                 //   handleSubmit();
//                 // }}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default EditCirkleModal;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MultiEmailInput from "../Common/multiEmailInput";
import axiosInstance from "../../service";

const EditCirkleModal = () => {
  const { isModalOpen, modalType, modalData, closeModal, openModal } =
    useModal();
  const [cirkleData, setCirkleData] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [privacy, setPrivacy] = useState("public");
  const [emails, setEmails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen && modalType === "edit") {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get(`/cirkles/${modalData}`);
          if (response.data.success) {
            setCirkleData(response.data.data);
            setPrivacy(response.data.data.privacy);
            setIsPublic(response.data.data.privacy === "public");
            setEmails(response.data.data.members || []);
            console.log(response.data.data)
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.error(
            error.response?.data?.message ||
              "An error occurred. Please try again."
          );
        }
      };
      fetchData();
    }
  }, [isModalOpen, modalType]);

  if (!isModalOpen || modalType !== "edit") return null;

  const handleEmailsChange = (updatedEmails) => {
    setEmails(updatedEmails);
  };

  const handleSubmit = async () => {
    try {
      const updatedData = {
        name: cirkleData.name,
        members: emails,
        description: cirkleData.description,
        privacy,
      };

      const response = await axiosInstance.put(
        `https://fundcirkle.techr.me/api/cirkles/${cirkleData.id}`,
        updatedData
      );

      if (response.data.success) {
        toast.success("Cirkle updated successfully!");
        openModal("detail", cirkleData.id);
      }
    } catch (error) {
      console.error("Error updating Cirkle:", error);
      toast.error(error.response?.data?.message || "Failed to update Cirkle.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[80%] bg-white overflow-scroll"
      >
        <div className="pb-10 rounded-lg max-w-md w-full">
          <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl mb-5 sticky top-0">
            <img
              src="/images/arrowback.svg"
              alt="Back"
              onClick={() => openModal("detail", cirkleData.id)}
            />
            <p className="text-[18px] font-[400]">Edit Cirkle</p>
            <button
              onClick={() => openModal("detail", cirkleData.id)}
              className="text-gray-500"
            >
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="w-[90%] mx-auto mb-5  py-4">
            <div className=" flex justify-between mb-3">
              <div className=" text-[12px] flex items-center space-x-2 pl-3">
                <img
                  src="/images/person4.svg"
                  alt=""
                  srcset=""
                  className="h-10"
                />

                <div>
                  <h1>Bhaavik Arhaan</h1>
                  <p>bhaavik.arhaan@xyz.com</p>
                </div>
              </div>

              <div className="p-4 flex space-x-3">
                <img src="/images/crown.svg" alt="" srcset="" />
                <p>owner</p>
              </div>
            </div>

            <div className="w-[100%] mx-auto mb-5 border-y py-4">
              <p className="text-[10.5px]">Invite Members</p>
              <MultiEmailInput
                onEmailsChange={handleEmailsChange}
                initialEmails={emails}
              />
            </div>

            <div className="flex flex-col items-center justify-center rounded-md w-[100%]">
              <div className="flex bg-gray-200 rounded-lg mb-4 p-1">
                <button
                  className={`px-4 py-2 rounded-md text-[10.5px] ${
                    isPublic
                      ? "bg-white text-black font-medium shadow"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  onClick={() => {
                    setIsPublic(true);
                    setPrivacy("public");
                  }}
                >
                  Public Cirkle
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-[10.5px] ${
                    !isPublic
                      ? "bg-white text-black font-medium shadow"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  onClick={() => {
                    setIsPublic(false);
                    setPrivacy("private");
                  }}
                >
                  Private Cirkle
                </button>
              </div>

              <p className="text-gray-600 text-center text-[10.5px] mb-6">
                {isPublic
                  ? "Public - Visible to all Users, members request to join"
                  : "Private - Invitation-only via the admin's direct invites"}
              </p>

              <button
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg w-[100%] mx-auto transition"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EditCirkleModal;
