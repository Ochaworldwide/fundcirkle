import React, { useState, useRef } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";
import logo from "/images/Logo.svg";
import { useModal } from "../../Component/Cirkles/ModalContext";

const Authentication = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const { showStatusReport } = useModal();

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
  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const code = otp.join('');
    const payload = {
      email: email,
      code: code,
    };
    axiosInstance
      .post(ROUTES.AUTH.VERIFY, payload)
      .then((response) => {
        if (response.data.success) {
          // toast.success(response.data.message, { ...toastConfig });
          showStatusReport(response.data.message);
          navigate("/sign-in");
        }
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.response.data.message, { ...toastConfig });
        showStatusReport(error.response.data.message);
        
      })
      .finally(() => {
        setLoading(false);
      });

  };

  const handleResendOTP = (e) => {
    const payload = {
      email: email,
    };
    axiosInstance
      .post(ROUTES.AUTH.RESENDOTP, payload)
      .then((response) => {
        // toast.success("Resent OTP", { ...toastConfig });
        showStatusReport("Resent OTP");
      })
      .catch((error) => {
        console.log(error);
        

      });

    console.log(email);
  };

  return (
    <div className="lg:bg-[url('/images/auth-bg.png')] lg:bg-cover lg:bg-center lg:min-h-screen lg:flex lg:flex-col lg:items-center lg:justify-center">
      {/* <NavBar backLink="/residence" /> */}

      <div className="lg:hidden">
        <NavBar backLink="/residence" />
      </div>

      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
        <img src={logo} alt="" srcset="" />
      </div>

      <motion.div
        className="w-[90%] mx-auto flex flex-col items-center lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lg:px-10 lg:my-5 lg:w-[50%] lg:min-h-[500px]">
          <h1 className="font-bold text-2xl mb-5 poppins ">
            OTP Authentication
          </h1>
          <p>An Authentication code has been sent to the email below</p>
          <p className="text-center my-10 font-normal text-[16px]">{email}</p>

          <form
            onSubmit={handleFormSubmit}
            className="py-5 flex flex-col justify-center w-[100%]"
          >
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
                    digit
                      ? "border-[#00943F] text-[#00943F]"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="mb-20">
              DIdn't get the code ?{" "}
              <span className="text-[#00943F] poppins-light-italic">
                <button type="button" onClick={handleResendOTP}>
                  {" "}
                  Resend code{" "}
                </button>
              </span>
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-[100%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg lg:w-full"
            >
              {loading ? <PulseLoader size={12} color="white" /> : "Verify"}
            </button>
          </form>
        </div>

        <div className=" hidden lg:block lg:ml-auto lg:w-[50%] lg:min-h-[700px] relative">
          <img
            src="/images/Desktop.png"
            alt=""
            srcset=""
            className="lg:object-cover w-full h-full absolute"
          />

          <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-10">
            <div className="bg-white/70 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-2">Welcome to FundCirkle</h2>
              <p className="text-sm">
                Empowering communities to save and achieve financial goals
                together through trusted group contributions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="hidden lg:block lg:mr-auto lg:w-[89%] lg:mx-auto">
        <NavBar backLink="/residence" />
      </div>
    </div>
  );
};

export default Authentication;
