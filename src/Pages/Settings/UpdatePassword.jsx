import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import axiosInstance from "../../service";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setIsPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const reset = () => {
    setNewPassword("");
    setConfirmPassword("");
    setCurrentPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      current_password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: confirmPassword,
    };

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!", {
        ...toastConfig,
      });
      setLoading(false);
      return;
    }

    axiosInstance
      .post(ROUTES.ACCOUNT.UPDATE_USER_PASSWORD, payload)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message, {
            ...toastConfig,
          });
          reset();
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message, {
          ...toastConfig,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }} // Start off-screen
      animate={{ x: 0, opacity: 1 }} // Slide into view
      exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="w-full px-6"
    >
      <div className="mb-10 h-32 flex items-center">
        <Link to="/setting">
          <img src="/images/arrowback.svg" alt="" />
        </Link>
      </div>
      <form
        className="bg-white py-6 rounded-md w-[100%]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[22px] font-[600] mb-5">Update Password</h1>
        <p className="text-[10.5px] text-gray-600 mb-5">
          Enter your current password to set a new one. Remember to use a
          strong, unique password to keep your account secure.
        </p>

        {/* Current Password */}
        <div className="mb-5 relative w-full">
          <input
            type={isPasswordVisible.current ? "text" : "password"}
            placeholder="Enter your current Password"
            className="w-full px-3 py-4 border border-gray-300 rounded-md outline-[#00943F] text-[12px]"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-6 cursor-pointer text-[#00000080]"
            onClick={() => togglePasswordVisibility("current")}
          >
            {isPasswordVisible.current ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* New Password */}
        <div className="mb-5 relative w-full">
          <input
            type={isPasswordVisible.new ? "text" : "password"}
            placeholder="New Password"
            className="w-full px-3 py-4 border border-gray-300 rounded-md outline-[#00943F] text-[12px]"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            requiredborder-gray-300
          />
          <span
            className="absolute right-3 top-6 cursor-pointer text-[#00000080]"
            onClick={() => togglePasswordVisibility("new")}
          >
            {isPasswordVisible.new ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="mb-5 relative w-full">
          <input
            type={isPasswordVisible.confirm ? "text" : "password"}
            placeholder="Confirm New Password"
            className="w-full px-3 py-4 border border-gray-300 rounded-md outline-[#00943F] text-[12px]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-6 cursor-pointer text-[#00000080]"
            onClick={() => togglePasswordVisibility("confirm")}
          >
            {isPasswordVisible.confirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between font-[700] text-[14px]">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            {loading ? (
              <PulseLoader size={12} color="white" />
            ) : (
              "Update Password"
            )}
          </button>
          <button
            type="button"
            className="border border-gray-300 text-gray-600 px-10 py-2 rounded-md hover:bg-gray-100 transition"
            onClick={reset}
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default UpdatePassword;




