import React from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";

const notifications = [
  // Notification data here
  {
    profileImg: "/src/assets/images/notifyImg1.png",
    message: "New invitation from Delhi Friends Club by Amir",
    time: "15 min ago",
  },
  {
    profileImg: "/src/assets/images/notifyImg2.png",
    message: "New invitation from Delhi Friends Club by Amir",
    time: "15 min ago",
  },
  {
    profileImg: "/src/assets/images/notifyImg3.png",
    message: "New invitation from Delhi Friends Club by Amir",
    time: "15 min ago",
  },
];

const NotificationBox = () => {
  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "notification") return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-0 right-0 mt-4 mr-4 bg-white shadow-lg rounded-lg w-96 z-50 p-4"
    >
      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <button
          onClick={closeModal}
          className="text-red-500 text-sm font-medium hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="mt-3 space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start p-2 bg-gray-50 rounded-lg shadow-sm"
          >
            <img
              src={notification.profileImg}
              alt="profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-800">
                {notification.message}
              </p>
              <p className="text-xs text-gray-400">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NotificationBox;