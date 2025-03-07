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
