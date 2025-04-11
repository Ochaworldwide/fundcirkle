import React, { useState } from "react";
import Button from "../../Component/Botton/Button";
import { Link, useNavigate } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import { motion } from "framer-motion";
import NavBar from "../../Component/Sign up/NavBar";
import Toast from "../../Component/Toast/Toast";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import logo from "/images/Logo.svg";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa"; // Import icons from react-icons

function SignUp() {
  const [formData, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isAgreed, setIsAgreed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    setForm({ ...formData, [name]: e.target.value });
  };

  const [toast, setToast] = useState({ message: "", type: "" });
  const [errors, setErrors] = useState(null);
  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const validate = () => {
    // validate the user inputs
    const errors = {};
    if (formData.fullName.length == 0) {
      errors["fullName"] = "please enter your full name";
    }

    if (formData.password.length < 6) {
      errors["password"] = "password must be up to 6 chars long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors["password"] = "passwords do not match";
    }
    const validEmail = (email) => /\S+@\S+\.\S+/.test(email);
    if (!validEmail(formData.email)) {
      errors["email"] = "Invalid email address";
    }
    // check if we have any values in our erors object, so we cn knw when we have no errors
    setErrors(errors);
    if (Object.keys(errors ?? {}).length) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {
      setErrors(null);
      if (!validate()) return; // stop here if validation fails
      navigate("/residence", { state: formData });
    } else {
      showToast("Please agree to the terms and condition", "warning");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="lg:bg-[url('/images/auth-bg.png')] lg:bg-cover lg:bg-center lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-center ">
      <div className="lg:hidden">
        <NavBar backLink="/" />
      </div>

      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
        <img src={logo} alt="" srcset="" />
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        duration={3000}
        onClose={() => setToast({ message: "", type: "" })}
      />

      <motion.div
        className="w-[90%] mx-auto flex flex-col lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lg:px-10 lg:my-5 lg:w-[50%] lg:min-h-[500px]">
          <h1 className="font-bold text-2xl mb-2 poppins">Getting Started</h1>

          <p>Lets Create your account here</p>

          <form
            onSubmit={handleFormSubmit}
            className="py-5 flex flex-col justify-center "
          >
            <input
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
              className="w-full border border-[#00000066] px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
              placeholder="Full Name "
            />

            <input
              type="text"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="w-full border border-[#00000066] px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
              placeholder="Email "
            />

            <div className="relative w-full">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-[#00000066] px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-6 cursor-pointer text-[#00000080]"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="relative w-full">
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                className="w-full border border-[#00000066]  px-3 py-5 rounded-lg mb-10 outline-[#00943F] text-[#00000080]"
                placeholder="Confirm Password"
              />

              <span
                className="absolute right-3 top-6 cursor-pointer text-[#00000080]"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Show our errors here */}
            <ul className="flex flex-col w-full gap-1 text-sm list-disc pl-5 text-red-500">
              {errors &&
                Object.keys(errors ?? {}).map((name) => (
                  <li>{errors[name]}</li>
                ))}
            </ul>
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
                I am at least 18 years old, and by ticking this box, I’ve read
                and agree to the Platform’s{" "}
                <span className="text-[#00943F]">Terms of Service</span> and{" "}
                <span className="text-[#00943F]">Privacy Policy</span>.
              </p>
            </div>

            <button
              type="submit"
              className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg lg:w-full"
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
        </div>

        <div className=" hidden lg:block lg:ml-auto lg:w-[50%] lg:h-[700px] relative">
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
    </div>
  );
}

export default SignUp;
