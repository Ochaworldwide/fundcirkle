

import React, { useState } from "react";
import CircularProgress from "./CircularProgress";
import messageIcon from "/images/chatting-icon.png";
import catIcon from "../../assets/images/cat.png";
import moreIcon from "/images/more-icon.png";
import { useModal } from "./ModalContext";

const datasets = [
  {
    header: {
      groupName: "Hyderabad Pharmacis",
      groupImage: "/images/circlepeople.svg",
      count: "1",
    },
    contribution: {
      amount: "60K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 5,
        total: 7,
      },
    },
    dates: {
      nextPayment: "Febuary 26, 2025",
    },
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/images/circlepeople2.svg",
      count: "2",
    },
    contribution: {
      amount: "150K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 1,
        total: 12,
      },
    },
    dates: {
      nextPayment: "Nov 5, 2024",
    },
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/images/circlepeople3.svg",
      count: "3",
    },
    contribution: {
      amount: "90K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 1,
        total: 12,
      },
    },
    dates: {
      nextPayment: "Nov 5, 2024",
      
    },
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/images/circlepeople4.svg",
      count: "4",
    },
    contribution: {
      amount: "130K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 7,
        total: 9,
      },
    },
    dates: {
      nextPayment: "Nov 5, 2024",
      
    },
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/images/circlepeople5.svg",
      count: "5",
    },
    contribution: {
      amount: "70K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 3,
        total: 8,
      },
    },
    dates: {
      nextPayment: "OCT 1, 2024",
      
    },
  },
  // Additional datasets can be structured similarly
];

function MyCirkles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datasets.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + datasets.length) % datasets.length
    );
  };

  const { header, contribution, dates, members } = datasets[currentIndex];



  const { openModal } = useModal();

  return (
    <div className="relative">
      <div className="flex flex-col border bg-gray-50 rounded-lg">
        <div className="py-5 flex justify-between w-[95%] mx-auto">
          <div className="w-[50%]">
            <h1 className="text-[40px] font-bold">
              {contribution.currencySymbol}
              {contribution.amount}
            </h1>
            <p>Cirkle Amount</p>
          </div>
          <div className="w-[50%]">
            <CircularProgress contribution={contribution} />

            <p className="text-black mb-3 text-center">Payment Status</p>
          </div>
        </div>

        <div className=" flex w-[95%] mx-auto justify-between">
          <div className="  border rounded-full flex items-center h-10 w-[45%]">
            <button
              className=" relative  rounded-full p-1 border h-10 bg-[#FBC8CE1A]"
              onClick={() => openModal("chat")}
            >
              <svg
                width="full"
                height="full"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 9C19.7048 5.01455 16.0128 2 11.5793 2C6.56549 2 2.5 5.85521 2.5 10.61C2.5 12.8946 3.43819 14.9704 4.96855 16.5108C5.30549 16.85 5.53045 17.3134 5.43966 17.7903C5.28982 18.5701 4.95026 19.2975 4.45305 19.9037C5.76123 20.1449 7.12147 19.9277 8.28801 19.3127C8.70039 19.0954 8.90657 18.9867 9.05207 18.9646C9.15392 18.9492 9.28659 18.9636 9.5 19.0002"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.5 16.2617C11.5 19.1674 13.9628 21.5234 17 21.5234C17.3571 21.5238 17.7132 21.4908 18.064 21.425C18.3165 21.3775 18.4428 21.3538 18.5309 21.3673C18.619 21.3807 18.744 21.4472 18.9938 21.58C19.7004 21.9558 20.5244 22.0885 21.3169 21.9411C21.0157 21.5707 20.81 21.1262 20.7192 20.6496C20.6642 20.3582 20.8005 20.075 21.0046 19.8677C21.9317 18.9263 22.5 17.6578 22.5 16.2617C22.5 13.356 20.0372 11 17 11C13.9628 11 11.5 13.356 11.5 16.2617Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {header.count}
              </span>
            </button>

            <p className="mx-auto">Messages</p>
          </div>

          <div className="  border rounded-full flex items-center h-10 w-[45%]">
            <div className=" rounded-full border h-10 bg-[#FBC8CE1A]">
              <button
                className=" relative  rounded-full p-1 border h-10 bg-[#FBC8CE1A]"
                onClick={() => openModal("detail")}
              >
                <svg
                  width="full"
                  height="full"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 6.5C16 8.433 14.433 10 12.5 10C10.567 10 9 8.433 9 6.5C9 4.567 10.567 3 12.5 3C14.433 3 16 4.567 16 6.5Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                  />
                  <path
                    d="M22.5 17.5C22.5 19.433 20.933 21 19 21C17.067 21 15.5 19.433 15.5 17.5C15.5 15.567 17.067 14 19 14C20.933 14 22.5 15.567 22.5 17.5Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                  />
                  <path
                    d="M9.5 17.5C9.5 19.433 7.933 21 6 21C4.067 21 2.5 19.433 2.5 17.5C2.5 15.567 4.067 14 6 14C7.933 14 9.5 15.567 9.5 17.5Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
            </div>

            <p className="mx-auto">Details</p>
          </div>
        </div>

        <div className="flex justify-between bg-[#FBC8CE1A] items-center mb-5 mt-5 mx-auto w-[95%] p-2 rounded-xl">
          <p className="text-gray-600">Next Payment</p>
          <p className="font-medium ml-auto p-2 border rounded-[8px] w-[45%] text-[#141B34]">
            {dates.nextPayment}
          </p>
        </div>

        <div className="flex items-center justify- w-[95%] mx-auto mb-8">
          <img
            src={header.groupImage}
            alt="Group"
            className="w-14 h-14 rounded-full"
          />
          <h1 className="ml-3 bg-[#B41ACD]  text-white px-3 py-1 text-[22px] rounded-[8px]  text-ellipsis overflow-hidden">
            {header.groupName}
          </h1>
        </div>

        <button
          onClick={handlePrevious}
          className=" text-black bg-white px-3 py-1 font-bold text-xl border absolute top-64 -left-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className=" text-black bg-white font-bold px-3 py-1 text-xl border absolute top-64 -right-2   rounded-full t"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default MyCirkles;
