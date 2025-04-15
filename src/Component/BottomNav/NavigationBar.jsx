import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/Logo.svg";
import Kyc from "../VerifyKyc/kyc";

const NavigationBar = () => {
  const location = useLocation(); // Get the current location
  const [activeTab, setActiveTab] = useState(location.pathname); // Initialize with current path

  const getTabClass = (tab) =>
    activeTab === tab
      ? "text-[#00943F]" // Active tab text color
      : "text-gray-500";

  const getIconColor = (tab) => (activeTab === tab ? "#00943F" : "#141B3480"); // Active tab icon color

  const getBorder = (tab) => (activeTab === tab ? "border" : "");


  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update the state
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen ">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex lg:flex-col lg:justify-start lg:items-center lg:w-full lg:py-4 lg:px-2 lg:border-r lg:shadow-md lg:relative">
        <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5 lg:h-40">
          <img src={logo} alt="" srcset="" />
        </div>

        <Link
          to="/home"
          onClick={() => handleTabChange("/home")}
          className="w-[90%] mb-10"
        >
          <button
            className={`flex flex-row items-center justify-center w-full p-3 rounded-lg space-x-3 ${getBorder(
              "/home"
            )} border-[#00943F]`}
          >
            <div className="w-6 h-6 mb-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11.5"
                  stroke={getIconColor("/home")}
                  stroke-opacity="0.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="7.5"
                  stroke={getIconColor("/home")}
                  stroke-opacity="0.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  stroke={getIconColor("/home")}
                  stroke-opacity="0.5"
                />
              </svg>
            </div>
            <span
              className={`text-xl font-[500] font-[Poppins]  ${getTabClass(
                "/home"
              )}`}
            >
              My Cirkles
            </span>
          </button>
        </Link>

        <Link
          to="/discover"
          onClick={() => handleTabChange("/discover")}
          className="w-[90%] mb-10"
        >
          <button
            className={`flex flex-row items-center justify-center w-full p-3 rounded-lg space-x-3 ${getBorder(
              "/discover"
            )} border-[#00943F]`}
          >
            <div className="w-6 h-6 mb-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                  stroke={getIconColor("/discover")}
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                />
                <path
                  d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z"
                  stroke={getIconColor("/discover")}
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0001 12L11.9937 12.0064"
                  stroke={getIconColor("/discover")}
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span
              className={`text-xl font-[500] font-[Poppins] ${getTabClass(
                "/discover"
              )}`}
            >
              Discover
            </span>
          </button>
        </Link>

        <Link
          to="/payment"
          onClick={() => handleTabChange("/payment")}
          className="w-[90%] mb-28"
        >
          <button
            className={`flex flex-row items-center justify-center w-full p-3 rounded-lg space-x-3 ${getBorder(
              "/payment"
            )} border-[#00943F]`}
          >
            <div className="w-6 h-6 mb-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 15H6C4.11438 15 3.17157 15 2.58579 14.4142C2 13.8284 2 12.8856 2 11V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7V12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15"
                  stroke={getIconColor("/payment")}
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 9C14 10.1045 13.1046 11 12 11C10.8954 11 10 10.1045 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                  stroke={getIconColor("/payment")}
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 17C13 15.3431 14.3431 14 16 14V12C16 10.3431 17.3431 9 19 9V14.5C19 16.8346 19 18.0019 18.5277 18.8856C18.1548 19.5833 17.5833 20.1548 16.8856 20.5277C16.0019 21 14.8346 21 12.5 21H12C10.1362 21 9.20435 21 8.46927 20.6955C7.48915 20.2895 6.71046 19.5108 6.30448 18.5307C6 17.7956 6 16.8638 6 15"
                  stroke={getIconColor("/payment")}
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span
              className={`text-xl font-[500] font-[Poppins] ${getTabClass(
                "/payment"
              )}`}
            >
              Payments
            </span>
          </button>
        </Link>

        {/* Kyc section */}

        <Link to="/personalinfodesktop" className="mb-32">
          <Kyc />
        </Link>

        <Link
          to="/setting"
          onClick={() => handleTabChange("/setting")}
          className="w-[90%] mb-5 "
        >
          <button
            className={`flex flex-row items-center justify-center w-full p-3 rounded-lg space-x-3 ${getBorder(
              "/setting"
            )} border-[#00943F]`}
          >
            <div className="w-6 h-6 mb-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z"
                  stroke={getIconColor("/setting")}
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8.5 16C9.19863 14.7923 10.5044 13.9797 12 13.9797C13.4955 13.9797 14.8013 14.7923 15.5 16M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                  stroke={getIconColor("/setting")}
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <span
              className={`text-xl font-[500] font-[Poppins] ${getTabClass(
                "/setting"
              )}`}
            >
              Settings
            </span>
          </button>
        </Link>
      </div>

      {/* Bottom nav for small screens */}
      <div className="flex items-center absolute bottom-0 right-0 left-0 z-500 lg:hidden">
        <div className="w-full flex justify-around bg-white shadow-lg py-2 fixed bottom-0">
          <Link to="/home" onClick={() => handleTabChange("/home")}>
            <button className="flex flex-col items-center">
              <div className="w-6 h-6 mb-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11.5"
                    stroke={getIconColor("/home")}
                    stroke-opacity="0.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="7.5"
                    stroke={getIconColor("/home")}
                    stroke-opacity="0.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke={getIconColor("/home")}
                    stroke-opacity="0.5"
                  />
                </svg>
              </div>
              <span className={`text-xs ${getTabClass("/home")}`}>
                My Cirkles
              </span>
            </button>
          </Link>

          <Link to="/discover" onClick={() => handleTabChange("/discover")}>
            <button className="flex flex-col items-center">
              <div className="w-6 h-6 mb-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                    stroke={getIconColor("/discover")}
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                  />
                  <path
                    d="M12.4014 8.29796L15.3213 7.32465C16.2075 7.02924 16.6507 6.88153 16.8846 7.11544C17.1185 7.34935 16.9708 7.79247 16.6753 8.67871L15.702 11.5986C15.1986 13.1088 14.9469 13.8639 14.4054 14.4054C13.8639 14.9469 13.1088 15.1986 11.5986 15.702L8.67871 16.6753C7.79247 16.9708 7.34935 17.1185 7.11544 16.8846C6.88153 16.6507 7.02924 16.2075 7.32465 15.3213L8.29796 12.4014C8.80136 10.8912 9.05306 10.1361 9.59457 9.59457C10.1361 9.05306 10.8912 8.80136 12.4014 8.29796Z"
                    stroke={getIconColor("/discover")}
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0001 12L11.9937 12.0064"
                    stroke={getIconColor("/discover")}
                    stroke-opacity="0.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className={`text-xs ${getTabClass("/discover")}`}>
                Discover
              </span>
            </button>
          </Link>

          <Link to="/payment" onClick={() => handleTabChange("/payment")}>
            <button className="flex flex-col items-center">
              <div className="w-6 h-6 mb-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 15H6C4.11438 15 3.17157 15 2.58579 14.4142C2 13.8284 2 12.8856 2 11V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7V12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15"
                    stroke={getIconColor("/payment")}
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 9C14 10.1045 13.1046 11 12 11C10.8954 11 10 10.1045 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                    stroke={getIconColor("/payment")}
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 17C13 15.3431 14.3431 14 16 14V12C16 10.3431 17.3431 9 19 9V14.5C19 16.8346 19 18.0019 18.5277 18.8856C18.1548 19.5833 17.5833 20.1548 16.8856 20.5277C16.0019 21 14.8346 21 12.5 21H12C10.1362 21 9.20435 21 8.46927 20.6955C7.48915 20.2895 6.71046 19.5108 6.30448 18.5307C6 17.7956 6 16.8638 6 15"
                    stroke={getIconColor("/payment")}
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className={`text-xs ${getTabClass("/payment")}`}>
                Payments
              </span>
            </button>
          </Link>

          <Link to="/setting" onClick={() => handleTabChange("/setting")}>
            <button className="flex flex-col items-center">
              <div className="w-6 h-6 mb-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z"
                    stroke={getIconColor("/setting")}
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.5 16C9.19863 14.7923 10.5044 13.9797 12 13.9797C13.4955 13.9797 14.8013 14.7923 15.5 16M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                    stroke={getIconColor("/setting")}
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <span className={`text-xs ${getTabClass("/setting")}`}>
                Settings
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

