import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useNavigate } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { em } from "framer-motion/client";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa"; // Import icons from react-icons


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const fields = [
    {
      type: "email",
      placeholder: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("sending req");
    const payload = {
      email: email,
      password: password,
    };
    axiosInstance
      .post(ROUTES.AUTH.LOGIN, payload)
      .then((response) => {
        if (response.data.success) {
          const token = response.data.data.token;
          toast.success("Login successful");
          localStorage.setItem("token", token);
          navigate("/home");
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });

    console.log("Form submitted!");

    // navigate("/home");
  };


 const togglePasswordVisibility = () => {
   setIsPasswordVisible((prevState) => !prevState);
 };

  return (
    <div>
      <NavBar backLink="/" />

      <div className="mx-auto w-[90%] flex flex-col">
        <h1 className="font-bold text-[22px] mb-5 poppins">Welcome Back</h1>

        <p className="text-[14px]">Login and get back to business</p>

        <form
          onSubmit={handleFormSubmit}
          className="py-5 flex flex-col justify-center "
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
            placeholder="Email "
          />

          <div className="relative w-full">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
              placeholder="Password"
            />
            <span
              className="absolute right-3 top-6 cursor-pointer text-[#00000080]"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Additional Reset Link */}
          <p className="mt-1 text-[#00943F] self-start mb-20">
            <Link to="/reset">Forget Password ?</Link>
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-[100%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            {loading ? <PulseLoader size={12} color="white" /> : "Sign in"}
          </button>

          {/* Additional Sign-up Link */}
          <p className="mt-10 self-center">
            Doesn't have an account?{" "}
            <span className="text-[#00943F]">
              <Link to="/sign-up">Sign up here</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
