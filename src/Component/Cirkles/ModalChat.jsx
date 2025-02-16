import React, { useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import axiosInstance from "../../service";
import { FaMicrophone, FaImage } from "react-icons/fa";

const ChatModal = () => {
  const { isModalOpen, modalType, modalData, closeModal } = useModal();
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [recording, setRecording] = useState(false);
  let mediaRecorder;
  let audioChunks = [];

  if (!isModalOpen || modalType !== "chat") return null;

  const profileImg = "/images/profileImg.svg";

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (!message.trim() && !image && !audioBlob) return;

    const formData = new FormData();
    formData.append("message", message);
    if (image) {
      formData.append("image", image);
    }
    if (audioBlob) {
      formData.append("audio", audioBlob, "audio.mp3");
    }

    const cirkleId = modalData.cirkleid;

    try {
      const response = await axiosInstance.post(
        `/cirkles/${cirkleId}/message`,
        formData
      );
      if (response.status === 200) {
        setMessage("");
        setImage(null);
        setAudioBlob(null);
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

  const startRecording = async () => {
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
      setAudioBlob(audioBlob);
      audioChunks = [];
      setRecording(false);
    };
  };

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
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

        <div className="p-4 space-y-2 overflow-y-auto h-96">
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
          </div>
        </div>

        <form
          onSubmit={handleSendMessage}
          className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
        >
          <input
            type="text"
            placeholder="Message..."
            className="p-2 rounded-md w-[70%] outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <FaImage size={24} />
          </label>
          <button
            type="button"
            className="p-2 text-gray-600 hover:text-gray-800"
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
          >
            <FaMicrophone size={24} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ChatModal;






