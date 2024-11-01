import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "../../Component/Botton/Button";
import { Link } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import { motion } from "framer-motion";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const fields = [
    {
      type: "text",
      placeholder: "Full Name",
      value: fullName,
      onChange: (e) => setFullName(e.target.value),
    },
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
    {
      type: "password",
      placeholder: "Confirm Password",
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {
      console.log("Form submitted!");
    } else {
      alert("Please agree to the Terms of Service and Privacy Policy");
    }
  };

  return (
    <div className="">
      <NavBar backLink="/get-started" />

      <motion.div
        className="w-[90%] mx-auto flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-bold text-2xl mb-2 poppins">Getting Started</h1>

        <p>Lets Create your account here</p>

        <CustomForm
          fields={fields}
          buttonText="Sign Up"
          buttonLink="/residence"
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
          {/* Additional Checkbox and Terms */}
          <div className="flex justify-between items-center mt-5 w-[100%]">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="w-[10%]"
              required
            />
            <p className="text-xs w-[90%] leading-normal">
              I am at least 18 years old, and by ticking this box, I’ve read and
              agree to the Platform’s{" "}
              <span className="text-[#F0243B]">Terms of Service</span> and{" "}
              <span className="text-[#F0243B]">Privacy Policy</span>.
            </p>
          </div>
        </CustomForm>

        {/* Additional Sign-In Link */}
        <p className="mt-5 self-center">
          Already have an account?{" "}
          <span className="text-red-500">
            <Link to="/sign-in">Sign In</Link>
          </span>
        </p>

        {/* <form action="" className="mt-5 flex flex-col items-center">
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%] border py-4 px-2 rounded-lg mb-5 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[100%] border py-4 px-2 rounded-lg mb-5 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] border py-4 px-2 rounded-lg mb-5 outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-[100%] border py-4 px-2 rounded-lg mb-5 outline-none"
          />

          <div className="flex justify-between items-center">
            <input type="checkbox" name="" id="" className="w-[10%]" required />

            <p className="text-xs w-[90%] leading-normal mt-5">
              I am atleast 18 years old, and by tocking this box, I’ve read and
              agree to the Platform’s{" "}
              <span className="text-[#F0243B]">Terms of Service</span> and{" "}
              <span className="text-[#F0243B]">Privacy policy</span>.
            </p>
          </div>

          <Link to="/residence">
            <Button
              text="Sign Up"
              onClick={() => console.log("Button clicked!")}
              bgColor="bg-red-500"
              textColor="text-white"
              padding="px-20 py-5"
              fontSize="font-bold"
              borderRadius="rounded-lg"
              marginTop="mt-10"
              
            />
          </Link>

          <p className='mt-5'>Already have an account ? <span className='text-red-500'>  <Link to="/sign-in"> Sign In</Link>  </span></p>
        </form> */}
      </motion.div>
    </div>
  );
}

export default SignUp;
