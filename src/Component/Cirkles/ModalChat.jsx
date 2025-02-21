// import React from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();

//   if (!isModalOpen || modalType !== "chat") return null;

//   const profileImg = '/images/profileImg.svg'

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }} // Start off-screen
//         animate={{ y: 0, opacity: 1 }} // Slide into view
//         exit={{ y: "100%", opacity: 0 }} // Slide out when unmounted
//         transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//         // transition={{ type: "spring", stiffness: 100, damping: 15 }}
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="" srcset="" />

//           {/* Header */}
//           <div className=" text-black  py-2 ">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>

//           {/* Close button */}
//           <button
//             onClick={closeModal}
//             className=" text-gray-600 hover:text-gray-800"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Chat contents */}
//         <div className="p-4 space-y-2 overflow-y-auto h-96">
//           {/* Chat content */}
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
//           </div>
//           {/* Additional contents */}
//         </div>

//         {/* Input */}
//         <div className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto  rounded-lg mb-1">
//           <input
//             type="text"
//             placeholder="Message..."
//             className=" p-2 rounded-md w-[70%] outline-none"
//           />

//           <div className="space-x-3 flex ">
//             <button className="">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M12 19V23"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M8 23H16"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </button>
//             <button className="">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M9 9H9.01"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M15 9H15.01"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </button>

//             <button className="">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M21 15L16 10L5 21"
//                   stroke="#828282"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();
//   const [content, setMessage] = useState("");

//   if (!isModalOpen || modalType !== "chat") return null;

//   const profileImg = "/images/profileImg.svg";

//   const handleSendMessage = async () => {
//     if (!content.trim()) return;

//     const formData = new FormData();
//     formData.append("content", content);

//     const cirkleId = modalData.cirkleid;

//     try {
//       const response = await axiosInstance.post(
//         `/cirkles/${cirkleId}/content`,
//         formData
//       );
//       if (response.status === 200) {
//         setMessage("");
//       }
//     } catch (error) {
//       console.error("Error sending content:", error);
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="Profile" />
//           <div className="text-black py-2">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="p-4 space-y-2 overflow-y-auto h-96">
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
//           </div>
//         </div>

//         <div className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1">
//           <input
//             type="text"
//             placeholder="Message..."
//             className="p-2 rounded-md w-[70%] outline-none"
//             value={content}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={handleKeyPress}
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";
// import { FaSmile, FaMicrophone, FaImage } from "react-icons/fa";

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();
//   const [content, setMessage] = useState("");
//   const [image, setImage] = useState(null);

//   if (!isModalOpen || modalType !== "chat") return null;

//   const profileImg = "/images/profileImg.svg";

//   const handleSendMessage = async (event) => {
//     event.preventDefault();
//     if (!content.trim() && !image) return;

//     const formData = new FormData();
//     formData.append("content", content);
//     if (image) {
//       formData.append("image", image);
//     }

//     const cirkleId = modalData.cirkleid;

//     try {
//       const response = await axiosInstance.post(
//         `/cirkles/${cirkleId}/content`,
//         formData
//       );
//       if (response.status === 200) {
//         setMessage("");
//         setImage(null);
//       }
//     } catch (error) {
//       console.error("Error sending content:", error);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="Profile" />
//           <div className="text-black py-2">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="p-4 space-y-2 overflow-y-auto h-96">
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSendMessage}
//           className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
//         >
//           <button
//             type="button"
//             className="p-2 text-gray-600 hover:text-gray-800"
//           >
//             <FaSmile size={24} />
//           </button>
//           <input
//             type="text"
//             placeholder="Message..."
//             className="p-2 rounded-md w-[50%] outline-none"
//             value={content}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden"
//             id="imageUpload"
//           />
//           <label
//             htmlFor="imageUpload"
//             className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
//           >
//             <FaImage size={24} />
//           </label>
//           <button
//             type="button"
//             className="p-2 text-gray-600 hover:text-gray-800"
//           >
//             <FaMicrophone size={24} />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";
// import { FaMicrophone, FaImage } from "react-icons/fa";

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();
//   const [content, setMessage] = useState("");
//   const [image, setImage] = useState(null);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [recording, setRecording] = useState(false);
//   let mediaRecorder;
//   let audioChunks = [];

//   if (!isModalOpen || modalType !== "chat") return null;

//   const profileImg = "/images/profileImg.svg";

//   const handleSendMessage = async (event) => {
//     event.preventDefault();
//     if (!content.trim() && !image && !audioBlob) return;

//     const formData = new FormData();
//     formData.append("content", content);
//     if (image) {
//       formData.append("image", image);
//     }
//     if (audioBlob) {
//       formData.append("audio", audioBlob, "audio.mp3");
//     }

//     const cirkleId = modalData.cirkleid;

//     try {
//       const response = await axiosInstance.post(
//         `/cirkles/${cirkleId}/content`,
//         formData
//       );
//       if (response.status === 200) {
//         setMessage("");
//         setImage(null);
//         setAudioBlob(null);
//       }
//     } catch (error) {
//       console.error("Error sending content:", error);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const startRecording = async () => {
//     setRecording(true);
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorder = new MediaRecorder(stream);
//     mediaRecorder.start();

//     mediaRecorder.ondataavailable = (event) => {
//       audioChunks.push(event.data);
//     };

//     mediaRecorder.onstop = () => {
//       const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
//       setAudioBlob(audioBlob);
//       audioChunks = [];
//       setRecording(false);
//     };
//   };

//   const stopRecording = () => {
//     mediaRecorder.stop();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="Profile" />
//           <div className="text-black py-2">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="p-4 space-y-2 overflow-y-auto h-96">
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSendMessage}
//           className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
//         >
//           <input
//             type="text"
//             placeholder="Message..."
//             className="p-2 rounded-md w-[70%] outline-none"
//             value={content}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden"
//             id="imageUpload"
//           />
//           <label
//             htmlFor="imageUpload"
//             className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
//           >
//             <FaImage size={24} />
//           </label>
//           <button
//             type="button"
//             className="p-2 text-gray-600 hover:text-gray-800"
//             onMouseDown={startRecording}
//             onMouseUp={stopRecording}
//           >
//             <FaMicrophone size={24} />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";
// import { FaMicrophone, FaImage } from "react-icons/fa";

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();
//   const [content, setMessage] = useState("");
//   const [image, setImage] = useState(null);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [recording, setRecording] = useState(false);
//   let mediaRecorder;
//   let audioChunks = [];

//   if (!isModalOpen || modalType !== "chat") return null;

//   const profileImg = "/images/profileImg.svg";

//   const handleSendMessage = async (event) => {
//     event.preventDefault();
//     if (!content.trim() && !image && !audioBlob) return;

//     const formData = new FormData();
//     formData.append("content", content);
//     if (image) {
//       formData.append("image", image);
//     }
//     if (audioBlob) {
//       formData.append("audio", audioBlob, "audio.mp3");
//     }

//     const cirkleId = modalData.cirkleid;

//     try {
//       const response = await axiosInstance.post(
//         `/cirkles/${cirkleId}/content`,
//         formData
//       );
//       if (response.status === 200) {
//         setMessage("");
//         setImage(null);
//         setAudioBlob(null);
//       }
//     } catch (error) {
//       console.error("Error sending content:", error);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const startRecording = async () => {
//     setRecording(true);
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorder = new MediaRecorder(stream);
//     mediaRecorder.start();

//     mediaRecorder.ondataavailable = (event) => {
//       audioChunks.push(event.data);
//     };

//     mediaRecorder.onstop = () => {
//       const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
//       setAudioBlob(audioBlob);
//       audioChunks = [];
//       setRecording(false);
//     };
//   };

//   const stopRecording = () => {
//     mediaRecorder.stop();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="Profile" />
//           <div className="text-black py-2">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="p-4 space-y-2 overflow-y-auto h-96">
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSendMessage}
//           className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
//         >
//           <input
//             type="text"
//             placeholder="Message..."
//             className="p-2 rounded-md w-[50%] outline-none"
//             value={content}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden"
//             id="imageUpload"
//           />
//           <label
//             htmlFor="imageUpload"
//             className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
//           >
//             <FaImage size={24} />
//           </label>
//           <button
//             type="button"
//             className="p-2 text-gray-600 hover:text-gray-800"
//             onMouseDown={startRecording}
//             onMouseUp={stopRecording}
//           >
//             <FaMicrophone size={24} />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";
// import {
//   FaMicrophone,
//   FaTrash,
//   FaPause,
//   FaPlay,
//   FaPaperPlane,
// } from "react-icons/fa";

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();
//   const [content, setMessage] = useState("");
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [recording, setRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState(null);
//   const [recordTime, setRecordTime] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const mediaRecorderRef = useRef(null);
//   const intervalRef = useRef(null);
//   let audioChunks = [];

//   if (!isModalOpen || modalType !== "chat") return null;

//   const profileImg = "/images/profileImg.svg";

//   const handleSendMessage = async (event) => {
//     event.preventDefault();
//     if (!content.trim() && !audioBlob) return;

//     const formData = new FormData();
//     formData.append("content", content);
//     if (audioBlob) {
//       formData.append("audio", audioBlob, "audio.mp3");
//     }

//     const cirkleId = modalData.cirkleid;

//     try {
//       const response = await axiosInstance.post(
//         `/cirkles/${cirkleId}/content`,
//         formData
//       );
//       if (response.status === 200) {
//         setMessage("");
//         setAudioBlob(null);
//         setAudioURL(null);
//       }
//     } catch (error) {
//       console.error("Error sending content:", error);
//     }
//   };

//   const startRecording = async () => {
//     setRecording(true);
//     setRecordTime(0);
//     setPaused(false);
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorderRef.current = new MediaRecorder(stream);
//     mediaRecorderRef.current.start();

//     mediaRecorderRef.current.ondataavailable = (event) => {
//       audioChunks.push(event.data);
//     };

//     mediaRecorderRef.current.onstop = () => {
//       const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
//       setAudioBlob(audioBlob);
//       setAudioURL(URL.createObjectURL(audioBlob));
//       audioChunks = [];
//       setRecording(false);
//     };

//     intervalRef.current = setInterval(() => {
//       setRecordTime((prev) => prev + 1);
//     }, 1000);
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//       clearInterval(intervalRef.current);
//     }
//   };

//   const deleteRecording = () => {
//     setAudioBlob(null);
//     setAudioURL(null);
//     setRecording(false);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="Profile" />
//           <div className="text-black py-2">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="p-4 space-y-2 overflow-y-auto h-96">
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
//           </div>
//         </div>

//         {recording && (
//           <div className="flex items-center justify-between p-2 border bg-gray-200 w-[95%] mx-auto rounded-lg mb-1">
//             <span className="text-gray-800">{recordTime}s</span>
//             <button onClick={deleteRecording} className="text-red-600">
//               <FaTrash size={24} />
//             </button>
//             <button onClick={stopRecording} className="text-red-600">
//               <FaPause size={24} />
//             </button>
//             <button onClick={handleSendMessage} className="text-green-600">
//               <FaPaperPlane size={24} />
//             </button>
//           </div>
//         )}

//         <form
//           onSubmit={handleSendMessage}
//           className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
//         >
//           <input
//             type="text"
//             placeholder="Message..."
//             className="p-2 rounded-md w-[50%] outline-none"
//             value={content}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <button
//             type="button"
//             className="p-2 text-gray-600 hover:text-gray-800"
//             onClick={startRecording}
//           >
//             <FaMicrophone size={24} />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";
// import { FaMicrophone, FaImage, FaTrash, FaPause, FaPaperPlane } from "react-icons/fa";

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();
//   const [content, setMessage] = useState("");
//   const [image, setImage] = useState(null);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [recording, setRecording] = useState(false);
//   const [showAudioControls, setShowAudioControls] = useState(false);
//   let mediaRecorder;
//   let audioChunks = [];

//   if (!isModalOpen || modalType !== "chat") return null;

//   const profileImg = "/images/profileImg.svg";

//   const handleSendMessage = async (event) => {
//     event.preventDefault();
//     if (!content.trim() && !image && !audioBlob) return;

//     const formData = new FormData();
//     formData.append("content", content);
//     if (image) {
//       formData.append("image", image);
//     }
//     if (audioBlob) {
//       formData.append("audio", audioBlob, "audio.mp3");
//     }

//     const cirkleId = modalData.cirkleid;

//     try {
//       const response = await axiosInstance.post(
//         `/cirkles/${cirkleId}/content`,
//         formData
//       );
//       if (response.status === 200) {
//         setMessage("");
//         setImage(null);
//         setAudioBlob(null);
//         setShowAudioControls(false);
//       }
//     } catch (error) {
//       console.error("Error sending content:", error);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const startRecording = async () => {
//     setRecording(true);
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorder = new MediaRecorder(stream);
//     mediaRecorder.start();

//     mediaRecorder.ondataavailable = (event) => {
//       audioChunks.push(event.data);
//     };

//     mediaRecorder.onstop = () => {
//       const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
//       setAudioBlob(audioBlob);
//       audioChunks = [];
//       setRecording(false);
//     };
//   };

//   const stopRecording = () => {
//     mediaRecorder.stop();
//   };

//   const handleAudioIconClick = () => {
//     setShowAudioControls(!showAudioControls);
//   };

//   const handleDeleteAudio = () => {
//     setAudioBlob(null);
//     setShowAudioControls(false);
//   };

//   const handlePauseRecording = () => {
//     if (mediaRecorder && mediaRecorder.state === "recording") {
//       mediaRecorder.pause();
//     } else if (mediaRecorder && mediaRecorder.state === "paused") {
//       mediaRecorder.resume();
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="Profile" />
//           <div className="text-black py-2">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="p-4 space-y-2 overflow-y-auto h-96">
//           <div className="flex justify-start">
//             <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">Oh?</div>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSendMessage}
//           className="flex fixed bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
//         >
//           <input
//             type="text"
//             placeholder="Message..."
//             className="p-2 rounded-md w-[50%] outline-none"
//             value={content}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden"
//             id="imageUpload"
//           />
//           <label
//             htmlFor="imageUpload"
//             className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
//           >
//             <FaImage size={24} />
//           </label>
//           <button
//             type="button"
//             className="p-2 text-gray-600 hover:text-gray-800"
//             onClick={handleAudioIconClick}
//           >
//             <FaMicrophone size={24} />
//           </button>
//         </form>

//         {showAudioControls && (
//           <div className="fixed bottom-16 left-0 right-0 mx-auto max-w-md p-2 bg-white border rounded-lg flex justify-between items-center">
//             <button
//               type="button"
//               className="p-2 text-gray-600 hover:text-gray-800"
//               onClick={handleDeleteAudio}
//             >
//               <FaTrash size={24} />
//             </button>
//             <button
//               type="button"
//               className="p-2 text-gray-600 hover:text-gray-800"
//               onClick={handlePauseRecording}
//             >
//               <FaPause size={24} />
//             </button>
//             <button
//               type="button"
//               className="p-2 text-gray-600 hover:text-gray-800"
//               onClick={handleSendMessage}
//             >
//               <FaPaperPlane size={24} />
//             </button>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

// import React, { useContext, useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";
// import { FaImage, FaPaperPlane } from "react-icons/fa";
// import { UserContext } from "../../contexts/userDetails";

// const Message = ({ message, isUser }) => {
//   return (
//     <div className={flex w-full ${isUser ? "justify-end" : ""}}>
//       <div className={bg-gray-200 text-gray-800 p-2 py-1 w-fit rounded-lg}>
//         <span className="font-bold text-sm inline-block mb-2">{${message.user.first_name} ${message.user.first_name}}</span>
//         <br />
//         {message.type == "text" && message.content}
//         {message.type == "image" && (
//           <img
//             src={
//               message.file_url ??
//               "https://picsum.photos/200/300?i=" + message.id
//             }
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// const ChatModal = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();
//   const [content, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [image, setImage] = useState(null);

//   const profileImg = "/images/profileImg.svg";
//   const cirkleId = modalData?.cirkleid;

//   const msgRef = useRef();

//   const { user } = useContext(UserContext);

//   const getMessages = () => {
//     if (!cirkleId) return;

//     axiosInstance
//       .get(/cirkles/${cirkleId}/messages)
//       .then((response) => setMessages(response.data.data?.reverse()))
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     getMessages();
//   }, [cirkleId]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       getMessages();
//     }, 3000);
//     // return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (msgRef.current) {
//       setTimeout(() => {
//         console.log(msgRef.current);
//         msgRef.current.scrollTop = msgRef.current.scrollHeight;
//       }, 500);
//     }
//   }, [messages]);

//   const handleSendMessage = async (event) => {
//     event.preventDefault();
//     if (!content.trim() && !image) return;

//     const formData = new FormData();
//     formData.append("content", content);
//     if (image) {
//       formData.append("file", image);
//       formData.append("type", "image"); // Specify the type as "image" if an image is included
//     } else {
//       formData.append("type", "text"); // Specify the type as "text" if only a content is sent
//     }

//     try {
//       const response = await axiosInstance.post(
//         /cirkles/${cirkleId}/message,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Axios sets this automatically
//           },
//         }
//       );
//       if (response.status === 200) {
//         setMessage("");
//         getMessages();
//         setImage(null);
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   if (!isModalOpen || modalType !== "chat") return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed flex flex-col bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="flex w-[100%] border justify-between px-1 sticky top-0">
//           <img src={profileImg} alt="Profile" />
//           <div className="text-black py-2">
//             <p className="font-semibold">{modalData.name}</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div ref={msgRef} className="p-4 space-y-2 border overflow-y-auto grow">
//           <div className="flex justify-start w-full flex-col gap-4">
//             {user &&
//               messages.map((msg, indx) => (
//                 <Message
//                   key={indx}
//                   message={msg}
//                   isUser={user.id == msg.user_id}
//                 />
//               ))}
//           </div>
//         </div>

//         <form
//           onSubmit={handleSendMessage}
//           className="flex bottom-0 items-center justify-between p-2 border w-[95%] mx-auto rounded-lg mb-1"
//         >
//           <input
//             type="text"
//             placeholder={image ? image.name : "Message..."}
//             className="p-2 rounded-md w-[70%] outline-none"
//             disabled={!!image}
//             value={image ? "" : content}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden "
//             id="imageUpload"
//           />
//           {!image ? (
//             <label
//               htmlFor="imageUpload"
//               className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
//             >
//               <FaImage size={24} />
//             </label>
//           ) : (
//             <button onClick={() => setImage(null)}>
//               <FaClose />
//             </button>
//           )}
//           <button
//             type="submit"
//             className="p-2 text-gray-600 hover:text-gray-800"
//           >
//             <FaPaperPlane size={24} />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ChatModal;

import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import axiosInstance from "../../service";
import { FaImage, FaPaperPlane } from "react-icons/fa";
import { UserContext } from "../../contexts/userDetails";

const Message = ({ message, isUser }) => {
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : ""}`}>
      <div className={`bg-gray-200 text-gray-800 p-2 py-1 w-fit rounded-lg`}>
        <span className="font-bold text-sm inline-block mb-2">{`${message.user.first_name} ${message.user.first_name}`}</span>
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
        className="fixed flex flex-col bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
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
