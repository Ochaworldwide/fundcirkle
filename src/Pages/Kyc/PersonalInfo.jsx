import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  return (
    <div className="w-full p-6">
      <div className="mb-10 h-28 flex items-center sticky top-0 bg-white">
        <Link to="/startkyc">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>
      </div>

      <div class="bg-white rounded-lg w-full ">
        <h1 class="text-[22px] font-semibold mb-7 space-y-4">
          Tell us about yourself
        </h1>
        <p class="text-sm text-gray-500 mb-6">
          Make sure the information you enter here is exactly as it appears on
          your government-issued ID.
        </p>

        <form className=" w-full">
          {/* <!-- Legal Name --> */}
          <div class="mb-7 space-y-4">
            <label class="block text-sm mb-1 font-[700]">Legal Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] mb-2"
            />
            <input
              type="text"
              placeholder="Enter middle name (Optional)"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] mb-2"
            />
            <input
              type="text"
              placeholder="Enter last name"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F]"
            />
          </div>

          {/* <!-- Date of Birth --> */}
          <div class="mb-7 space-y-4">
            <label class="block text-sm font-[700] mb-1">Date of Birth *</label>
            <input
              type="number"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F]"
            />
          </div>

          {/* <!-- Proof of Identity Information --> */}
          <div class="mb-7 space-y-4">
            <label class="block text-sm font-[700] mb-1">
              Proof of Identity Information *
            </label>
            <select class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] mb-2">
              <option>Aadhaar ID number</option>
              <option>Passport Number</option>
              <option>Driver's License</option>
            </select>
            <input
              type="text"
              placeholder="Enter your 12 digit number"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F]"
            />
          </div>

          {/* <!-- Address --> */}
          <div class="mb-7 space-y-4">
            <label class="block text-sm font-[700] mb-1">Address *</label>
            <select class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] mb-2">
              <option>Choose Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <input
              type="text"
              placeholder="Address Line 1"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] mb-2"
            />
            <input
              type="text"
              placeholder="Address Line 2 (Optional)"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] mb-2"
            />
            <input
              type="text"
              placeholder="City"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] mb-2"
            />
            <input
              type="text"
              placeholder="State"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F]"
            />
          </div>

          {/* <!-- Public Profile Link --> */}
          <div class="mb-7 space-y-4">
            <label class="block text-sm font-[700] mb-1">
              Your public profile link *
            </label>
            <input
              type="url"
              placeholder="Enter URL"
              class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F]"
            />
          </div>

          {/* Occupation  */}
          <div class="mb-7 space-y-4">
            <label class="block text-sm font-[700] mb-1">
              What is your occupation? *
            </label>
            <select class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] text-gray-500">
              <option>Choose occupation</option>
              <option>Software Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
            </select>
          </div>

          {/* Income Bracket  */}
          <div class="mb-7 space-y-4">
            <label class="block text-sm font-[700] mb-1">
              Select your income bracket *
            </label>
            <select class="w-full border border-gray-300 rounded-md p-4 outline-[#00943F] text-gray-500">
              <option>5k to 20k rupees</option>
              <option>20k to 50k rupees</option>
              <option>50k+ rupees</option>
            </select>
          </div>

          {/* Submit Button  */}

          <div className="flex sticky bottom-0 justify-between w-[100%] py-5 bg-white">
            <button
              type=""
              class="w-[40%] border font-extrabold text-black py-4 rounded-md hover:bg-blue-600 outline-[#00943F]"
            >
              Cancel
            </button>


            <Link to="/uploaddocument" className="w-[50%]">

            <button
              type="submit"
              class="w-[100%] bg-[#00943F] font-extrabold text-white py-4 rounded-md  outline-[#00943F]"
            >
              Continue
            </button>
            
            </Link>

            
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
