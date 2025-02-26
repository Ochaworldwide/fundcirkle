import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import axiosInstance from "../../service";
import { FaImage, FaPaperPlane } from "react-icons/fa";
import { UserContext } from "../../contexts/userDetails";

const Message = ({ message, isUser }) => {
  return (
    <div className={`flex w-full ${isUser ? "justify-end " : ""}`}>
      <div
        className={` p-2 py-1 w-fit rounded-lg ${
          isUser ? "justify-end bg-[#004A1F] text-white" : "bg-[#E9E9EB] text-black"
        }`}
      >
        <span className="font-bold text-sm inline-block mb-2">{`${message.user.first_name} ${message.user.last_name}`}</span>
        <br />
        {message.type === "text" && message.content}
        {message.type === "image" && (
          <img
            src={
              message.file_url ??
              "https://picsum.photos/200/300?i=" + message.id
            }
          />
        )}
      </div>
    </div>
  );
};

const ChatModal = () => {
  const { isModalOpen, modalType, modalData, closeModal } = useModal();
  const [content, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);
  const profileImg = "/images/profileImg.svg";
  const cirkleId = modalData?.cirkleid;
  const msgRef = useRef();
  const { user } = useContext(UserContext);

  const getMessages = async () => {
    if (!cirkleId) return;

    try {
      const response = await axiosInstance.get(`/cirkles/${cirkleId}/messages`);
      const newMessages = response.data.data ?? [];

      if (newMessages.length > 0 && lastFetched !== newMessages[0].created_at) {
        setMessages(newMessages.reverse());
        setLastFetched(newMessages[0].created_at);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    if (cirkleId) getMessages();
  }, [cirkleId]);

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages();
    }, 10000);
    return () => clearInterval(interval);
  }, [lastFetched]);

  useEffect(() => {
    if (msgRef.current) {
      setTimeout(() => {
        msgRef.current.scrollTop = msgRef.current.scrollHeight;
      }, 500);
    }
  }, [messages]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (!content.trim() && !image) return;


    const formData = new FormData();
    formData.append("content", content);
    if (image) {
      formData.append("file", image);
      formData.append("type", "image");
    } else {
      formData.append("type", "text");
    }

    try {
      const response = await axiosInstance.post(
        `/cirkles/${cirkleId}/message`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.status === 200) {
        setMessage("");
        setImage(null);
        getMessages();
      }
    } catch (error) {
      console.error("Error sending message:", error);

    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  if (!isModalOpen || modalType !== "chat") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed flex flex-col bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[80%] bg-white overflow-scroll"
      >
        <div className="flex w-[100%] border justify-between px-1 sticky top-0">
          <img src={profileImg} alt="Profile" />
          <div className="text-black py-2">
            <p className="font-semibold">{modalData.name}</p>
            <p className="text-xs">Created by Bhaavik Arhaan</p>
          </div>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
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

        <div ref={msgRef} className="p-4 space-y-2 border overflow-y-auto grow">
          <div className="flex justify-start w-full flex-col gap-4">
            {user &&
              messages.map((msg, indx) => (
                <Message
                  key={indx}
                  message={msg}
                  isUser={user.id === msg.user_id}
                />
              ))}
          </div>
        </div>

        <form
          onSubmit={handleSendMessage}
          className="flex bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
        >
          <input
            type="text"
            placeholder={image ? image.name : "Message..."}
            className="p-2 rounded-md w-[70%] outline-none"
            disabled={!!image}
            value={image ? "" : content}
            onChange={(e) => setMessage(e.target.value)}
          />
          {!image ? (
            <label
              htmlFor="imageUpload"
              className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />
              <FaImage size={24} />
            </label>
          ) : (
            <button className="text-2xl" onClick={() => setImage(null)}>
              &times;
            </button>
          )}
          <button
            type="submit"
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <FaPaperPlane size={24} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ChatModal;
