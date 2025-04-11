import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import Toast from "../../Component/Toast/Toast";
import { toast } from "react-toastify";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { PulseLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";
import logo from "/images/Logo.svg";

function ResetPassword() {
  const location = useLocation();

  //   const email = location.state?.email;

  // :reset_token in the route is just a placeholder,
  // extract the actual value using the placeholder name
  const { reset_token } = useParams();

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = new FormData(e.target); // payload is now formdata object so...
    payload.append("token", reset_token);
    axiosInstance
      .post(ROUTES.AUTH.RESET, payload, {
        header: {
          "Content-Type": "multipart/form-data", // since we are not a json payload, we need to update the content type to be form data
        },
      })
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message, { ...toastConfig });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, { ...toastConfig });
      })
      .finally(() => {
        setLoading(false);
      });

    console.log(payload);
  };

  return (
    <div className="lg:bg-[url('/images/auth-bg.png')] lg:bg-cover lg:bg-center lg:min-h-screen lg:flex lg:flex-col lg:items-center lg:justify-center">
      {/* <NavBar backLink="/reset" /> */}
      

      <div className="lg:hidden">
        <NavBar backLink="/reset" />
      </div>

      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
        <img src={logo} alt="" srcset="" />
      </div>

      <div className="mx-auto w-[90%] flex flex-col lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden">
        <div className="lg:px-10 lg:my-5 lg:w-[50%] lg:min-h-[500px]">
          <h1 className="font-bold text-[22px] mb-5 poppins">
            Reset your Password
          </h1>
          <p className="text-[14px] mb-10">Enter your New Password.</p>

          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col justify-center"
          >
            <input
              type="text"
              name="password"
              className="w-full border px-3 py-5 rounded-lg mb-10"
              placeholder="Enter your New Password "
            />

            <input
              type="text"
              name="password_confirmation" // here i changed this to match the endpoint requirements
              className="w-full border px-3 py-5 rounded-lg mb-10"
              placeholder="Confirm your New Password "
            />

            <button
              type="submit "
              disabled={loading}
              className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg lg:w-full"
            >
              {loading ? (
                <PulseLoader size={12} color="white" />
              ) : (
                "Send Password Reset Link"
              )}
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
      </div>

      <div className="hidden lg:block lg:mr-auto lg:w-[89%] lg:mx-auto">
        <NavBar backLink="/reset" />
      </div>
    </div>
  );
}

export default ResetPassword;
