import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div>
      <div className="bg-[#E5F7FF] p-5 h-36 flex justify-between items-center">
        <Link to="/profile">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>

        <div className="flex p-1 border rounded-md space-x-1">
          <img src="/images/verified-badge.svg" alt="" srcset="" />
          <p className="text-[8px]">verified</p>
        </div>
      </div>

      <div className="w-32 h-32 rounded-full border-2 mx-auto relative -mt-20 mb-3 ">
        <img
          src="/images/person4.svg"
          alt=""
          srcset=""
          className="w-full h-full"
        />
        <img
          src="/images/edit.svg"
          alt=""
          srcset=""
          className="absolute right-[10%] top-[75%] "
        />
      </div>

      <div className="w-full p-5 ">
        <div className="mb-5">
          <p className="mb-2 text-[12px]">Name</p>
          <input
            type="text"
            placeholder="Bhaavik Jeff Arhaan"
            className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="mb-5 w-[48%]">
            <p className="mb-2 text-[12px]">Email</p>
            <input
              type="text"
              placeholder="bhaavik.arhaan@xyz.com"
              className="border rounded-xl p-5 text-[12px] w-full outline-none text-[#00000080]"
            />
          </div>

          <div className="mb-5 w-[48%]">
            <p className="mb-2 text-[12px]">Phone number</p>
            <input
              type="text"
              placeholder="91 787 847 9083 948"
              className="border rounded-xl p-5 text-[12px] w-full outline-none text-[#00000080]"
            />
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Date of Birth</p>
          <input
            type="text"
            placeholder="12th of May, 1987"
            className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
          />
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Home Address</p>
          <input
            type="text"
            placeholder="14, Street Road, New Town, Mumbai, India"
            className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
          />
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Occupation</p>
          <input
            type="text"
            placeholder="Solopreneur"
            className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
          />
        </div>

        <div className="flex justify-between w-[80%] mx-auto">
          <button className=" border py-3 px-6 rounded-md bg-[#00943F] text-[14px] font-[700] text-white">
            Save Changes
          </button>
          <button className=" border py-3 px-6 rounded-md text-[14px] font-[700] text-black">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
