import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
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
            src="/images/thanks.svg"
            alt=""
            srcset=""
            className="object-cover w-full"
          />
        </div>

        <h1 className="text-[22px] font-[700] mb-3">Thank you</h1>

        <p className="mb-10 text-[14px]">
          Your documents are now under review. We will get back to you within
          two business day.
        </p>

        <div className="flex border items-center bg-[#BFFFFF33] p-3 mb-5 w-[100%] rounded-lg border-[#00000066]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3334 15.9998C29.3334 8.63604 23.3638 2.6665 16.0001 2.6665C8.63628 2.6665 2.66675 8.63604 2.66675 15.9998C2.66675 23.3636 8.63628 29.3332 16.0001 29.3332C23.3638 29.3332 29.3334 23.3636 29.3334 15.9998Z"
              stroke="#141B34"
              stroke-width="1.5"
            />
            <path
              d="M10.6667 16.9998C10.6667 16.9998 12.8001 18.2165 13.8667 19.9998C13.8667 19.9998 17.0667 12.9998 21.3334 10.6665"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="w-[70%] font-[400] mx-auto p-3">
            <h1 className="text-[14px] mb-2">Proof of Identity</h1>
            <p className="text-[10.5px] text-[#141B3480]">Submitted</p>
          </div>
        </div>

        <div className="flex border items-center bg-[#BFFFFF33] p-3  w-[100%] rounded-lg mb-3 border-[#00000066]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3334 15.9998C29.3334 8.63604 23.3638 2.6665 16.0001 2.6665C8.63628 2.6665 2.66675 8.63604 2.66675 15.9998C2.66675 23.3636 8.63628 29.3332 16.0001 29.3332C23.3638 29.3332 29.3334 23.3636 29.3334 15.9998Z"
              stroke="#141B34"
              stroke-width="1.5"
            />
            <path
              d="M10.6667 16.9998C10.6667 16.9998 12.8001 18.2165 13.8667 19.9998C13.8667 19.9998 17.0667 12.9998 21.3334 10.6665"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="w-[70%] font-[400] mx-auto p-3">
            <h1 className="text-[14px] mb-2">Proof of Address</h1>
            <p className="text-[10.5px] text-[#141B3480]">Submitted</p>
          </div>
        </div>

        <div className="flex  p-3  w-[100%] rounded-lg space-x-3">
          <img src="/images/security-validation.svg" alt="" srcset="" />

          <div className="w-[80%] font-[400]">
            <p className="text-[10.5px] text-[#141B3480]">
              We Process your information in accordance with our{" "}
              <span className="text-[#00943F]">privacy policy</span> .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
