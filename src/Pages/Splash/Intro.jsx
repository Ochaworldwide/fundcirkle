import React from 'react'
import Carousel from './Carousel'
import "animate.css";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className='bg-[url("/images/splash/splash-bg-1.svg")] h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center'>
      <div className="mb-3">


        <img
          src="/images/splash/fund-logo-1.svg"
          alt=""
          srcset=""
        />
      </div>

      <div className="flex relative">


        <img src="/images/splash/fund-logo-2.svg" alt="" srcset="" />

        <img src="/images/splash/fund-logo-3.svg" alt="" srcset="" />
      </div>
    </div>
  );
}

export default Intro