import React, { useState, useRef } from "react";
import NavBar from "../Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <NavBar backLink="/residence" />
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-5 poppins ">OTP Authentication</h1>
        <p>An Authentication code has been sent to the mobile number below</p>
        <p className="text-center my-10 font-bold text-xl tracking-widest">
          {number}{" "}
        </p>

        <div className="flex space-x-4 mt-6 mb-5">
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
                digit ? "border-red-500 text-red-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        <p>
          DIdn't get the code ?{" "}
          <span className="text-red-500 poppins-light-italic">
            {" "}
            <Link to=""> Resend code </Link>{" "}
          </span>
        </p>

        <Link to="/sign-in" className="self-center">
          <Button
            text="Verify"
            onClick={() => console.log("Button clicked!")}
            bgColor="bg-red-500"
            textColor="text-white"
            padding="px-20 py-5"
            fontSize="font-bold"
            borderRadius="rounded-lg"
            marginTop="mt-10"
          />
        </Link>
      </div>
    </div>
  );
};

export default Authentication;
