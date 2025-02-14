import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../Component/BottomNav/NavigationBar";
import { useModal } from "../../Component/Cirkles/ModalContext";
import RoastGenerator from "../../Component/Toast/Toast";
import MessageToast from "../../Component/Toast/Toast";
import Toast from "../../Component/Toast/Toast";

const Settings = () => {
  // Manage the states for all toggle buttons individually
  const [toggles, setToggles] = useState({
    twoFactorAuth: false,
    paymentReminders: false,
    cirkleUpdates: false,
    invitations: false,
    systemAnnouncements: false,
  });

  // Function to toggle the state for a specific button
  const handleToggle = (key) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [key]: !prevToggles[key],
    }));
  };

  const { openModal } = useModal();
  const navigate = useNavigate();

  return (
    <div>
      {/* <NavigationBar /> */}
      <div className="p-5 border-b sticky bg-white text-[22px] font-[600] mb-5 top-0">
        <h1 className="text-center">Settings</h1>
      </div>
      <div className="p-3 mb-28 ">
        <Link to="/profile">
          <div className="flex items-center bg-[#E5F7FF] border rounded-md p-3 mb-7">
            <img src="/images/person4.svg" alt="" srcset="" className="h-16" />
            <div className="ml-4">
              <h1 className="text-[18px]">Bhaavik Arhaan</h1>
              <p className="text-[#141B3480] text-[10.5px]">
                bhaavik.arhaan@xyz.com
              </p>
            </div>

            <img
              src="/images/arrow-right.svg"
              alt=""
              srcset=""
              className="ml-auto"
            />
          </div>
        </Link>

        {/* Privacy and Security */}
        <h1 className="mb-3 text-[14px] ml-1">Privacy and Security</h1>
        <div className="bg-[#E5F7FF] px-2 mb-7 border border-[#00000026] rounded-md">
          <div
            className="flex items-center border-b border-[#00000026]  p-5"
            onClick={() => navigate("/startkyc")}
          >
            <h1 className="text-[14px]">KYC Verification</h1>

            <img
              src="/images/arrow-right.svg"
              alt=""
              srcset=""
              className="ml-auto"
            />
          </div>

          <div
            className="flex items-center  border-b border-[#00000026] p-5"
            onClick={() => openModal("Bank Information")}
          >
            <div>
              <h1 className="text-[14px] mb-2">Bank Information</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Update your Bank account details
              </p>
            </div>

            <img
              src="/images/arrow-right.svg"
              alt=""
              srcset=""
              className="ml-auto"
            />
          </div>

          <Link to="/updatepassword">
            <div className="flex items-center  border-b border-[#00000026]  p-5">
              <div>
                <h1 className="text-[14px] mb-2">Change Password</h1>
                <p className="text-[10.5px] text-[#141B3480]">
                  Update Password
                </p>
              </div>

              <img
                src="/images/arrow-right.svg"
                alt=""
                srcset=""
                className="ml-auto"
              />
            </div>
          </Link>

          {/* Two-Factor Authentication */}
          <div className="flex items-center rounded-md px-5 pt-5 pb-7">
            <div>
              <h1 className="text-[14px] mb-2">
                Two-Factor Authentication (2FA)
              </h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Toggle on/off for added security
              </p>
            </div>
            <button
              className={`w-10 h-5 rounded-full flex items-center px-1 transition duration-300 ml-auto ${
                toggles.twoFactorAuth ? "bg-[#00AAFF]" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("twoFactorAuth")}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition duration-300 ${
                  toggles.twoFactorAuth ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <h1 className="mb-3 text-[14px] ml-1">Notification Preferences</h1>
        <div className="bg-[#E5F7FF] border border-[#00000026] rounded-md  px-2 mb-7">
          {/* Payment Reminders */}
          <div className="flex items-center border-b border-[#00000026] px-5 pt-5 pb-7">
            <div>
              <h1 className="text-[14px] mb-2">Payment Reminders</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Receive reminders for upcoming payments
              </p>
            </div>
            <button
              className={`w-10 h-5 rounded-full flex items-center px-1 transition duration-300 ml-auto ${
                toggles.paymentReminders ? "bg-[#00AAFF]" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("paymentReminders")}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition duration-300 ${
                  toggles.paymentReminders ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Cirkle Updates */}
          <div className="flex items-center border-b border-[#00000026] px-5 pt-5 pb-7">
            <div>
              <h1 className="text-[14px] mb-2">Cirkle Updates</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Get updates on changes in your Cirkles
              </p>
            </div>
            <button
              className={`w-10 h-5 rounded-full flex items-center px-1 transition duration-300 ml-auto ${
                toggles.cirkleUpdates ? "bg-[#00AAFF]" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("cirkleUpdates")}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition duration-300 ${
                  toggles.cirkleUpdates ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Invitations */}
          <div className="flex items-center border-b border-[#00000026] px-5 pt-5 pb-7">
            <div>
              <h1 className="text-[14px] mb-2">Invitations</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Receive notifications for pending invitations
              </p>
            </div>
            <button
              className={`w-10 h-5 rounded-full flex items-center px-1 transition duration-300 ml-auto ${
                toggles.invitations ? "bg-[#00AAFF]" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("invitations")}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition duration-300 ${
                  toggles.invitations ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* System Announcements */}
          <div className="flex items-center px-5 pt-5 pb-7">
            <div>
              <h1 className="text-[14px] mb-2">System Announcements</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Stay updated with platform news and updates
              </p>
            </div>
            <button
              className={`w-10 h-5 rounded-full flex items-center px-1 transition duration-300 ml-auto ${
                toggles.systemAnnouncements ? "bg-[#00AAFF]" : "bg-gray-300"
              }`}
              onClick={() => handleToggle("systemAnnouncements")}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition duration-300 ${
                  toggles.systemAnnouncements
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Help and Support */}
        <h1 className="mb-3 text-[14px] ml-1">Help and Support</h1>
        <div className="bg-[#E5F7FF] border border-[#00000026] rounded-md px-2 mb-7">
          <div className="flex items-center  border-b border-[#00000026] p-5">
            <div>
              <h1 className="text-[14px] mb-2">FAQ</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                View Frequently Asked Questions
              </p>
            </div>

            <img
              src="/images/arrow-right.svg"
              alt=""
              srcset=""
              className="ml-auto"
            />
          </div>

          <div className="flex items-center  border-b border-[#00000026] p-5">
            <div>
              <h1 className="text-[14px] mb-2">Contact Support</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Reach out to our support team for assistance
              </p>
            </div>

            <img
              src="/images/arrow-right.svg"
              alt=""
              srcset=""
              className="ml-auto"
            />
          </div>

          <div className="flex items-center p-5">
            <div>
              <h1 className="text-[14px] mb-2">Report a Problem</h1>
              <p className="text-[10.5px] text-[#141B3480]">
                Report any issues or bugs
              </p>
            </div>

            <img
              src="/images/arrow-right.svg"
              alt=""
              srcset=""
              className="ml-auto"
            />
          </div>
        </div>

        {/* General */}
        <h1 className="mb-3 text-[14px] ml-1">General</h1>
        <div className="bg-[#E5F7FF] px-2 mb-7 border border-[#00000026] rounded-md">
          <div className="flex items-center p-5">
            <div>
              <h1 className="text-[14px] mb-2">Language</h1>
            </div>

            <div className="ml-auto flex space-x-2">
              <select
                name="Language"
                id=""
                className=" p-1 rounded-md text-[#141B3480] text-[10.5px]"
              >
                <option value="">English</option>
                <option value="">French</option>
                <option value="">Indian</option>
              </select>

              <img src="/images/arrow-right.svg" alt="" srcset="" />
            </div>
          </div>
        </div>

        {/* Logout */}
        <h1 className="mb-3 text-[14px] ml-1">Logout</h1>
        <div className="bg-[#E5F7FF] border border-[#00000026] rounded-md px-2 mb-7">
          <div className="flex items-center  border-b border-[#00000026] p-5">
            <div className="flex items-center space-x-3">
              <img src="/images/logout-03.svg" alt="" srcset="" />
              <div>
                <h1 className="text-[14px] mb-2">Logout</h1>
                <p className="text-[10.5px] text-[#141B3480]">
                  Logout of FundCirkle
                </p>
              </div>
            </div>

            <img
              src="/images/arrow-right.svg"
              alt=""
              srcset=""
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
