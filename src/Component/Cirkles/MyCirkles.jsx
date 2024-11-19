

import React, { useState } from "react";
import CircularProgress from "./CircularProgress";
import messageIcon from "/images/chatting.svg";
import catIcon from "../../assets/images/cat.png";
import moreIcon from "/images/more.svg";
import currency from "/images/currency.svg";
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
      currencySymbol: currency,
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
      groupName: "Hyderabad Pharmacis",
      groupImage: "/images/circlepeople2.svg",
      count: "2",
    },
    contribution: {
      amount: "150K",
      currencySymbol: currency,
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
      groupName: "Hyderabad Pharmacis",
      groupImage: "/images/circlepeople3.svg",
      count: "3",
    },
    contribution: {
      amount: "90K",
      currencySymbol: currency,
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
      groupName: "Hyderabad Pharmacis",
      groupImage: "/images/circlepeople4.svg",
      count: "4",
    },
    contribution: {
      amount: "130K",
      currencySymbol: currency,
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
      groupName: "Hyderabad Pharmacis",
      groupImage: "/images/circlepeople5.svg",
      count: "5",
    },
    contribution: {
      amount: "70K",
      currencySymbol: currency,
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
          <div className="w-[50%] flex flex-col justify-center">
            <div className="text-[40px] font-[600] flex items-center">
              <img
                src={contribution.currencySymbol}
                alt=""
                srcset=""
                className="h-9"
              />

              {contribution.amount}
            </div>
            <p className="text-[14px] ">Cirkle Amount</p>
          </div>
          <div className="w-[50%]">
            <CircularProgress contribution={contribution} />

            <p className="text-black mb-3 text-center text-[14px]">
              Payment Status
            </p>
          </div>
        </div>

        <div className=" flex w-[95%] mx-auto justify-between">
          <div
            className="  border rounded-full flex items-center h-10 w-[45%]"
            onClick={() => openModal("chat")}
          >
            <button
              className=" relative  rounded-full p-1 border h-10 bg-[#E5F4EC]"
              onClick={() => openModal("chat")}
            >
              <img src={messageIcon} alt="" srcset="" />

              <span className="absolute top-0 right-0 bg-[#00943F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {header.count}
              </span>
            </button>

            <p className="mx-auto text-[12px]">Messages</p>
          </div>

          <div
            className="  border rounded-full flex items-center h-10 w-[45%]"
            onClick={() => openModal("detail")}
          >
            <div
              className=" rounded-full border h-10 bg-[#E5F4EC]"
              onClick={() => openModal("detail")}
            >
              <button
                className=" relative  rounded-full p-1 border h-10 bg-[#E5F4EC]"
                onClick={() => openModal("detail")}
              >
                <img src={moreIcon} alt="" srcset="" />
              </button>
            </div>

            <p className="mx-auto text-[12px]">Details</p>
          </div>
        </div>

        <div className="flex justify-between bg-[#E5F4EC] items-center mb-5 mt-5 mx-auto w-[95%] p-2 rounded-xl text-[10.5px]">
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
          <h1 className="ml-3   text-black px-3 py-1 text-[22px] rounded-[8px]  text-ellipsis overflow-hidden">
            {header.groupName}
          </h1>
        </div>

        <button
          onClick={handlePrevious}
          className=" text-black border  font-bold text-lg  absolute top-48 p-1 -left-0 rounded-full"
        >
          <img src="/images/arrow-left.svg" alt="" srcset="" />
        </button>
        <button
          onClick={handleNext}
          className=" text-black border font-bold  text-lg  absolute top-48 -right-0 p-1  rounded-full t"
        >
          <img src="/images/arrow-right.svg" alt="" srcset="" />
        </button>
      </div>
    </div>
  );
}

export default MyCirkles;
