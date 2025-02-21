import React from 'react'
import kycIcon from "/images/kyc.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Kyc() {
  return (
    <div>
      <motion.div
        className="w-[95%] flex bg-[#80C99F1A] mx-auto justify-between border border-[#00000066] items-center rounded-[8px] mb-3 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pl-[10px]">
          <h2 className="font-[400] text-[18px]">Verify your Identity</h2>

          <Link
            to="/startkyc"
            className="text-[14px] font-sans underline text-[#00943F]"
          >
            Click here to complete KYC
          </Link>
        </div>

        <div className="">
          <img src={kycIcon} alt="" srcset="" />
        </div>
      </motion.div>
    </div>
  );
}

export default Kyc