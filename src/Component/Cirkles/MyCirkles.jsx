import React, { useState } from "react";
import CircularProgress from "./CircularProgress";
import messageIcon from "../../assets/images/message.png";
import catIcon from "../../assets/images/cat.png";
import moreIcon from "../../assets/images/more.png";
import { useModal } from "./ModalContext";

const datasets = [
  {
    header: {
      groupName: "Hyderabad",
      groupImage: "../../assets/images/circlepeople.png",
      notifications: [
        { icon: messageIcon, count: 1 },
        { icon: catIcon },
        { icon: moreIcon },
      ],
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
      nextPayment: "Oct 1, 2024",
      yourTurn: "Nov 1, 2024",
    },
    members: [
      { name: "Alice", image: "../../assets/images/member1.png" },
      { name: "Bob", image: "../../assets/images/member2.png" },
      { name: "Carol", image: "../../assets/images/member3.png" },
      { name: "Dave", image: "../../assets/images/member4.png" },
      { name: "Eve", image: "../../assets/images/member5.png" },
      { name: "Frank", image: "../../assets/images/member6.png" },
      { name: "Grace", image: "../../assets/images/member7.png" },
    ],
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/src/assets/images/circlepeople2.png",
      notifications: [{ icon: messageIcon, count: 2 }, { icon: moreIcon }],
    },
    contribution: {
      amount: "80K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 4,
        total: 7,
      },
    },
    dates: {
      nextPayment: "Oct 1, 2024",
      yourTurn: "Dec 1, 2024",
    },
    members: [
      { name: "Henry", image: "../../assets/images/member8.png" },
      { name: "Isabel", image: "../../assets/images/member9.png" },
      { name: "Jack", image: "../../assets/images/member10.png" },
      { name: "Jack", image: "../../assets/images/member11.png" },
      { name: "Jack", image: "../../assets/images/member12.png" },
      { name: "Jack", image: "../../assets/images/member13.png" },
      { name: "Jack", image: "../../assets/images/member14.png" },
    ],
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/src/assets/images/circlepeople3.png",
      notifications: [
        { icon: messageIcon, count: 2 },
        { icon: catIcon },
        { icon: moreIcon },
      ],
    },
    contribution: {
      amount: "80K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 1,
        total: 12,
      },
    },
    dates: {
      nextPayment: "Nov 5, 2024",
      yourTurn: "PAID",
    },
    members: [
      { name: "Henry", image: "../../assets/images/member15.png" },
      { name: "Isabel", image: "../../assets/images/member6.png" },
      { name: "Jack", image: "../../assets/images/member11.png" },
      { name: "Jack", image: "../../assets/images/member18.png" },
      { name: "Jack", image: "../../assets/images/member19.png" },
      { name: "Jack", image: "../../assets/images/member20.png" },
      { name: "Jack", image: "../../assets/images/member21.png" },
      { name: "Henry", image: "../../assets/images/member22.png" },
      { name: "Isabel", image: "../../assets/images/member23.png" },
      { name: "Jack", image: "../../assets/images/member24.png" },
      { name: "Jack", image: "../../assets/images/member25.png" },
      { name: "Jack", image: "../../assets/images/member26.png" },
    ],
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/src/assets/images/circlepeople4.png",
      notifications: [{ icon: messageIcon, count: 2 }, { icon: moreIcon }],
    },
    contribution: {
      amount: "80K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 7,
        total: 9,
      },
    },
    dates: {
      nextPayment: "Nov 5, 2024",
      yourTurn: "Dec 1, 2024",
    },
    members: [
      { name: "Henry", image: "../../assets/images/member27.png" },
      { name: "Isabel", image: "../../assets/images/member28.png" },
      { name: "Jack", image: "../../assets/images/member29.png" },
      { name: "Henry", image: "../../assets/images/member30.png" },
      { name: "Isabel", image: "../../assets/images/member31.png" },
      { name: "Jack", image: "../../assets/images/member32.png" },
      { name: "Henry", image: "../../assets/images/member11.png" },
      { name: "Isabel", image: "../../assets/images/member34.png" },
      { name: "Jack", image: "../../assets/images/member35.png" },
    ],
  },

  {
    header: {
      groupName: "Hyderabad",
      groupImage: "/src/assets/images/circlepeople5.png",
      notifications: [
        { icon: messageIcon, count: 2 },
        { icon: catIcon },
        { icon: moreIcon },
      ],
    },
    contribution: {
      amount: "80K",
      currencySymbol: "₹",
      paymentStatus: {
        completed: 3,
        total: 8,
      },
    },
    dates: {
      nextPayment: "OCT 1, 2024",
      yourTurn: "PAID",
    },
    members: [
      { name: "Henry", image: "/src/assets/images/member36.png" },
      { name: "Isabel", image: "/src/assets/images/member37.png" },
      { name: "Jack", image: "/src/assets/images/member11.png" },
      { name: "Henry", image: "/src/assets/images/member39.png" },
      { name: "Isabel", image: "/src/assets/images/member40.png" },
      { name: "Jack", image: "/src/assets/images/member41.png" },
      { name: "Henry", image: "/src/assets/images/member42.png" },
      { name: "Isabel", image: "/src/assets/images/member43.png" },
    ],
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
      <div className="border-[1px] rounded-[12px] flex bg-gray-50 p-2 shadow-sm">
        {/* Left side */}
        <div className="w-[50%] mb-4 h-fit">
          {/* Header with title */}
          <div className="flex items-center w-[100%] mb-8">
            <img
              src={header.groupImage}
              alt="Group"
              className="w-14 h-14 rounded-full"
            />
            <span className="ml-3 bg-[#B41ACD] text-white px-3 py-1 tetx-[14px] rounded-[8px] text-ellipsis overflow-hidden">
              {header.groupName}
            </span>
          </div>

          {/* Contribution */}
          <div className="mb-5 leading-[15.75px] flex">
            <h1 className="text-xs leading-[15.75px] font-[400] text-wrap overflow-hidden text-black">
              Contribution Amount
            </h1>
            <p className="text-xs font-bold text-[#292D32] flex px-3">
              {contribution.currencySymbol}
              {contribution.amount}
            </p>
          </div>

          {/* Next Payment Dates */}
          <div className="flex justify-between flex-col">
            <div className="mb-5 flex text-xs leading-[15.75px] font-[400] poppins items-center">
              <p className="text-gray-600">Next Payment</p>
              <p className="font-medium bg-[#FEF0F2] ml-auto p-2 border rounded-[8px] text-[#141B34]">
                {dates.nextPayment}
              </p>
            </div>
            <div className="flex text-xs leading-[15.75px] font-[400] poppins items-center">
              <p className="text-gray-600">Your Turn</p>
              <p className="font-medium bg-[#FEF0F2] ml-auto p-2 border rounded-[8px] text-[#141B34]">
                {dates.yourTurn}
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="mb-4 h-fit w-[50%] flex flex-col items-center">
          {/* Icons */}
          <div className="flex space-x-2 text-gray-600 w-[80%] justify-evenly ml-auto mt-4 mb-8">
            {header.notifications.map((notification, index) => (
              <button
                key={index}
                className="relative"
                onClick={index === 0 ? () => openModal("chat") : null}
              >
                <img src={notification.icon} alt="" className="w-8" />
                {notification.count && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {notification.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Payment Info */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <p className="text-black mb-3">Payment Status</p>

              <CircularProgress contribution={contribution} />

              <button className="mt-2 bg-[#F0243B] text-white px-4 py-3 rounded-[8px] text-xs leading-[15.75px]">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Members */}
      <div className="border border-gray-200 p-2 mt-3 rounded-lg">
        <p className="text-black">{members.length} Members</p>
        <div className="flex mt-2 space-x-2 overflow-scroll hide-scrollbar .hide-scrollbar::-webkit-scrollbar">
          {members.map((member, index) => (
            <img
              key={index}
              src={member.image}
              alt={member.name}
              className="w-10 h-10 rounded-full border-2 border-white object-center"
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className=" text-black bg-white px-5 py-3 font-bold text-xl border absolute top-64 -left-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className=" text-black bg-white font-bold px-5 py-3 text-xl border absolute top-64 -right-2   rounded-full t"
      >
        &gt;
      </button>
    </div>
  );
}

export default MyCirkles;
