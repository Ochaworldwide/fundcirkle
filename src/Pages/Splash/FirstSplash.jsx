// import React from 'react'

// import splashCircle from "/src/assets/images/Ellipse 6.webp";
// import splashScreen from "/src/assets/images/SplashScreen1.webp";
// import splashScreen2 from "/src/assets/images/Group11.webp";
// import splashScreen4 from "/src/assets/images/Splash Screen.webp";
// import pro1 from "/src/assets/images/pro1.webp";
// import pro2 from "/src/assets/images/pro2.webp";
// import pro3 from "/src/assets/images/pro3.webp";
// import pro4 from "/src/assets/images/pro4.webp";
// import pro5 from "/src/assets/images/pro5.webp";
// import pro6 from "/src/assets/images/pro6.webp";
// import pro7 from "/src/assets/images/pro7.webp";

// function FirstSplash() {
//   return (
//     <div className="w-full h-screen bg-red-600 flex flex-col items-center justify-center">
//       <div className=" w-28 h-28 border rounded-full bg-amber-600 translate-x-[70%] "></div>

//       <div className=" w-28 h-28 border rounded-full bg-black "></div>

//       <div className=" w-28 h-28 border rounded-full bg-black  "></div>

//       <div className=" w-28 h-28 border rounded-full bg-black "></div>

//       <div className=" w-28 h-28 border rounded-full bg-black "></div>

//       <div className=" w-28 h-28 border rounded-full bg-black "></div>

//       <div className=" w-28 h-28 border rounded-full bg-black  "></div>
//     </div>
//   );
// }

// export default FirstSplash




import React from "react";
import { motion } from "framer-motion";

const FirstSpalsh = () => {
  const images = [
    {
      src: "/src/assets/images/pro1.png",
      translateX: "300%",
      translateY: "0%",
      initialX: "500%",
      size: "w-32 h-32",
    },
    {
      src: "/src/assets/images/pro2.png",
      translateX: "110%",
      translateY: "-40%",
      initialX: "0%",
      size: "w-24 h-24",
    },
    {
      src: "/src/assets/images/pro3.png",
      translateX: "90%",
      translateY: "-50%",
      initialY: "-200%",
      initialX: "90%",
      size: "w-28 h-28",
    },
    {
      src: "/src/assets/images/pro4.png",
      translateX: "0%",
      translateY: "40%",
      size: "w-32 h-32",
    },
    {
      src: "/src/assets/images/pro5.png",
      translateX: "-200%",
      translateY: "-20%",
      size: "w-20",
    },
    {
      src: "/src/assets/images/pro6.png",
      translateX: "-350%",
      translateY: "40%",
      size: "w-20",
    },
    {
      src: "/src/assets/images/pro7.png",
      translateX: "-290%",
      translateY: "45%",
      initialX: "-500%",
      size: "w-32 h-32",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full w- h-screen bg-pink-200">
      <div className="relative flex items-center justify-center w-64 h-64 rounded-full bg-pink-300">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={`Circle ${index + 1}`}
            className={`${image.size} rounded-full border-4 border-white object-cover`}
            initial={{ translateX: image.initialX, translateY: image.initialY, opacity: 0 }} // Initial center position
            animate={{
              translateX: image.translateX,
              translateY: image.translateY,
              opacity: 1,
            }} // Final position based on array
            transition={{
              duration: 1,
              delay: index * 0.2, // Staggered delay for each image
            }}
            whileHover={{ scale: 1.1 }} // Hover effect
          />
        ))}
      </div>
    </div>
  );
};

export default FirstSpalsh;
