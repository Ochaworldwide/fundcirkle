import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../service";
import { useKycState } from "../../hooks/useKycState";

const PersonalInfo = () => {

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
  const [ countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const { kycState, setKycState } = useKycState();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the next page after form submission
    const formdata = new FormData(e.target);
    setKycState(formdata);
    navigate("/uploaddocument");
  };

  return (
    <div className="w-full p-6">
      <div className="mb-10 h-28 flex items-center sticky top-0 bg-white">
        <button onClick={() => navigate("/startkyc")}>
          <img src="/images/arrowback.svg" alt="Back" />
        </button>
      </div>

      <div className="bg-white rounded-lg w-full">
        <h1 className="text-[22px] font-semibold mb-7">
          Tell us about yourself
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Make sure the information you enter here is exactly as it appears on
          your government-issued ID.
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-7 space-y-4">
            <label className="block text-sm font-bold">Legal Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
            <input
              type="text"
              name="middle_name"
              placeholder="Middle Name (Optional)"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
          </div>

          <div className="mb-7 space-y-4">
            <label className="block text-sm font-bold">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
          </div>

          <div className="mb-7 space-y-4">
            <label className="block text-sm font-bold">
              Proof of Identity Information *
            </label>
            <select
              name="identity_info_type"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            >
              <option>Aadhaar ID number</option>
              <option>Passport Number</option>
              <option>Driver's License</option>
            </select>
            <input
              type="text"
              name="identity_info_number"
              placeholder="Enter ID number"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
          </div>

          <div className="mb-7 space-y-4">
            <label className="block text-sm font-bold">Address *</label>

            <select
              name="country"
              // onChange={handleChange}
              id=""
              className="w-full border border-[#00000066] outline-none px-3 py-5 rounded-lg mb-5 bg-white text-[#00000080] rounded-md"
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
              name="address"
              placeholder="Address Line 1"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
            <input
              type="text"
              name="secondary_address"
              placeholder="Address Line 2 (Optional)"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
          </div>

          <div className="mb-7 space-y-4">
            <label className="block text-sm font-bold">
              Your public profile link *
            </label>
            <input
              type="url"
              name="public_profile"
              placeholder="Enter URL"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            />
          </div>

          <div className="mb-7 space-y-4">
            <label className="block text-sm font-bold">Occupation *</label>
            <select
              name="occupation"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            >
              <option>Choose occupation</option>
              <option>Software Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
            </select>
          </div>

          <div className="mb-7 space-y-4">
            <label className="block text-sm font-bold">Income Bracket *</label>
            <select
              name="income_bracket"
              className="w-full border p-4 border-[#00000066] outline-none rounded-md"
              // onChange={handleChange}
            >
              <option>5k to 20k rupees</option>
              <option>20k to 50k rupees</option>
              <option>50k+ rupees</option>
            </select>
          </div>

          <div className="flex justify-between w-full py-5 bg-white">
            <button
              type="button"
              className="w-[40%] border font-bold py-4 rounded-md border-[#00000066] outline-none rounded-md"
              onClick={() => navigate("/startkyc")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-[50%] bg-green-600 text-white font-bold py-4 rounded-md"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
