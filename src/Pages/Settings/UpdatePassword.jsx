import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import axiosInstance from "../../service";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Authorization token is missing!");
        setLoading(false);
        return;
      }

    const payload = {
      password: newPassword,
      password_confirmation: confirmPassword,
    };

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    axiosInstance
      .post(ROUTES.AUTH.RESET, payload)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };


    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);

    //   const token = localStorage.getItem("token");

    //   if (!token) {
    //     toast.error("Authorization token is missing!");
    //     setLoading(false);
    //     return;
    //   }

    //   if (newPassword !== confirmPassword) {
    //     toast.error("Passwords do not match!");
    //     setLoading(false); // Stop loading if passwords don't match
    //     return;
    //   }

    //   const payload = {
    //     token,
    //     password: newPassword,
    //     password_confirmation: confirmPassword,
    //   };

    //   try {
    //     const response = await axiosInstance.post(ROUTES.AUTH.RESET, payload);

    //     if (response.data?.success) {
    //       const userToken = response.data.data?.token;
    //       toast.success(response.data.message || "Password reset successful!");

    //       if (userToken) {
    //         localStorage.setItem("token", userToken);
    //       }
    //     } else {
    //       toast.error(response.data?.message || "Something went wrong!");
    //     }
    //   } catch (error) {
    //     toast.error(error?.response?.data?.message || "An error occurred.");
    //   } finally {
    //     setLoading(false);
    //   }
    // };

  return (
    <div className="   w-full px-6">
      <div className="mb-10 h-32 flex items-center">
        <Link to="/setting">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>
      </div>
      <form
        className="bg-white py-6 rounded-md w-[100%]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[22px] font-[600]  mb-5">Update Password</h1>
        <p className="text-[10.5px] text-gray-600 mb-5">
          Enter your current password to set a new one. Remember to use a
          strong, unique password to keep your account secure.
        </p>

        {/* Current Password */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Enter your current Password"
            className="w-full px-3 py-4 border  rounded-md outline-[#00943F] text-[12px] "
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        {/* New Password */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-3 py-4 border border-gray-300 rounded-md outline-[#00943F] text-[12px]"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full px-3 py-4 border border-gray-300 rounded-md  outline-[#00943F]  text-[12px]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between font-[700]  text-[14px]">
          <button
            type="submit"
            className="bg-green-500  text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            Update Password
          </button>
          <button
            type="button"
            className="border border-gray-300 text-gray-600 px-10 py-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => {
              setCurrentPassword("");
              setNewPassword("");
              setConfirmPassword("");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
