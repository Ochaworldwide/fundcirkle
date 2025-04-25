import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MultiEmailInput from "../Common/multiEmailInput";
import axiosInstance, { BASE_URL } from "../../service";
import { toastConfig } from "../../constants/toastConfig";
import { UserContext } from "../../contexts/userDetails";
import { Reorder } from "framer-motion";

const EditCirkleModal = () => {
  const { isModalOpen, modalType, modalData, closeModal, openModal } =
    useModal();
  const [cirkleData, setCirkleData] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [privacy, setPrivacy] = useState("public");
  const [emails, setEmails] = useState([]);
  const [ownerName, setOwnerName] = useState();
  const [ownerEmail, setOwnerEmail] = useState();
  const navigate = useNavigate();
  const { user, refetchUser } = useContext(UserContext);
  const { showStatusReport } = useModal();
  const [showOptions, setShowOptions] = useState(false);
  const initialMembers = [
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
  ];
  const [members, setMembers] = useState([]);

  const getCirkleMembers = async () => {
    try {
      const response = await axiosInstance.get(`/cirkles/${modalData}/members`);
      // return response.data; // assuming the response is an array of members
      setMembers(response.data.data)
    } catch (error) {
      console.error("Failed to fetch Cirkle members:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (modalData) {
      getCirkleMembers();
    }
  }, [modalData]);

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
            setOwnerName(response.data.data.owner_details.name);
            setOwnerEmail(response.data.data.owner.email);
            console.log(response.data.data);
            console.log(members)
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          // toast.error(
          //   error.response?.data?.message ||
          //     "An error occurred. Please try again.",
          //   { ...toastConfig }
          // );
          showStatusReport(
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
        ...(cirkleData.description && { description: cirkleData.description }),
        // description: cirkleData.description,
        privacy,
      };

      const response = await axiosInstance.put(
        `https://fundcirkle.techr.me/api/cirkles/${cirkleData.id}`,
        updatedData
      );

      if (response.data.success) {
        // toast.success("Cirkle updated successfully!", { ...toastConfig });
        showStatusReport("Cirkle updated successfully!");
        openModal("detail", cirkleData.id);
      }
    } catch (error) {
      console.error("Error updating Cirkle:", error);
      // toast.error(error.response?.data?.message || "Failed to update Cirkle.", {
      //   ...toastConfig,
      // });

      showStatusReport(
        error.response?.data?.message || "Failed to update Cirkle."
      );
    }
  };

  const handleShare = async () => {
    const data = {
      type: "share",
      text: `You have been invited to join a cirkle. Please follow the link to accept.`,
      url: `${BASE_URL}/invite/${cirkleData.id}`, // replace with your actual link
    };

    window.ReactNativeWebView.postMessage(JSON.stringify(data));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[90%] bg-white overflow-scroll"
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
                  src={user.profile_pic}
                  alt="Profile"
                  className=" h-10 w-10 rounded-full"
                />

                <div>
                  <h1>{ownerName}</h1>
                  <p>{ownerEmail}</p>
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

            {/* <div className="flex flex-wrap w-[100%] mb-7 justify-between overflow-scroll mx-auto">
              {members.map((member, index) => (
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
            </div> */}

            <Reorder.Group
              axis="x"
              values={members}
              onReorder={setMembers}
              className="flex flex-wrap w-full mb-7 space-x-4 overflow-scroll mx-auto"
            >
              {members.map((member) => (
                <Reorder.Item
                  key={member.name}
                  value={member}
                  className="flex flex-col items-center cursor-grab active:cursor-grabbing"
                >
                  <img
                    src={member.profile_pic}
                    alt={member.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-xs text-gray-500">{member.first_name}</p>
                  <p className="bg-[#00AAFF] rounded-sm px-1 py-[1px] text-[8px] text-white">
                    {member.pivot.next_payment}
                  </p>
                </Reorder.Item>
              ))}
            </Reorder.Group>

            <div className="flex w-[70%] mx-auto justify-between mb-10">
              <div
                className="px-2 py-2 cursor-pointer border rounded-lg flex items-center justify-evenly w-[45%]"
                onClick={() => {
                  const linkToCopy = `${BASE_URL}/invite/${cirkleData.id}`; // Replace with your actual link
                  navigator.clipboard
                    .writeText(linkToCopy)
                    .then(() => {
                      alert("Link copied to clipboard!");
                    })
                    .catch((err) => {
                      console.error("Failed to copy: ", err);
                    });
                }}
              >
                <img src="/images/copy.svg" alt="Copy Icon" />
                <p className="text-[10.5px]">Copy Link</p>
              </div>

              <div
                className="px-2 cursor-pointer py-2 border rounded-lg flex items-center justify-evenly w-[45%]"
                onClick={() => {
                  handleShare();
                }}
              >
                <img src="/images/share.svg" alt="" srcset="" />

                <p className="text-[10.5px]">Share Link</p>
              </div>
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
