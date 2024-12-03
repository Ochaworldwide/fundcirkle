import React, { useState } from "react";
// import NavBar from "../../NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useNavigate } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import { motion } from "framer-motion";
import NavBar from "../../Component/Sign up/NavBar";
import Toast from "../../Component/Toast/Toast";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

 const navigate = useNavigate();

 const [toast, setToast] = useState({ message: "", type: "" });

 const showToast = (message, type) => {
   setToast({ message, type });
 };



  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {
      navigate("/residence")
      console.log("Form submitted!");
    } else {
      showToast(
        "Please agree to the terms and condition",
        "warning"
      );
    }
  };

  return (
    <div className="">
      <NavBar backLink="/get-started" />

      <Toast
        message={toast.message}
        type={toast.type}
        duration={3000}
        onClose={() => setToast({ message: "", type: "" })}
      />

      <motion.div
        className="w-[90%] mx-auto flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-bold text-2xl mb-2 poppins">Getting Started</h1>

        <p>Lets Create your account here</p>

        <form action="" className="py-5 flex flex-col justify-center ">
          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
            placeholder="Full Name "
          />

          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
            placeholder="Email "
          />

          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
            placeholder="Password"
          />

          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-10 outline-[#00943F] text-[#00000080]"
            placeholder="Confirm Password"
          />

          {/* Additional Checkbox and Terms */}
          <div className="flex justify-between items-center mt-5 w-[100%] mb-5">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="w-[10%]"
              required
            />
            <p className="text-xs w-[90%] leading-normal">
              I am at least 18 years old, and by ticking this box, I’ve read and
              agree to the Platform’s{" "}
              <span className="text-[#00943F]">Terms of Service</span> and{" "}
              <span className="text-[#00943F]">Privacy Policy</span>.
            </p>
          </div>

          <button
            type="submit "
            onClick={handleFormSubmit}
            className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            Sign Up
          </button>

          {/* Additional Sign-In Link */}
          <p className="mt-5 self-center">
            Already have an account?{" "}
            <span className="text-[#00943F]">
              <Link to="/sign-in">Sign In</Link>
            </span>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default SignUp;
