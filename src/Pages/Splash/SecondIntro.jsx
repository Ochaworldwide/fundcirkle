import React from "react";
import { motion } from "framer-motion";

const SecondIntro = () => {
  return (
    <div className='bg-white h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center'>
      <div className="mb-3">
        <motion.img
          initial={{
            translateX: "0%",
            translateY: "0%",
            opacity: 0,
          }} // Initial center position
          animate={{
            translateX: "0%",
            translateY: "0%",
            opacity: 1,
          }} // Final position based on array
          transition={{
            duration: 1,
            delay: 0.2, // Staggered delay for each image
          }}
          src="/images/splash/green-fund-logo-1.svg"
          alt=""
          srcset=""
        />
      </div>

      <div className="flex relative">
        <motion.img
          initial={{
            translateX: "5%",
            translateY: "0%",
            opacity: 0,
          }} // Initial center position
          animate={{
            translateX: "5%",
            translateY: "0%",
            opacity: 1,
          }} // Final position based on array
          transition={{
            duration: 1,
            delay: 2, // Staggered delay for each image
          }}
          src="/images/splash/green-fund-logo-2.svg"
          alt=""
          srcset=""
        />

        <motion.img
          initial={{
            translateX: "-5%",
            translateY: "0%",
            opacity: 0,
          }} // Initial center position
          animate={{
            translateX: "-5%",
            translateY: "0%",
            opacity: 1,
          }} // Final position based on array
          transition={{
            duration: 1,
            delay: 2, // Staggered delay for each image
          }}
          src="/images/splash/green-fund-logo-3.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default SecondIntro;
