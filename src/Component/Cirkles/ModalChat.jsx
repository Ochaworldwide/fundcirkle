// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const ModalChat = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Button to open the modal */}
//       <button
//         onClick={toggleModal}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600"
//       >
//         Message
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <motion.div
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -100, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 100, damping: 15 }}
//           className="fixed top-0 left-0 right-0 bg-white shadow-lg rounded-lg mx-auto max-w-md mt-4 z-50"
//         >
//           {/* Header */}
//           <div className="bg-purple-600 text-white text-center py-2 rounded-t-lg">
//             <p className="font-semibold">Hyderabad Teaching Hospital</p>
//             <p className="text-xs">Created by Bhaavik Arhaan</p>
//           </div>

//           {/* Chat messages */}
//           <div className="p-4 space-y-2 overflow-y-auto max-h-80">
//             <div className="flex justify-start">
//               <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
//                 Oh?
//               </div>
//             </div>
//             <div className="flex justify-start">
//               <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
//                 Cool
//               </div>
//             </div>
//             <div className="flex justify-start">
//               <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
//                 How does it work?
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <div className="bg-purple-500 text-white p-2 rounded-lg">
//                 You just edit any text to type in the conversation you want to
//                 show, and delete any bubbles you don't want to use. Boom!
//               </div>
//             </div>
//             <div className="flex justify-start">
//               <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
//                 Hmmm
//               </div>
//             </div>
//             <div className="flex justify-start">
//               <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
//                 I think I get it
//               </div>
//             </div>
//             <div className="flex justify-start">
//               <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
//                 Will head to the Help Center if I have more questions tho
//               </div>
//             </div>
//           </div>

//           {/* Input */}
//           <div className="flex items-center p-2 border-t">
//             <input
//               type="text"
//               placeholder="Message..."
//               className="flex-grow p-2 border rounded-md mr-2 focus:outline-none"
//             />
//             <button className="text-gray-500 hover:text-purple-600">
//               {/* Attach icon */}
//               📎
//             </button>
//             <button className="ml-2 text-blue-500 hover:text-blue-600">
//               {/* Send icon */}➤
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ModalChat;


import React from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";

const ChatModal = () => {
  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "chat") return null;


  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      exit={{ y: -100, opacity: 0 }} 
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-lg rounded-lg mx-auto max-w-md mt-4 z-50"
    >
      {/* Close button */}
      <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
        <img src="/src/assets/images/arrow-down-01.png" alt="" srcset="" />
      </button>
      
      {/* Header */}
      <div className=" text-black text-center py-2 rounded-lg border">
        <p className="font-semibold">Hyderabad Teaching Hospital</p>
        <p className="text-xs">Created by Bhaavik Arhaan</p>
      </div>
      
      {/* Chat messages */}
      <div className="p-4 space-y-2 overflow-y-auto h-96">
        {/* Chat content */}
        <div className="flex justify-start">
          <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
            Oh?
          </div>
        </div>
        {/* Additional messages */}
      </div>

      {/* Input */}
      <div className="flex items-center p-2 border-t">
        <input 
          type="text" 
          placeholder="Message..." 
          className="flex-grow p-2 border rounded-md mr-2 focus:outline-none"
        />
        <button className="text-gray-500 hover:text-purple-600">
          📎
        </button>
        <button className="ml-2 text-blue-500 hover:text-blue-600">
          ➤
        </button>
      </div>
    </motion.div>
  );
};

export default ChatModal;
