// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const Confetti = () => {

//     const navigate = useNavigate();
//   return (
//     <div className=" h-screen bg-green-100 relative flex flex-col justify-end">
//       {/* Profile Icon */}
//       <motion.div
//         initial={{
//           translateX: "0%",
//           translateY: "100%",
//           opacity: 0,
//         }} // Initial center position
//         animate={{
//           translateX: "0%",
//           translateY: "0%",
//           opacity: 1,
//         }} // Final position based on array
//         transition={{
//           duration: 1,
//           delay: 0.2, // Staggered delay for each image
//         }}
//         className="flex items-center justify-center w-[100%] mx-auto rounded-full mb-5 relative"
//       >
//         <motion.img
//           initial={{
//             translateX: "0%",
//             translateY: "0%",
//             opacity: 0,
//           }} // Initial center position
//           animate={{
//             translateX: "0%",
//             translateY: "0%",
//             opacity: 1,
//           }} // Final position based on array
//           transition={{
//             duration: 1,
//             delay: 2, // Staggered delay for each image
//           }}
//           src="/images/explode.gif" // Replace with your icon's URL
//           alt="gif"
//           className="w-[100%] object-cover absolute"
//         />
//         <img
//           src="/images/good-mark.svg" // Replace with your icon's URL
//           alt="Profile Icon"
//           className=""
//         />
//       </motion.div>

//       <div className="w-full pt-1   bg-white  shadow-md rounded-t-[50px] text-center bottom-0 h-[60%] flex flex-col justify-between">
//         <motion.div
//           initial={{
//             translateX: "0%",
//             translateY: "0%",
//             opacity: 0,
//           }} // Initial center position
//           animate={{
//             translateX: "0%",
//             translateY: "0%",
//             opacity: 1,
//           }} // Final position based on array
//           transition={{
//             duration: 1,
//             delay: 1, // Staggered delay for each image
//           }}
//           className="px-20"
//         >
//           {/* Header */}
//           <h1 className="mt-6 mb-7 text-xl font-bold text-gray-800 text-[22px] ">
//             KYC Verification Complete!
//           </h1>

//           {/* Subtext */}
//           <p className="mt-2 text-sm text-gray-600">
//             You're all set! Your identity has been successfully verified.
//           </p>
//         </motion.div>

//         {/* Buttons */}
//         <motion.div
//           initial={{
//             translateX: "0%",
//             translateY: "100%",
//             opacity: 0,
//           }} // Initial center position
//           animate={{
//             translateX: "0%",
//             translateY: "0%",
//             opacity: 1,
//           }} // Final position based on array
//           transition={{
//             duration: 1,
//             delay: 0.2, // Staggered delay for each image
//           }}
//           className="mt-6 mb-20 bottom-0 text-[14px]"
//         >
//           <button
//             className="w-[90%] mx-auto px-4 py-5 mb-5 font-[700] text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
//             onClick={() => {
//               navigate("/discover");
              
//             }}
//           >
//             Explore Cirkles
//           </button>

//           <button
//             className="w-[90%] mx-auto px-4 py-5 text-[#141B34] font-[700] bg-gray-100 border border-gray-300 rounded-lg shadow hover:bg-gray-200"
//             onClick={() => {
//               navigate("/setting");
              
//             }}
//           >
//             View Profile
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Confetti;



import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Confetti = ({
  title ,
  message ,
  primaryButtonText ,
  secondaryButtonText, 
  primaryButtonLink ,
  secondaryButtonLink
}) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-green-100 relative flex flex-col justify-end">
      {/* Profile Icon */}
      <motion.div
        initial={{ translateX: "0%", translateY: "100%", opacity: 0 }}
        animate={{ translateX: "0%", translateY: "0%", opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex items-center justify-center w-[100%] mx-auto rounded-full mb-5 relative"
      >
        <motion.img
          initial={{ translateX: "0%", translateY: "0%", opacity: 0 }}
          animate={{ translateX: "0%", translateY: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          src={"/images/explode.gif"}
          alt="Confetti Animation"
          className="w-[100%] object-cover absolute"
        />
        <img src={"/images/good-mark.svg"} alt="Profile Icon" className="" />
      </motion.div>

      {/* Content Section */}
      <div className="w-full pt-1 bg-white shadow-md rounded-t-[50px] text-center bottom-0 h-[60%] flex flex-col justify-between">
        <motion.div
          initial={{ translateX: "0%", translateY: "0%", opacity: 0 }}
          animate={{ translateX: "0%", translateY: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="px-20"
        >
          {/* Dynamic Header */}
          <h1 className="mt-6 mb-7 text-xl font-bold text-gray-800 text-[22px]">
            {title}
          </h1>

          {/* Dynamic Subtext */}
          <p className="mt-4 text-base leading-relaxed text-gray-600">{message}</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ translateX: "0%", translateY: "100%", opacity: 0 }}
          animate={{ translateX: "0%", translateY: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 mb-20 bottom-0 text-[14px]"
        >
          {/* Primary Button */}
          <button
            className="w-[90%] mx-auto px-4 py-5 mb-5 font-[700] text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
            onClick={() => navigate(primaryButtonLink)}
          >
            {primaryButtonText}
          </button>

          {/* Secondary Button */}
          <button
            className="w-[90%] mx-auto px-4 py-5 text-[#141B34] font-[700] bg-gray-100 border border-gray-300 rounded-lg shadow hover:bg-gray-200"
            onClick={() => navigate(secondaryButtonLink)}
          >
            {secondaryButtonText}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Confetti;

