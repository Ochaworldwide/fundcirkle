import React from "react";
import { Link } from "react-router-dom";

const IdentityProof = () => {
  return (
    <div className="w-full p-6">
      <div className="mb-10 flex items-center">
        <Link to="/uploaddocument">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>
      </div>

      <div className="">
        <div className="mb-10 w-full">
          <img
            src="/images/proof-of-identity.svg"
            alt=""
            srcset=""
            className="object-cover w-full"
          />
        </div>

        <div className=" border bg-[#FBC8CE1A] p-5  w-[100%] rounded-lg mb-5">
          <p className="mb-5 text-[18px]">Select ID Type:</p>

          <div className="flex items-center mb-5">
            <input type="radio" name="selected" id="" />

            <p className="text-[12px] ml-5">International Passport</p>

            <p className="rounded-md bg-white px-1 py-2 text-[12px] ml-auto">
              Recommended
            </p>
          </div>

          <div className="flex items-center mb-5">
            <input type="radio" name="selected" id="" />

            <p className="text-[12px] ml-5">Aadhaar Card</p>
          </div>

          <div className="flex items-center mb-5">
            <input type="radio" name="selected" id="" />

            <p className="text-[12px] ml-5">Driving License</p>
          </div>

          <div className="flex items-center mb-5">
            <input type="radio" name="selected" id="" />

            <p className="text-[12px] ml-5">Voter’s ID Card</p>
          </div>

          <div className="flex items-center mb-5">
            <input type="radio" name="selected" id="" />

            <p className="text-[12px] ml-5">Pan Card</p>
          </div>

          <div className="flex items-center mb-5">
            <input type="radio" name="selected" id="" />

            <p className="text-[12px] ml-5">NRGEA Job Card</p>
          </div>
        </div>

        <h1 className="text-[22px] font-[600] mb-3">Proof of Identity</h1>

        <p className="mb-10 text-[14px]">
          We need to see your name and ID number clearly printed on an official
          document
        </p>

        <div className="border border-dashed border-[#141B3480] flex py-6 px-10 space-x-10 rounded-md mb-5">
          <img src="/images/file-upload.svg" alt="" srcset="" />

          <div className="w-[60%]">
            <h1 className="text-[14px] mb-1">Upload File</h1>

            <p className="text-[12px] text-[#141B3480]">
              Maximum file size: 5 MB
            </p>
            <p className="text-[12px] text-[#141B3480]">
              Supported Format: JPEG, PNG, or PDF
            </p>
          </div>
        </div>

        <div className="flex items-center mb-10">
          <span className="mr-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="#141B34"
                stroke-width="1.5"
              />
              <path
                d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <p className="text-[12px]">Int’l passport.jpg</p>

          <span className="ml-auto">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M9 11.7349H15"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M10.5 15.6543H13.5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>

        <Link to="/thanks">
          <button className="bg-[#00943F] text-[14px] rounded-md w-full text-white font-extrabold p-5">
            Submit for Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IdentityProof;
