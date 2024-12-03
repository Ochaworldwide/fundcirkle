import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function Residence() {
  const [country, setCountry] = useState("option1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    navigate("/authentication");
  };

  const fields = [
    {
      type: "select",
      options: [
        { value: "option1", label: "Country" },
        { value: "option2", label: "Nigeria" },
        { value: "option3", label: "USA" },
        { value: "option4", label: "California" },
      ],
      value: country,
      onChange: (e) => setCountry(e.target.value),
      className:
        "w-[100%] border py-4 px-2 rounded-lg mb-5 outline-none bg-transparent",
    },
    {
      type: "number",
      placeholder: "Phone Number",
      value: phoneNumber,
      onChange: (e) => setPhoneNumber(e.target.value),
      className: "w-[100%] border py-4 px-2 rounded-lg mb-5 outline-none",
    },
  ];

  

  return (
    <div>
      <NavBar backLink="/sign-up" />

      <motion.div
        className="w-[90%] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bold text-2xl mb-5 poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Country of Residence
        </motion.h1>

        <p>
          The terms and services which apply to you, will depend on your country
          of Residence.
        </p>

        <form action="" className="py-5 flex flex-col justify-center">
          <select
            name=""
            id=""
            className="w-full border px-3 py-5 rounded-lg mb-5 bg-white text-[#00000080] outline-[#00943F]"
          >
            <option value=""> Select Country</option>
            <option value="">India</option>
          </select>

          <input
            type="text"
            className="w-full border px-3 py-5 rounded-lg mb-20 outline-none text-[#00000080]"
            placeholder="Phone Number "
          />

          <button
            type="submit "
            onClick={handleFormSubmit}
            className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            Continue
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Residence;
