import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../Component/BottomNav/NavigationBar";
import { useModal } from "../../Component/Cirkles/ModalContext";
import RoastGenerator from "../../Component/Toast/Toast";
import MessageToast from "../../Component/Toast/Toast";
import Toast from "../../Component/Toast/Toast";
import axiosInstance from "../../service";
import { UserContext } from "../../contexts/userDetails";

const Settings = () => {
  const [toggles, setToggles] = useState({
    twoFactorAuth: false,
    paymentReminders: false,
    cirkleUpdates: false,
    invitations: false,
    systemAnnouncements: false,
  });

  const { user, refetchUser } = useContext(UserContext);
  console.log(user)

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

  useEffect(() => {
    refetchUser;
  }, []);

  return (
    <div>
      {/* <NavigationBar /> */}
      <div className="p-5 border-b sticky bg-white text-[22px] font-[600] mb-5 top-0">
        <h1 className="text-center">Settings</h1>
      </div>
      <div className="p-3 mb-28 ">
        <Link to="/profile">
          <div className="flex items-center bg-[#E5F7FF] border border-[#00000066] rounded-md p-3 mb-7">
            <div className="w-[80px] flex items-center justify-center rounded-full h-[80px] overflow-hidden">
              <img
                src={user?.profile_pic}
                alt=""
                className="w-full h-full object-cover "
              />
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
    </div>
  );
};

export default Settings;

