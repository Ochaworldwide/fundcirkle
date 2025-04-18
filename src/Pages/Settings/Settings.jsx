import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../Component/BottomNav/NavigationBar";
import { useModal } from "../../Component/Cirkles/ModalContext";
import RoastGenerator from "../../Component/Toast/Toast";
import MessageToast from "../../Component/Toast/Toast";
import Toast from "../../Component/Toast/Toast";
import axiosInstance from "../../service";
import { UserContext } from "../../contexts/userDetails";
import { CiUser } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import BankInformationModal from "./BankInformationModal";
import BankInformationDesktop from "./BankInformationDesktop";
import UpdatePasswordDesktop from "./UpdatePasswordDesktop";
import HelpAndSupport from "./HelpAndSupport";
import NotificationBox from "../../Component/Cirkles/NotificationBox";
import { useNotification } from "../../contexts/notificationContext";
import ProfileDesktop from "./General";
import General from "./General";

const Settings = () => {
  const [toggles, setToggles] = useState({
    twoFactorAuth: false,
    paymentReminders: false,
    cirkleUpdates: false,
    invitations: false,
    systemAnnouncements: false,
  });

  const { user, refetchUser } = useContext(UserContext);
  console.log(user);
  
  const { openModal } = useModal();
  const navigate = useNavigate();

  const handleToggle = (key) => {
    const updatedToggles = {
      ...toggles,
      [key]: !toggles[key],
    };
    setToggles(updatedToggles);

    // Prepare API request payload
    const requestData = {
      "2fa": updatedToggles.twoFactorAuth,
      notifications: {
        payment_reminders: updatedToggles.paymentReminders,
        cirkle_updates: updatedToggles.cirkleUpdates,
        invitations: updatedToggles.invitations,
        system_announcements: updatedToggles.systemAnnouncements,
      },
    };

    // Send API request to update settings
    axiosInstance
      .post("/account/settings", requestData)
      .then(() => {
        console.log("Settings updated successfully");
      })
      .catch((error) => {
        console.error("Error updating settings:", error);
      });
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove the authentication token
    localStorage.removeItem("user"); // Remove the user info (if needed)
    location.reload(); // Refresh the page
  };

  const [activeTab, setActiveTab] = useState("General");

  const tabs = [
    "General",
    "Privacy and Security",
    "Notification Preferences",
    "Help and Support",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "General":
        return <div>
          <General/>
        </div>;
      case "Privacy and Security":
        return (
          <div>
            <div className="flex justify-between mb-10">
              <BankInformationDesktop />

              <UpdatePasswordDesktop />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center rounded-xl px-5 pt-5 pb-7 w-[45%] border">
                <div>
                  <h1 className="text-base mb-2">
                    Two-Factor Authentication (2FA)
                  </h1>
                  <p className="text-sm text-[#141B3480]">
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

              <div
                className="flex items-center border rounded-xl p-5 w-[45%]"
                onClick={() => navigate("/startkyc")}
              >
                <h1 className="text-base">KYC Verification</h1>

                <img
                  src="/images/arrow-right.svg"
                  alt=""
                  srcset=""
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
        );
      case "Notification Preferences":
        return (

          <div>
            <div className=" border rounded-md px-4 py-5 mb-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  "PaymentReminders",
                  "CirkleUpdates",
                  "Invitations",
                  "SystemAnnouncements",
                ].map((key) => {
                  const descriptions = {
                    PaymentReminders: "Get notified about upcoming payments.",
                    CirkleUpdates: "Stay updated with the latest from Cirkle.",
                    Invitations: "Manage invitations to events and groups.",
                    SystemAnnouncements:
                      "Important system-wide messages and alerts.",
                  };

                  return (
                    <div
                      key={key}
                      className="flex justify-between items-center bg-white rounded-md px-4 py-5 shadow-sm"
                    >
                      <div>
                        <h1 className="text-base font-semibold text-[#141B34] mb-1">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </h1>
                        <p className="text-sm text-[#141B3480] font-medium">
                          {descriptions[key] || "Toggle notifications"}
                        </p>
                      </div>
                      <button
                        className={`w-10 h-5 rounded-full flex items-center px-1 transition duration-300 ${
                          toggles[key] ? "bg-[#00AAFF]" : "bg-gray-300"
                        }`}
                        onClick={() => handleToggle(key)}
                      >
                        <div
                          className={`w-3 h-3 bg-white rounded-full shadow-md transform transition duration-300 ${
                            toggles[key] ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case "Help and Support":
        return <div>
          <HelpAndSupport />
        </div>;
      default:
        return null;
    }
  };

    const { notifications, clearNotifications } = useNotification();
    const [showNotification, setShowNotification] = useState(false);
  
    const NotifyNum = notifications.length;

  useEffect(() => {
    refetchUser();
  }, []);

  return (
    <div>
      {/* <NavigationBar /> */}
      <div className="p-5 border-b sticky bg-white text-[22px] font-[600] mb-5 top-0 lg:hidden">
        <h1 className="text-center">Settings</h1>
      </div>

      <div className="w-[100%] mx-auto  items-center mb-5  h-[100px] hidden lg:flex">
        <div className="w-[40%] flex items-center ">
          <div className="w-[100%] flex py-5 sticky top-0 bg-white lg:relative ">
            <p className="text-[22px] font-[600]">Settings</p>
          </div>
        </div>

        <div className="ml-auto flex space-x-6 items-center">
          <div className="border border-[#00000066] p-2 rounded-full relative ml-auto">
            {NotifyNum === 0 ? (
              " "
            ) : (
              <div className=" absolute top-0 right-0 border border-[#00000066] text-[8px] font-bold flex justify-center text-white   h-[12px] w-[12px] bg-[#00943F] rounded-full">
                {""}

                {NotifyNum}
              </div>
            )}

            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-full"
              onClick={() => setShowNotification(true)}
            >
              <path
                d="M12 6.94V10.27"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M12.0199 2.5C8.3399 2.5 5.3599 5.48 5.3599 9.16V11.26C5.3599 11.94 5.0799 12.96 4.7299 13.54L3.4599 15.66C2.6799 16.97 3.2199 18.43 4.6599 18.91C9.4399 20.5 14.6099 20.5 19.3899 18.91C20.7399 18.46 21.3199 16.88 20.5899 15.66L19.3199 13.54C18.9699 12.96 18.6899 11.93 18.6899 11.26V9.16C18.6799 5.5 15.6799 2.5 12.0199 2.5Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M15.3299 19.32C15.3299 21.15 13.8299 22.65 11.9999 22.65C11.0899 22.65 10.2499 22.27 9.64992 21.67C9.04992 21.07 8.66992 20.23 8.66992 19.32"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>

          <div>
            {user?.profile_pic ? (
              <img
                src={user.profile_pic}
                alt="Profile"
                className="w-14 h-14 rounded-full"
              />
            ) : (
              <FaCircleUser className=" text-gray-500 w-full h-full" />
            )}
          </div>
        </div>

        {showNotification && (
          <NotificationBox setShowNotification={setShowNotification} />
        )}
      </div>

      <div className="p-3 mb-28 lg:hidden">
        <Link to="/profile">
          <div className="flex items-center bg-[#E5F7FF] border border-[#00000066] rounded-md p-3 mb-7">
            <div className="w-[80px] flex items-center justify-center rounded-full h-[80px] overflow-hidden">
              {/* <img
                src={user?.profile_pic}
                alt=""
                className="w-full h-full object-cover "
              /> */}

              {user?.profile_pic ? (
                <img
                  src={user.profile_pic}
                  alt="Profile"
                  className="w-full h-full rounded-full" 
                />
              ) : (
                <FaCircleUser className=" text-gray-500 w-full h-full" />
              )}
            </div>

            <div className="ml-4 w-[200px]">
              <h1 className="text-[18px] truncate">{user?.full_name}</h1>
              <p className="text-[#141B3480] text-[12px] truncate">
                {user?.email}
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
        <div className="bg-[#E5F7FF] px-2 mb-7 border border-[#00000066] rounded-md">
          <div
            className="flex items-center border-b border-[#00000066]  p-5"
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
            className="flex items-center  border-b border-[#00000066] p-5"
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
            <div className="flex items-center  border-b border-[#00000066]  p-5">
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
        <div className="bg-[#E5F7FF] border border-[#00000066] rounded-md px-2 mb-7">
          {[
            "PaymentReminders",
            "CirkleUpdates",
            "Invitations",
            "SystemAnnouncements",
          ].map((key) => {
            const descriptions = {
              PaymentReminders: "Get notified about upcoming payments.",
              CirkleUpdates: "Stay updated with the latest from Cirkle.",
              Invitations: "Manage invitations to events and groups.",
              SystemAnnouncements: "Important system-wide messages and alerts.",
            };

            return (
              <div
                key={key}
                className="flex items-center border-b border-[#00000066] px-5 pt-5 pb-7"
              >
                <div>
                  <h1 className="text-[14px] mb-2">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h1>
                  <p className="text-[10.5px] font-medium text-[#141B3480]">
                    {descriptions[key] || "Toggle notifications"}
                  </p>
                </div>
                <button
                  className={`w-10 h-5 rounded-full flex items-center px-1 transition duration-300 ml-auto ${
                    toggles[key] ? "bg-[#00AAFF]" : "bg-gray-300"
                  }`}
                  onClick={() => handleToggle(key)}
                >
                  <div
                    className={`w-3 h-3 bg-white rounded-full shadow-md transform transition duration-300 ${
                      toggles[key] ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Help and Support */}
        <h1 className="mb-3 text-[14px] ml-1">Help and Support</h1>
        <div className="bg-[#E5F7FF] border border-[#00000066] rounded-md px-2 mb-7">
          <div className="flex items-center  border-b border-[#00000066] p-5">
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

          <div className="flex items-center  border-b border-[#00000066] p-5">
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
        {/* <h1 className="mb-3 text-[14px] ml-1">General</h1>
        <div className="bg-[#E5F7FF] px-2 mb-7 border border-[#00000066] rounded-md">
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
        </div> */}

        {/* Logout */}
        <h1 className="mb-3 text-[14px] ml-1">Logout</h1>
        <div
          className="bg-[#E5F7FF] border border-[#00000066] rounded-md px-2 mb-7"
          onClick={() => logout()}
        >
          <div className="flex items-center  border-[#00000066] p-5">
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

      <div className="hidden lg:block">
        <div className="border-b border-gray-300 mb-4">
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 font-medium ${
                  activeTab === tab
                    ? "text-black border-b-2 border-green-500"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-md ">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Settings;
