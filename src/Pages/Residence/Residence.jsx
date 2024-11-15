import React, { useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import { motion } from "framer-motion";

function Residence() {
  const [country, setCountry] = useState("option1");
  const [phoneNumber, setPhoneNumber] = useState("");

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

        <CustomForm
          fields={fields}
          buttonText="Continue"
          buttonLink="/authentication"
          buttonProps={{
            bgColor: "bg-[#00943F]",
            textColor: "text-white",
            padding: "px-20 py-5",
            fontSize: "font-bold",
            borderRadius: "rounded-lg",
            marginTop: "mt-10",
            onClick: () => console.log("Button clicked!"),
          }}
        />
      </motion.div>
    </div>
  );
}

export default Residence;
