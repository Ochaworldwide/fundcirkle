import React, { useEffect, useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";
import logo from "/images/Logo.svg";
import { useModal } from "../../Component/Cirkles/ModalContext";

function Residence() {
  // const [country, setCountry] = useState(null);
  const [country, setCountry] = useState("India");
  const [countries, setCountries] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { showStatusReport } = useModal();

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axiosInstance.get("/get/countries");
        setCountries(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCountries();
  }, []);
  const formData = location.state;

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      full_name: formData?.fullName,
      email: formData?.email,
      country: country,
      phone: phoneNumber,
      password: formData?.password,
      password_confirmation: formData?.confirmPassword,
    };

    try {
      const response = await axiosInstance.post(ROUTES.AUTH.SIGNUP, payload);
      navigate("/authentication", { state: { email: payload?.email } });
      showStatusReport(response.data.message);
    } catch (error) {
      showStatusReport(error.response.data.message);
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
    <div className="lg:bg-[url('/images/auth-bg.png')] lg:bg-cover lg:bg-center lg:min-h-screen lg:flex lg:flex-col lg:items-center lg:justify-center">
      {/* <NavBar backLink="/sign-up" /> */}

      <div className="lg:hidden">
        <NavBar backLink="/sign-up" />
      </div>

      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
        <img src={logo} alt="" srcset="" />
      </div>

      <motion.div
        className="w-[90%] mx-auto flex flex-col lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lg:px-10 lg:my-5 lg:w-[50%] lg:min-h-[500px]">
          <motion.h1
            className="font-bold text-2xl mb-5 poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Country of Residence
          </motion.h1>

          <p>
            The terms and services which apply to you, will depend on your
            country of Residence.
          </p>

          <form
            onSubmit={handleFormSubmit}
            className="py-5 flex flex-col justify-center"
          >
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
              className="w-[90%] py-5 mx-auto bg-[#00943F] font-bold text-white rounded-lg lg:w-full"
            >
              {loading ? <PulseLoader size={12} color="white" /> : "Continue"}
            </button>
          </form>
        </div>

        <div className=" hidden lg:block lg:ml-auto lg:w-[50%] lg:min-h-[700px] relative">
          <img
            src="/images/Desktop.png"
            alt=""
            srcset=""
            className="lg:object-cover w-full h-full absolute"
          />

          <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-10">
            <div className="bg-white/70 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-2">Welcome to FundCirkle</h2>
              <p className="text-sm">
                Empowering communities to save and achieve financial goals
                together through trusted group contributions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="hidden lg:block lg:mr-auto lg:w-[89%] lg:mx-auto">
        <NavBar backLink="/sign-up" />
      </div>
    </div>
  );
}

export default Residence;
