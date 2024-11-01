import React, { useState } from "react";
import NavBar from "../Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link } from "react-router-dom";
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div>
      <NavBar backLink="/get-started" />

      <div className="mx-auto w-[90%] flex flex-col">
        <h1 className="font-bold text-2xl mb-5 poppins">Welcome Back</h1>

        <p>Login and get back to business</p>
        <CustomForm
          fields={fields}
          buttonText="Sign In"
          buttonLink="/authentication"
          onSubmit={handleFormSubmit}
          buttonProps={{
            bgColor: "bg-red-500",
            textColor: "text-white",
            padding: "px-20 py-5",
            fontSize: "font-bold",
            borderRadius: "rounded-lg",
            marginTop: "mt-10",
            onClick: () => console.log("Button clicked!"),
          }}
        >
          {/* Additional Sign-In Link */}
          <p className="mt-1 text-red-500 self-start">
            <Link to="/reset">Forget Password ?</Link>
          </p>
        </CustomForm>

        <p className="mt-10 self-center">
          Already have an account?{" "}
          <span className="text-red-500">
            <Link to="/sign-up">Sign up here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
