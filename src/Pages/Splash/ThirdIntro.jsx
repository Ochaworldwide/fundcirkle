import React from "react";

import { motion } from "framer-motion";
import Carousel from "./Carousel";

const ThirdIntro = () => {
  return (
    <div className="bg-green h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center ">
      <motion.div
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
          delay: 0, // Staggered delay for each image
        }}
        className="flex relative mx-auto mb-20 mt-10"
      >
        <img
          src="/images/splash/green-fund-logo-2.svg"
          alt=""
          srcset=""
          className="translate-x-4"
        />

        <img src="/images/splash/green-fund-logo-3.svg" alt="" srcset="" />
      </motion.div>

      <motion.div
        initial={{
          translateX: "0%",
          translateY: "100%",
          opacity: 0,
        }} // Initial center position
        animate={{
          translateX: "0%",
          translateY: "0%",
          opacity: 1,
        }} // Final position based on array
        transition={{
          duration: 2,
          delay: 1, // Staggered delay for each image
        }}
        className="relative"
      >
        <img
          src="/images/splash/splash-bg.svg"
          alt=""
          srcset=""
          className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%]"
        />
        <Carousel />
      </motion.div>
    </div>
  );
};

export default ThirdIntro;
