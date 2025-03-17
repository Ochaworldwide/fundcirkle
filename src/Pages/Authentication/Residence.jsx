import React, { useEffect, useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";

function Residence() {
  // const [country, setCountry] = useState(null);
  const [country, setCountry] = useState("India");
  const [ countries, setCountries] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const location = useLocation();
  const [loading,setLoading] = useState(false)

  useEffect(() => {

    const getAllCountries = async () => {
      try{
        const response = await axiosInstance.get('/get/countries');
        setCountries(response.data.data)
      }
      catch(error){ console.log(error) }
    }

    getAllCountries();

  }, []);
  const formData = location.state;

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const payload = {
      full_name: formData?.fullName,
      email: formData?.email,
      country: country ,
      phone: phoneNumber ,
      password: formData?.password ,
      password_confirmation: formData?.confirmPassword ,
    };

    try {
      const response = await axiosInstance.post(ROUTES.AUTH.SIGNUP, payload);
      navigate("/authentication", { state: { email: payload?.email } });
      toast.success(response.data.message, { ...toastConfig });
    } catch (error) {
      toast.error(error.response.data.message, { ...toastConfig });
    }
    setLoading(false);
  };

  const fields = [
    {
      type: "select",
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

        <form
          onSubmit={handleFormSubmit}
          className="py-5 flex flex-col justify-center"
        >
          {/* <select
            {...fields[0]}
            id=""
            className="w-full border px-3 py-5 rounded-lg mb-5 bg-white text-[#00000080] outline-[#00943F]"
          >
            {countries &&
              countries.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
          </select> */}

          <select
            // {...fields[0]}
            value={country}
            id=""
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-[#00000066] px-3 py-5 rounded-lg mb-5 bg-white text-[#00000080] outline-[#00943F]"
          >
            {countries &&
              countries.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
          </select>

          <input
            type="text"
            {...fields[1]}
            className="w-full border border-[#00000066] px-3 py-5 rounded-lg mb-20 outline-none text-[#00000080]"
            placeholder="Phone Number "
          />

          <button
            type="submit "
            disabled={loading}
            className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg"
          >
            {loading ? <PulseLoader size={12} color="white" /> : "Continue"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Residence;
