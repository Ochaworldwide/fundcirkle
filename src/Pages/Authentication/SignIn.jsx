import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { em } from "framer-motion/client";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa"; // Import icons from react-icons
import { toastConfig } from "../../constants/toastConfig";
import logo from "/images/Logo.svg";
import { useModal } from "../../Component/Cirkles/ModalContext";

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
  const { showStatusReport } = useModal();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home"; // fallback

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
          // toast.success("Login successful", { ...toastConfig });
          showStatusReport("Login successful");
          localStorage.setItem("token", token);
          localStorage.setItem("user", response.data.data.user);
          // navigate("/home");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        // toast.error(error?.response?.data?.message, { ...toastConfig });
        showStatusReport(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });

    console.log("Form submitted!");

    // navigate("/home");
  };


    // const handleFormSubmit = async (e) => {
    //       e.preventDefault();
    //       setLoading(true);
    //       const payload = {
    //         email: email,
    //         password: password,
    //       };
    //   try {
    //     // Fetch data from the first API
    //     const response1 = await axiosInstance.post("/auth/validate-email", {
    //       email: email,
    //     });
    //     if (response1.data.success) {
    //       // toast.success("Email is valid", { ...toastConfig });
    //       showStatusReport("Email is valid");
    //       navigate("/authentication");
    //     }

    //     // Fetch data from the second API
    //     const response2 = await axiosInstance.get(ROUTES.AUTH.LOGIN, payload);
    //     if (response2.data.success) {
    //       const token = response2.data.data.token;
    //       // toast.success("Login successful", { ...toastConfig });
    //       showStatusReport("Login successful");
    //       localStorage.setItem("token", token);
    //       localStorage.setItem("user", response2.data.data.user);
    //       // navigate("/home");
    //       navigate(from, { replace: true });
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     if (error.response?.data?.message) {
    //       // toast.error(error.response.data.message, { ...toastConfig });
    //       showStatusReport(error.response.data.message);
    //     } else {
    //       // toast.error("An error occurred. Please try again.", { ...toastConfig });
    //       showStatusReport("An error occurred. Please try again.");
    //     }
    //   } finally {
    //     // Uncomment or implement if necessary
    //     // setLoading(false);
    //   }
    // };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="lg:bg-[url('/images/auth-bg.png')] lg:bg-cover lg:bg-center lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-center">
      {/* <NavBar backLink="/" /> */}

      <div className="lg:hidden">
        <NavBar />
      </div>

      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
        <img src={logo} alt="" srcset="" />
      </div>

      <div className="w-[90%] mx-auto flex flex-col lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden ">
        <div className="lg:px-10 lg:my-5 lg:w-[50%] lg:min-h-[500px]">
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
                className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] border-[#00000066] text-[#00000080]"
                placeholder="Email "
              />

              <div className="relative w-full">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              {/* Additional Reset Link */}
              <p className="mt-1 text-[#00943F] self-start mb-20">
                <Link to="/reset">Forget Password ?</Link>
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-[100%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg lg:w-full"
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
      </div>
    </div>
  );
}

export default SignIn;
