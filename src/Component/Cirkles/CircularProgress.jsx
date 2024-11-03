// import React from "react";

// const CircularProgress = ({ contribution }) => {
//   const radius = 18; // Radius of the circle
//   const circumference = 2 * Math.PI * radius; // Circumference of the circle
//   const progress =
//     (contribution.paymentStatus.completed / contribution.paymentStatus.total) *
//     100; // Calculate progress as a percentage
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   return (
//     <div className="relative w-16 h-16 flex items-center justify-center mx-auto mb-1">
//       <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
//         {/* Background circle */}
//         <circle
//           cx="20"
//           cy="20"
//           r={radius}
//           fill="none"
//           stroke="#e5e7eb" // Light gray color
//           strokeWidth="4"
//         />

//         {/* Foreground circle to show progress */}
//         <circle
//           cx="20"
//           cy="20"
//           r={radius}
//           fill="none"
//           stroke="#8b5cf6" // Purple color for progress
//           strokeWidth="4"
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round" // Rounded edges for smoother look
//           style={{
//             transition: "stroke-dashoffset 0.35s", // Smooth animation
//           }}
//         />
//       </svg>

//       {/* Text in the center */}
//       <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
//         {contribution.paymentStatus.completed}/
//         {contribution.paymentStatus.total}
//       </div>
//     </div>
//   );
// };

// export default CircularProgress;



import React from "react";
import { motion } from "framer-motion";

const CircularProgress = ({ contribution }) => {
  const radius = 18; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress =
    (contribution.paymentStatus.completed / contribution.paymentStatus.total) *
    100; // Calculate progress as a percentage
  const targetStrokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center mx-auto mb-1">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
        {/* Background circle */}
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Light gray color
          strokeWidth="4"
        />

        {/* Foreground circle to show progress */}
        <motion.circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="#8b5cf6" // Purple color for progress
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Start fully offset
          animate={{
            strokeDashoffset: targetStrokeDashoffset, // Animate to target offset
          }}
          transition={{
            duration: 1, // Adjust duration to control speed of animation
            ease: "easeInOut",
          }}
          strokeLinecap="round" // Rounded edges for smoother look
        />
      </svg>

      {/* Text in the center */}
      <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
        {contribution.paymentStatus.completed}/
        {contribution.paymentStatus.total}
      </div>
    </div>
  );
};

export default CircularProgress;
