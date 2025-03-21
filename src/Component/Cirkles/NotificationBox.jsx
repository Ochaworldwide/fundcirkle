import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import axiosInstance from "../../service";
import { useNotification } from "../../contexts/notificationContext";

const NotificationBox = ({ setShowNotification }) => {
  const { notifications, clearNotifications } = useNotification();

  const closeNotification = () => {
    setShowNotification(false);
  };

  const handleAcceptSwap = async (notif) => {
    try {
      const response = await axiosInstance.post("/payment/swap/accept", {
        hash: notif.data.swap_data.hash,
      });
      console.log("Response:", response.message);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const handleDeclineSwap = async (notif) => {
    try {
      const response = await axiosInstance.post("/payment/swap/decline", {
        hash: notif.data.swap_data.hash,
      });
      console.log("Response:", response.message);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen   bg-opacity-50 ">
      <motion.div
        initial={{ x: "100%", opacity: 0 }} // Start off-screen
        animate={{ x: 0, opacity: 1 }} // Slide into view
        exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        // className="fixed top-0 left-0 right-0 bg-white shadow-lg mt-4 rounded-lg mx-auto w-96 z-50 p-4"
        className="fixed top-16 left-0 right-0 rounded-lg mx-auto max-w-md w-[90%] z-50 h-fit max-h-[50%]  bg-white overflow-scroll"
      >
        <div className="flex justify-between items-center  py-5 px-3 border-b border-gray-200">
          <h3
            className="text-lg font-semibold"
            onClick={() => closeNotification()}
          >
            Notifications
          </h3>
          <button
            onClick={clearNotifications}
            className="text-[#00943F] text-sm font-medium hover:underline"
          >
            Mark all as read
          </button>
        </div>

        {notifications.length > 0 ? (
          <>
            <ul>
              {notifications.map((notif, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border"
                >
                  
                  <div className="flex-grow">
                    <p className="text-xs font-[400] text-gray-800 leading-normal">
                      {notif.message}
                    </p>
                    {/* <p className="text-xs text-gray-400">{notif.data.created_at}</p> */}
                    {notif.type ===
                      "App\\Notifications\\SwapRequestNotification" && (
                      <div className="w-full flex gap-3 mt-4 text-xs">
                        <button
                          className="bg-[#00943F] w-[30%] rounded-md font-[600] text-white py-1"
                          onClick={() => {
                            handleAcceptSwap(notif);
                          }}
                        >
                          Accept
                        </button>

                        <button
                          className="text-black w-[30%] font-[600] py-1 border rounded-md"
                          onClick={() => {
                            handleDeclineSwap(notif);
                          }}
                        >
                          Deny
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-500 text-sm w text-center py-3">
            No new notifications
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default NotificationBox;
