import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useLocation } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import Toast from "../../Component/Toast/Toast";
import { toast } from "react-toastify";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { PulseLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";

function ResetFrom() {

    const location = useLocation();

    const email = location.state?.email;

    const [loading,setLoading] = useState(false)


  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = new FormData(
      e.target
    );
    axiosInstance
      .post(ROUTES.AUTH.FORGOT_PASSWORD, payload)
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
   
    console.log(payload.getAll() );
  };


  

  return (
    <div>

      <NavBar backLink="/sign-in" />

      <div className="mx-auto w-[90%] flex flex-col">
        <h1 className="font-bold text-[22px] mb-5 poppins">
          Reset your Password
        </h1>
        <p className="text-[14px] mb-10">
          Enter your registered email to receive a password reset link.
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center"
        >
          <input
            type="text"
            name="email"
            className="w-full border px-3 py-5 rounded-lg mb-10"
            placeholder="Enter your registered email address "
          />

          <button
            type="submit "
            disabled={loading}
            className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            {loading ? (
              <PulseLoader size={12} color="white" />
            ) : (
              "Send Password Reset Link"
            )}
          </button>
        </form>

        <p className="mt-10 self-center">
          Already have an account?{" "}
          <span className="text-[#00943F]">
            <Link to="/sign-up">Sign up here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default ResetFrom;
