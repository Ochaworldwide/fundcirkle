import React, { useState, useRef } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Authentication = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        inputRefs.current[index + 1].focus(); // Move to the next input
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus(); // Move focus back
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").slice(0, 6);
    const newOtp = [...otp];

    // Fill each input with the pasted data
    for (let i = 0; i < pastedData.length; i++) {
      if (/^[0-9]$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }
    setOtp(newOtp);

    // Focus the last filled input
    const lastFilledIndex = Math.min(pastedData.length, 6) - 1;
    if (lastFilledIndex >= 0) {
      inputRefs.current[lastFilledIndex].focus();
    }
  };
  const number = "09034962596";


  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    navigate("/sign-in");
  };

  return (
    <div>
      <NavBar backLink="/residence" />
      <motion.div
        className="w-[90%] mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-bold text-2xl mb-5 poppins ">OTP Authentication</h1>
        <p>An Authentication code has been sent to the mobile number below</p>
        <p className="text-center my-10 font-bold text-xl tracking-widest">
          {number}{" "}
        </p>

        <form action="" className="py-5 flex flex-col justify-center w-[100%]">
          <div className="flex   mb-10 w-[95%] justify-between mx-auto">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength="1"
                className={`w-12 h-12 text-center border-2 rounded-lg text-xl font-medium ${
                  digit ? "border-[#00943F] text-[#00943F]" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="mb-20">
            DIdn't get the code ?{" "}
            <span className="text-[#00943F] poppins-light-italic">
              {" "}
              <Link to=""> Resend code </Link>{" "}
            </span>
          </p>

          <button
            type="submit "
            onClick={handleFormSubmit}
            className="w-[100%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            Verify
          </button>
        </form>

      </motion.div>
    </div>
  );
};

export default Authentication;
