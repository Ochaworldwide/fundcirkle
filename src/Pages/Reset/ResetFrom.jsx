import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import Toast from "../../Component/Toast/Toast";

function ResetFrom() {
  const [email, setEmail] = useState("");

  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ message, type });
  };
  

  // const fields = [
  //   {
  //     type: "email",
  //     placeholder: "Enter your registered email address",
  //     value: email,
  //     onChange: (e) => setEmail(e.target.value),
  //   },
  // ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    showToast(
      "Reset link sent! Check your email to reset your password.",
      "success"
    );
    console.log("Form submitted!");
  };


  

  return (
    <div>
      {/* Reusable Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        duration={3000}
        onClose={() => setToast({ message: "", type: "" })}
      />
      <NavBar backLink="/sign-in" />

      <div className="mx-auto w-[90%] flex flex-col">
        <h1 className="font-bold text-[22px] mb-5 poppins">
          Reset your Password
        </h1>
        <p className="text-[14px] mb-10">
          Enter your registered email to receive a password reset link.
        </p>

        <form action="" className="flex flex-col justify-center">
          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-10"
            placeholder="Enter your registered email address "
          />

          <button
            type="submit "
            className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg" onClick={handleFormSubmit}
          >
            Send Password Reset Link
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
