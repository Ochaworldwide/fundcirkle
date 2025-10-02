import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import SimpleDropdown from "./SimpleDropdown";
import LocationDropdown from "./LocationDropdown";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import MultiEmailInput from "../Common/multiEmailInput";
import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";
import { FaUpload } from "react-icons/fa";
import { UserContext } from "../../contexts/userDetails";
import StatusReportModal from "../StatusReport/StatusReportModal";
import { PulseLoader } from "react-spinners";

const CreateNewCirkleModal = () => {
  const currentMonthName = new Date().toLocaleString("default", {
    month: "long",
  });
  const [name, setCirkleName] = useState("");
  const [description, setDescription] = useState("");
  const [contribution_amount, setAmount] = useState();
  const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState("1");
  const [members, setMembers] = useState(2);
  const [frequency, setFrequency] = useState("monthly");
  const [userCountry, setUserCountry] = useState("");
  const [listCountries, setListCountries] = useState([]);
  const [userStateId, setUserStateId] = useState([]);
  const [dueDate, setDueDate] = useState();
  const [step, setStep] = useState(1); // Step state to track current view
  const [isPublic, setIsPublic] = useState(true);
  const [privacy, setPrivacy] = useState("public");
  const navigate = useNavigate();
  const [emails, setEmails] = useState([]);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [states, setStates] = useState([]);
  const [state, setState] = useState();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthName);

  const { user, refetchUser } = useContext(UserContext);

  const { isModalOpen, modalType, closeModal } = useModal();
  const { showStatusReport } = useModal();
  const [loading, setLoading] = useState(false);

  const resetState = () => {
    setCirkleName("");
    setDescription("");
    setAmount("");
    setCategory([]);
    setSelectedCategoryId("1");
    setMembers(2);
    setFrequency("monthly");
    setStep(1);
    setDueDate("");
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

          //fetch categories
          const categoriesResponse = await axiosInstance.get(
            "/cirkle-categories"
          );
          setCategories(categoriesResponse.data.data);

          // Fetch user account details
          const userResponse = await axiosInstance.get("/account");
          const userCountry = userResponse.data.data.country;
          setUserCountry(userCountry); // Ensure this state is set before proceeding

          // Wait for the `userCountry` to be set
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
            const stateData = stateResponse.data.data;
            if (stateData.length > 0) {
              setStates(stateData);
            } else {
              console.warn("No states found for the country.");
            }
          }

          if (states && states.length > 0) {
            setState(states[0].id); // Set the first state's ID as default
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
  }, [isModalOpen, modalType]); // Ensure modalType is also included in the dependency array

  if (!isModalOpen || modalType !== "create") return null;

  // const handleCategoryChange = (e) => {
  //   const newSelectedCategoryId = e.target.selectedOptions[0].id; // Get the id of the selected option
  //   setCategory(e.target.value); // Update selected value
  //   setSelectedCategoryId(newSelectedCategoryId); // Update selected id
  // };

  const handleCategoryChange = (e) => {
    const newSelectedCategoryId = e.target.selectedOptions[0].id;
    setCategory(e.target.value);
    setSelectedCategoryId(newSelectedCategoryId);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // For displaying the image preview
      };
      reader.readAsDataURL(file);
      setImageFile(file); // Store the file object
    }
  };


  const handleSubmit = async () => {
    // Validate required fields
    setLoading(true);
    if (
      !name ||
      !category ||
      !contribution_amount ||
      !selectedMonth ||
      !privacy
    ) {
        showStatusReport("Please fill in all required fields!");

      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    if (emails && emails.length) {
      emails.forEach((email, index) => {
        formData.append(`members[${index}]`, email);
      });
    }
    formData.append("max_members", members);
    if (description) formData.append("description", description);
    formData.append("category", selectedCategoryId);
    formData.append("contribution_amount", contribution_amount);
    formData.append("contribution_frequency", frequency);
    formData.append("contribution_day", dueDate);
    formData.append("start_month", selectedMonth);
    formData.append("privacy", privacy);
    formData.append("state", state);
    formData.append("currency", "INR");

    // Add image file if it exists
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await axiosInstance.post(
        ROUTES.CIRKLE.GET_USER_CIRKLES,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        navigate("/creationsuccess");
        closeModal();
        resetState();
        showStatusReport("Cirkle created successfully!");
      } else {
        showStatusReport("Failed to create Cirkle: " + response.data.message);
      }
    } catch (error) {
      if (error.response) {
        showStatusReport(
          "Warning: " + error.response.data.message || error.response.statusText
        );
      } else if (error.request) {
        showStatusReport(
          "Network Error: No response received from the server."
        );
      } else {
        showStatusReport("Warning: " + error.message);
      }
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    const requiredFields = [
      name,
      category,
      contribution_amount,
      selectedMonth,
      dueDate,
    ];

    const isInvalid = requiredFields.some(
      (field) => !field || (typeof field === "string" && field.trim() === "")
    );

    if (isInvalid) {
      showStatusReport("Please fill in all required fields!");
    } else {
      setStep(2);
    }
  };

  const handlePrev = () => {
    setStep(1); // Change step to display the next component
  };

  // Function to handle button clicks
  const handleDueDateClick = (date) => {
    setDueDate(date);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setDueDate(null);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50 ">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[90%] bg-white overflow-scroll"
      >
        <div className="pb-20 rounded-lg max-w-md w-full ">
          {/* Conditionally render based on step */}
          {step === 1 ? (
            <>
              {/* Head */}
              <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl mb-5 sticky top-0">
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
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col ">
                    <span className="text-[12px]">Cirkle Name</span>
                    <input
                      type="text"
                      placeholder="Enter Cirkle Name"
                      value={name}
                      onChange={(e) => setCirkleName(e.target.value)}
                      className="border rounded-lg px-3 py-2 text-sm outline-none border-[#00000066]"
                    />
                  </div>

                  <div className="flex flex-col items-center ml-4">
                    <span className="text-[12px]">Members</span>
                    <div className="flex items-center space-x-2 border rounded-lg border-[#00000066]">
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
                  className="w-full border rounded-lg px-3 py-2 mb-4 text-sm outline-none border-[#00000066]"
                ></textarea>

                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center space-x-3">
                    <img src="/images/blue-currency.svg" alt="" srcset="" />
                    {/* <span className="text-2xl mr-2">₹</span> */}
                    <input
                      type="number"
                      value={contribution_amount}
                      placeholder="2000"
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-28 border rounded-lg px-3 py-2 text-sm outline-none border-[#00000066]"
                    />
                  </div>

                  <div>
                    <select
                      value={category}
                      id="category-select"
                      onChange={handleCategoryChange}
                      className="border outline-none rounded-lg px-3 py-2 border-[#00000066]"
                    >
                      {categories.map((cat) => (
                        <option
                          key={cat.id}
                          id={cat.id.toString()}
                          value={cat.name}
                        >
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                <p className="text-[12px] font-medium mb-5 mx-auto w-fit mt-5">
                  Select Start month and payment due date
                </p>

                <div className="mb-4 flex flex-col items-center h-[250px] ">
                  {/* Month Selection Dropdown */}
                  <select
                    className="mb-4 px-3 py-2 rounded-md text-sm mx-auto bg-white outline-none"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>

                  {/* Date Selection Grid */}
                  <div className="grid grid-cols-7 gap-3">
                    {[...Array(daysInMonth[selectedMonth])].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleDueDateClick(i + 1)}
                        className={`w-8 h-7 flex items-center justify-center rounded-lg text-[11px] font-medium ${
                          dueDate === i + 1 ? "bg-green-500 text-white" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
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
              <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl mb-5 sticky top-0">
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

              <div className=" border-y flex justify-between w-[90%] mx-auto items-center py-3">
                <div className="p-5 text-[12px]">Select State</div>

                <div className="w-[60%]">
                  <select
                    id=""
                    value={state}
                    onChange={(e) => {
                      const selectedValue = e.target.value; // Get the selected option's value
                      setState(selectedValue); // Update the state
                    }}
                    className="w-full border px-3 py-3 rounded-lg border-[#00000066] bg-white text-[#00000080] outline-[#00943F]"
                  >
                    <option value="" disabled selected>
                      Select State
                    </option>
                    {states &&
                      states.map((option, index) => (
                        <option key={index} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="w-[90%] mx-auto mb-5 border-y  py-4">
                <div className=" flex justify-between mb-3">
                  <div className=" text-[12px] flex items-center space-x-2 pl-3">
                    <div className="w-14 h-14 rounded-full border-2 mx-auto flex items-center justify-center relative ">
                      <label className="flex w-full h-full items-center absolute justify-center border-2  rounded-full cursor-pointer overflow-hidden transition-all">
                        {image ? (
                          <img
                            src={image}
                            alt="Uploaded"
                            className="w-full h-full object-cover rounded-full "
                          />
                        ) : (
                          <div className="flex flex-col items-center text-gray-500  w-full">
                            <FaUpload />
                          </div>
                        )}
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>

                    <div>
                      <h1>{user.full_name}</h1>
                      <p>{user.email}</p>
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

              {/* <div className="flex w-[70%] mx-auto justify-between mb-10">
                <div className="px-2 py-2 border rounded-lg flex items-center justify-evenly w-[45%]">
                  <img src="/images/copy.svg" alt="" srcset="" />

                  <p className="text-[10.5px]">Copy Link</p>
                </div>

                <div className="px-2 py-2 border rounded-lg flex items-center justify-evenly w-[45%]">
                  <img src="/images/share.svg" alt="" srcset="" />

                  <p className="text-[10.5px]">Share Link</p>
                </div>
              </div> */}

              {/* Member Payment Schedule */}

              {/* <div className="mb-2">
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
              </div> */}

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
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <PulseLoader size={12} color="white" />
                  ) : (
                    "Confirm and Create Cirkle"
                  )}
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
