
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import SimpleDropdown from "./SimpleDropdown";
import LocationDropdown from "./LocationDropdown";
import {useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import MultiEmailInput from "../Common/multiEmailInput";
import axios from "axios";

const CreateNewCirkleModal = () => {
  const [name, setCirkleName] = useState("");
  const [description, setDescription] = useState("");
  const [contribution_amount, setAmount] = useState();
  const [category, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("1");
  const [members, setMembers] = useState(2);
  const [frequency, setFrequency] = useState("monthly");
  const [contribution_Week, setContribution_Week] = useState();
  const [contribution_Month, setContribution_Month] = useState();
  const [contribution_day, setContribution] = useState();
  const [dueDate, setDueDate] = useState();
  const [dueMonth, setDueMonth] = useState();
  const [selectedDay, setSelectedDay] = useState("Friday");
  const [step, setStep] = useState(1); // Step state to track current view
  const [isPublic, setIsPublic] = useState(true);
  const [privacy, setPrivacy] = useState("public");
  const navigate = useNavigate();
  const [emails, setEmails] = useState([]);
  const [userCountry, setUserCountry] = useState("");
  const [listCountries, setListCountries] = useState([]);
  const [userStateId, setUserStateId] = useState([]);
  const [states, setStates] = useState([]);
  const [state, setState] = useState();

  const { isModalOpen, modalType, closeModal } = useModal();

  const resetState = () => {
    setCirkleName("");
    setDescription("");
    setAmount("");
    setCategory([]);
    setSelectedCategoryId("1");
    setMembers(2);
    setFrequency("monthly");
    setSelectedDay("Friday");
    setStep(1);
    setIsPublic(true);
    setPrivacy("public");
    setEmails([]);
  };

  useEffect(() => {
    if (isModalOpen && modalType === "create") {
      const fetchInitialData = async () => {
        try {
          // Fetch the list of countries
          const countriesResponse = await axiosInstance.get("/get/countries");
          const countries = countriesResponse.data.data;
          setListCountries(countries);

          // Fetch user account details
          const userResponse = await axiosInstance.get("/account");
          // const userCountry = userResponse.data.data.country;
          setUserCountry(userResponse.data.data.country);

          // Get the country ID from the list
          const country = countries.find(
            (country) => country.name === userCountry
          );

          const countryId = country ? country.id : null;
          console.log(countryId);

          if (countryId) {
            // Fetch the states for the user's country
            const stateResponse = await axiosInstance.get(
              `get/countries/${countryId}/states`
            );
            const stateData = stateResponse.data.data; // Assuming `data` is the array of states
            // console.log(stateData); // Log the array of states
            if (stateData.length > 0) {
              setStates(stateData);
              // setUserStateId(stateData.id); // Set the ID of the first state
            } else {
              console.warn("No states found for the country.");
            }
          }
        } catch (error) {
          console.error("Error fetching initial data:", error);
        }
      };

      fetchInitialData();
    }

    return () => {
      if (!isModalOpen) {
        resetState();
        setStep(1);
        // Reset modal state or perform cleanup if necessary
      }
    };
  }, [isModalOpen]); // Empty dependency array to run only once on component mount

  if (!isModalOpen || modalType !== "create") return null;

  const handleCategoryChange = (e) => {
    const newSelectedCategoryId = e.target.selectedOptions[0].id; // Get the id of the selected option
    setCategory(e.target.value); // Update selected value
    setSelectedCategoryId(newSelectedCategoryId); // Update selected id
  };

  const handleEmailsChange = (updatedEmails) => {
    setEmails(updatedEmails); // Update the parent state with the latest emails
    // console.log("Emails from MultiEmailInput:", updatedEmails); // Log or use the emails as needed
  };

  const handleSelection = (value, id) => {
    // console.log("Selected value:", value);
    console.log("Selected id:", id);
    setContribution_Week(id);
  };

  const handleMonthlySelection = (value, id) => {
    // console.log("Selected value:", value);
    console.log("Selected id:", id);
    setContribution_Month(id);
  };

  const handleSubmit = () => {
    // Validate required fields
    if (
      !name ||
      !description ||
      !category ||
      !contribution_amount ||
      !frequency ||
      !privacy
    ) {
      console.log("Some required fields are missing!");
      return;
    }

    const payload = {
      name: name,
      members: emails,
      max_members: members,
      description: description,
      category: selectedCategoryId,
      contribution_amount: contribution_amount,
      contribution_frequency: frequency,
      contribution_day: dueDate,
      privacy: privacy,
      state: state,
      currency: "INR",
    };

    console.log("Payload:", payload);

    axiosInstance
      .post(ROUTES.CIRKLE.GET_USER_CIRKLES, payload)
      .then((response) => {
        if (response.data.success) {
          console.log("Cirkle created successfully!");
        } else {
          console.error("API responded with failure:", response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("API Error:", error.response.data);
        } else if (error.request) {
          console.error("Network Error:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  const handleNext = () => {
    setStep(2); // Change step to display the next component
  };

  const handlePrev = () => {
    setStep(1); // Change step to display the next component
  };

  // Function to handle button clicks
  const handleDueDateClick = (date) => {
    setDueDate(date);
    console.log(`Selected Due Date: ${date}`); // Logs the selected date
    // Add additional logic here to save the date, e.g., API call or state update
  };

  return (
    <div className="fixed inset-0 z-50 flex  bg-black   bg-opacity-50 pt-5">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed  left-0 right-0 rounded-lg mx-auto max-w-md z-50 bg-white "
      >
        <div className="pb-20 rounded-lg max-w-md w-full overflow-scroll h-screen">
          {/* Conditionally render based on step */}
          {step === 1 ? (
            <>
              {/* Head */}
              <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl mb-5">
                <img src="/images/tricycle.svg" alt="Circle Icon" />

                <p className="text-[18px] font-[400]">Create New Cirkle</p>
                <button
                  onClick={closeModal}
                  className="text-gray-500 float-right"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* body */}

              <div className="max-w-md mx-auto rounded-lg p-3 ">
                <div className="flex justify-between items-center mb-4">
                  <input
                    type="text"
                    placeholder="Enter Cirkle Name"
                    value={name}
                    onChange={(e) => setCirkleName(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm outline-none"
                  />
                  <div className="flex flex-col items-center ml-4">
                    <span className="text-[12px]">Number of Members</span>
                    <div className="flex items-center space-x-2 border rounded-lg">
                      <button
                        onClick={() =>
                          setMembers((prev) => Math.max(1, prev - 1))
                        }
                        className="w-7 h-7 flex items-center justify-center  rounded-lg text-sm"
                      >
                        -
                      </button>
                      <span className="p-1 text-[12px] bg-[#F5F5F5] rounded-full">
                        {members}
                      </span>
                      <button
                        onClick={() => setMembers((prev) => prev + 1)}
                        className="w-7 h-7 flex items-center justify-center  rounded-lg text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 mb-4 text-sm outline-none"
                ></textarea>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-3">
                    <img src="/images/blue-currency.svg" alt="" srcset="" />
                    {/* <span className="text-2xl mr-2">₹</span> */}
                    <input
                      type="number"
                      value={contribution_amount}
                      placeholder="2000"
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-28 border rounded-lg px-3 py-2 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <select
                      value={category}
                      id="category-select"
                      onChange={handleCategoryChange}
                      className="border rounded-lg px-3 py-2"
                    >
                      <option id="1" value="Personal">
                        Personal
                      </option>
                      <option id="2" value="Business">
                        Business
                      </option>
                      <option id="3" value="Others">
                        Others
                      </option>
                    </select>
                  </div>
                </div>

                <p className="text-[12px] font-[400] mb-5">
                  Contribution Frequency and Due date
                </p>

                <div className="mb-4 flex justify-between h-[200px]">
                  <div className="flex flex-col space-y-2  text-[10.5px] bg-[#EBEBED] w-[25%] h-fit py-1 rounded-md">
                    {["biweekly", "monthly", "quarterly"].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setFrequency(freq)}
                        className={`px-3 py-2 border rounded-md w-[90%] mx-auto text-[#141B3480] ${
                          frequency === freq ? "bg-white text-[#141B34]" : ""
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>

                  <div className="w-[70%] ">
                    {/* Weekday Selection for Biweekly */}
                    {frequency === "biweekly" && (
                      <div className="flex flex-col items-center ">
                        {/* <p className="text-sm mb-2">Select a Weekday</p> */}
                        <SimpleDropdown
                          options={["Week 1", "Week 2"]}
                          onSelect={handleSelection}
                          optionHeading={"Select Week"}
                        />
                        <div className="space-y-2 space-x-2  w-[100%]">
                          {[
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday",
                          ].map((day) => (
                            <button
                              key={day}
                              onClick={() => handleDueDateClick(day)}
                              className={`px-3 py-2 border rounded-lg  text-[10.5px] w-fit ${
                                dueDate === day ? "bg-green-500 text-white" : ""
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Due Date Selection */}
                    {/* {frequency === "monthly" && (
                      <div>
                        <p className="text-sm mb-4 text-center">Pick a Date</p>
                        <div className="grid grid-cols-7 gap-3 flex-wrap  ">
                          {[...Array(28)].map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setDueDate(i + 1)}
                              className={`w-7 h-7 flex items-center justify-center border rounded-lg text-[11px] ${
                                dueDate === i + 1
                                  ? "bg-green-500 text-white"
                                  : ""
                              }`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {frequency === "monthly" && (
                      <div>
                        <p className="text-sm mb-4 text-center">Pick a Date</p>
                        <div className="grid grid-cols-7 gap-3 flex-wrap">
                          {[...Array(28)].map((_, i) => (
                            <button
                              key={i}
                              onClick={() => handleDueDateClick(i + 1)}
                              className={`w-7 h-7 flex items-center justify-center border rounded-lg text-[11px] ${
                                dueDate === i + 1
                                  ? "bg-green-500 text-white"
                                  : ""
                              }`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Due Quaterly Selection */}
                    {frequency === "quarterly" && (
                      <div>
                        <SimpleDropdown
                          options={["Month 1", "Month 2", "Month 3"]}
                          onSelect={handleMonthlySelection}
                          optionHeading={"Select Month"}
                        />
                        <div className="grid grid-cols-7 gap-2 flex-wrap ">
                          {[...Array(28)].map((_, i) => (
                            <button
                              key={i}
                              onClick={() => handleDueDateClick(i + 1)}
                              className={`w-7 h-7 flex items-center justify-center border rounded-lg text-[11px] ${
                                dueDate === i + 1
                                  ? "bg-green-500 text-white"
                                  : ""
                              }`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  className="w-[90%] border border-[#00943F] text-[#00943F] py-2 rounded-lg flex justify-center relative mx-auto "
                  onClick={handleNext} // Change step to 2
                >
                  Next
                  <img
                    src="/images/green-arrow-right.svg"
                    alt=""
                    srcset=""
                    className=" w-fit absolute right-2"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Second Case */}

              {/* Head */}
              <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl mb-5">
                <img
                  src="/images/arrowback.svg"
                  alt="Circle Icon"
                  onClick={handlePrev}
                />

                <p className="text-[18px] font-[400]">Create New Cirkle</p>
                <button
                  onClick={closeModal}
                  className="text-gray-500 float-right"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className=" border-y mb-2 flex justify-between w-[90%] mx-auto items-center">
                <div className="p-5 text-[12px]">Preferred Local Location</div>

                <div className="w-[40%]">
                  <select
                    id=""
                    value={state}
                    onChange={(e) => {
                      const selectedValue = e.target.value; // Get the selected option's value
                      setState(selectedValue); // Update the state
                      // console.log("Selected option:", selectedValue); // Log the selected value
                      console.log(state);
                    }}
                    className="w-full border px-3 py-5 rounded-lg mb-5 bg-white text-[#00000080] outline-[#00943F]"
                  >
                    {states &&
                      states.map((option, index) => (
                        <option key={index} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className=" mb-2 flex justify-between w-[90%] mx-auto">
                <div className="p-5 text-[12px]">Members</div>

                <div className="p-4 border-l text-[12px] ">
                  Anyone with the link can join
                </div>
              </div>

              <div className="w-[90%] mx-auto mb-5 border-y  py-4">
                <div className=" flex justify-between mb-3">
                  <div className=" text-[12px] flex items-center space-x-2 pl-3">
                    <img
                      src="/images/person4.svg"
                      alt=""
                      srcset=""
                      className="h-10"
                    />

                    <div>
                      <h1>Bhaavik Arhaan</h1>
                      <p>bhaavik.arhaan@xyz.com</p>
                    </div>
                  </div>

                  <div className="p-4 flex space-x-3">
                    <img src="/images/crown.svg" alt="" srcset="" />
                    <p>owner</p>
                  </div>
                </div>

                <div>
                  <p className=" text-[10.5px]">Invite Members</p>

                  <div className="flex justify-between">
                    <MultiEmailInput onEmailsChange={handleEmailsChange} />
                  </div>
                </div>
              </div>

              <div className="flex w-[70%] mx-auto justify-between">
                <div className="px-2 py-2 border rounded-lg flex items-center justify-evenly w-[45%]">
                  <img src="/images/copy.svg" alt="" srcset="" />

                  <p className="text-[10.5px]">Copy Link</p>
                </div>

                <div className="px-2 py-2 border rounded-lg flex items-center justify-evenly w-[45%]">
                  <img src="/images/share.svg" alt="" srcset="" />

                  <p className="text-[10.5px]">Share Link</p>
                </div>
              </div>

              {/* Member Payment Schedule */}

              <div className="mb-2">
                <div className="">
                  <div className="p-5 flex justify-between">
                    <p>Member Payment Schedule</p>

                    <img src="/images/badge.svg" alt="" srcset="" />
                  </div>

                  <div className="flex justify-between px-5">
                    <img src="/images/person4.svg" alt="" srcset="" />

                    <img
                      src="/images/person1.svg"
                      alt=""
                      srcset=""
                      className="opacity-[0.1]"
                    />

                    <img
                      src="/images/person2.svg"
                      alt=""
                      srcset=""
                      className="opacity-[0.1]"
                    />

                    <img
                      src="/images/person3.svg"
                      alt=""
                      srcset=""
                      className="opacity-[0.1]"
                    />

                    <img
                      src="/images/person5.svg"
                      alt=""
                      srcset=""
                      className="opacity-[0.1]"
                    />

                    <img
                      src="/images/person6.svg"
                      alt=""
                      srcset=""
                      className="opacity-[0.1]"
                    />
                  </div>
                </div>
              </div>

              {/* public and private section */}

              <div className="flex flex-col items-center justify-center  rounded-md w-[100%]">
                {/* Toggle Buttons */}
                <div className="flex bg-gray-200 rounded-lg mb-4 p-1">
                  <button
                    className={`px-4 py-2 rounded-md text-[10.5px] ${
                      isPublic
                        ? "bg-white text-black font-medium shadow"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    onClick={() => {
                      setIsPublic(true);
                      setPrivacy("public");
                    }}
                  >
                    Public Cirkle
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-[10.5px] ${
                      !isPublic
                        ? "bg-white text-black font-medium shadow"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    onClick={() => {
                      setIsPublic(false);
                      setPrivacy("private");
                    }}
                  >
                    Private Cirkle
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center text-[10.5px] mb-6">
                  {isPublic
                    ? "Public - Visible to all Users, members request to join"
                    : "Private - Invitation-only via the admin's direct invites"}
                </p>

                {/* Confirm Button */}
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition"
                  onClick={() => {
                    handleSubmit();
                    navigate("/creationsuccess");
                    closeModal();
                    resetState();
                  }}
                >
                  Confirm and Create Cirkle
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CreateNewCirkleModal;



