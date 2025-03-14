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
    <div>
      <NavBar backLink="/reset" />

      <div className="mx-auto w-[90%] flex flex-col">
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
            className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            {loading ? (
              <PulseLoader size={12} color="white" />
            ) : (
              "Send Password Reset Link"
            )}
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default ResetPassword;
