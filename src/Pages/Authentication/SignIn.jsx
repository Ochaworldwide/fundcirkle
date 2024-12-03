import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useNavigate } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  navigate("/home");
};

  return (
    <div>
      <NavBar backLink="/" />

      <div className="mx-auto w-[90%] flex flex-col">
        <h1 className="font-bold text-[22px] mb-5 poppins">Welcome Back</h1>

        <p className="text-[14px]">Login and get back to business</p>

        <form action="" className="py-5 flex flex-col justify-center ">
          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
            placeholder="Email "
          />

          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-5 outline-[#00943F] text-[#00000080]"
            placeholder="Password "
          />

          {/* Additional Reset Link */}
          <p className="mt-1 text-[#00943F] self-start mb-20">
            <Link to="/reset">Forget Password ?</Link>
          </p>

          <button
            type="submit "
            onClick={handleFormSubmit}
            className="w-[100%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            Sign in
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
