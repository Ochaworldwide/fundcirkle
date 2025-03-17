// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";


// const NotificationBox = ({ setShowNotification , notificationData }) => {
//   const { isModalOpen, modalType, closeModal } = useModal();
//   const [notifications, setNotifications] = useState([]);

//   const getNotifications = async () => {
//     try {
//       const res = await axiosInstance.get("/notifications");
//       const data = await res.data;
//       return data.data;
//     } catch (error) {
//       console.log({ error });
//     }
//   };

//   useEffect(() => {
//     setNotifications(getNotifications());
//   }, []);

//   // if (!isModalOpen || modalType !== "notification") return null;

//   return (
//     <motion.div
//       initial={{ x: "100%", opacity: 0 }} // Start off-screen
//       animate={{ x: 0, opacity: 1 }} // Slide into view
//       exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
//       transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
//       className="fixed top-0 left-0 right-0 bg-white shadow-lg mt-4 rounded-lg mx-auto w-96 z-50 p-4"
//       // transition={{ type: "spring", stiffness: 100, damping: 15 }}
//       // className="fixed top-0 right-0 mt-4 mr-4 bg-white shadow-lg rounded-lg w-96 z-50 p-4"
//     >
//       <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//         <h3 className="text-lg font-semibold">Notifications</h3>
//         <button
//           onClick={() => setShowNotification(false)}
//           className="text-[#00943F] text-sm font-medium hover:underline"
//         >
//           Mark all as read
//         </button>
//       </div>

//       {!notifications.length ? (
//         <p>No notifications</p>
//       ) : (
//         <div className="mt-3 space-y-3">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="flex items-start p-2 bg-gray-50 rounded-lg shadow-sm"
//             >
//               <img
//                 src={notification.profileImg}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div className="flex-grow">
//                 <p className="text-sm font-medium text-gray-800">
//                   {notification.message}
//                 </p>
//                 <p className="text-xs text-gray-400">{notification.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default NotificationBox;




// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";

// const NotificationBox = ({ setShowNotification, notificationData }) => {
//   const { isModalOpen, modalType, closeModal } = useModal();
//   const [notifications, setNotifications] = useState([]);

//   const getNotifications = async () => {
//     try {
//       const res = await axiosInstance.get("/notifications");
//       const data = await res.data;
//       return data.data;
//     } catch (error) {
//       console.log({ error });
//     }
//   };

//   useEffect(() => {
//     setNotifications(getNotifications());
//   }, []);

//   useEffect(() => {
//     if (notificationData) {
//       setNotifications(notificationData);
//     }

//     console.log(notifications)
//   }, [notificationData]);

//   return (
//     <motion.div
//       initial={{ x: "100%", opacity: 0 }} // Start off-screen
//       animate={{ x: 0, opacity: 1 }} // Slide into view
//       exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
//       transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
//       className="fixed top-0 left-0 right-0 bg-white shadow-lg mt-4 rounded-lg mx-auto w-96 z-50 p-4"
//     >
//       <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//         <h3 className="text-lg font-semibold">Notifications</h3>
//         <button
//           onClick={() => setShowNotification(false)}
//           className="text-[#00943F] text-sm font-medium hover:underline"
//         >
//           Mark all as read
//         </button>
//       </div>

//       {!notifications.length ? (
//         <p>No notifications</p>
//       ) : (
//         <div className="mt-3 space-y-3">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="flex items-start p-2 bg-gray-50 rounded-lg shadow-sm"
//             >
//               <img
//                 src={notification.profileImg}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div className="flex-grow">
//                 <p className="text-sm font-medium text-gray-800">
//                   {notification.message}
//                 </p>
//                 <p className="text-xs text-gray-400">{notification.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default NotificationBox;







// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";

// const NotificationBox = ({ setShowNotification, notificationData }) => {
//   const { isModalOpen, modalType, closeModal } = useModal();
//   const [notifications, setNotifications] = useState([]);

//   const getNotifications = async () => {
//     try {
//       const res = await axiosInstance.get("/notifications");
//       const data = await res.data;
//       return data.data;
//     } catch (error) {
//       console.log({ error });
//     }
//   };

//   useEffect(() => {
//     setNotifications(getNotifications());
//   }, []);

//   useEffect(() => {
//     if (notificationData) {
//       const formattedNotification = {
//         id: notificationData.id,
//         message: notificationData.message,
//         time: new Date(notificationData.created_at).toLocaleString(),
//         profileImg:
//           notificationData.file_url || "https://via.placeholder.com/40", // Placeholder if no image
//       };
//       setNotifications((prev) => [formattedNotification, ...prev]);
//     }
//   }, [notificationData]);

//   return (
//     <motion.div
//       initial={{ x: "100%", opacity: 0 }} // Start off-screen
//       animate={{ x: 0, opacity: 1 }} // Slide into view
//       exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
//       transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
//       className="fixed top-0 left-0 right-0 bg-white shadow-lg mt-4 rounded-lg mx-auto w-96 z-50 p-4"
//     >
//       <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//         <h3 className="text-lg font-semibold">Notifications</h3>
//         <button
//           onClick={() => setShowNotification(false)}
//           className="text-[#00943F] text-sm font-medium hover:underline"
//         >
//           Mark all as read
//         </button>
//       </div>

//       {!notifications.length ? (
//         <p>No notifications</p>
//       ) : (
//         <div className="mt-3 space-y-3">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="flex items-start p-2 bg-gray-50 rounded-lg shadow-sm"
//             >
//               <img
//                 src={notification.profileImg}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div className="flex-grow">
//                 <p className="text-sm font-medium text-gray-800">
//                   {notification.message}
//                 </p>
//                 <p className="text-xs text-gray-400">{notification.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default NotificationBox;





// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";

// const NotificationBox = ({ setShowNotification, notificationData }) => {
//   const { isModalOpen, modalType, closeModal } = useModal();
//   const [notifications, setNotifications] = useState([]);

//   const getNotifications = async () => {
//     try {
//       const res = await axiosInstance.get("/notifications");
//       return res.data.data || [];
//     } catch (error) {
//       console.log({ error });
//       return [];
//     }
//   };

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const data = await getNotifications();
//       setNotifications(data);
//     };
//     fetchNotifications();
//   }, []);

//   useEffect(() => {
//     if (notificationData) {
//       const formattedNotification = {
//         id: notificationData.id,
//         message: notificationData.message,
//         time: new Date(notificationData.created_at).toLocaleString(),
//         profileImg:
//           notificationData.file_url || "https://via.placeholder.com/40", // Placeholder if no image
//       };
//       setNotifications((prev = []) => [formattedNotification, ...prev]);
//     }
//   }, [notificationData]);

//   return (
//     <motion.div
//       initial={{ x: "100%", opacity: 0 }} // Start off-screen
//       animate={{ x: 0, opacity: 1 }} // Slide into view
//       exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
//       transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
//       className="fixed top-0 left-0 right-0 bg-white shadow-lg mt-4 rounded-lg mx-auto w-96 z-50 p-4"
//     >
//       <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//         <h3 className="text-lg font-semibold">Notifications</h3>
//         <button
//           onClick={() => setShowNotification(false)}
//           className="text-[#00943F] text-sm font-medium hover:underline"
//         >
//           Mark all as read
//         </button>
//       </div>

//       {!notifications.length ? (
//         <p>No notifications</p>
//       ) : (
//         <div className="mt-3 space-y-3">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="flex items-start p-2 bg-gray-50 rounded-lg shadow-sm"
//             >
//               <img
//                 src={notification.profileImg}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div className="flex-grow">
//                 <p className="text-sm font-medium text-gray-800">
//                   {notification.message}
//                 </p>
//                 <p className="text-xs text-gray-400">{notification.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default NotificationBox;







import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import axiosInstance from "../../service";

const NotificationBox = ({ setShowNotification, notificationData }) => {
  const { isModalOpen, modalType, closeModal } = useModal();
  const [notifications, setNotifications] = useState([]);

  // const getNotifications = async () => {
  //   try {
  //     const res = await axiosInstance.get("/notifications");
  //     return res.data.data || [];
  //   } catch (error) {
  //     console.log({ error });
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     const data = await getNotifications();
  //     setNotifications(data);
  //   };
  //   fetchNotifications();
  // }, []);

  useEffect(() => {
    if (notificationData) {
      const formattedNotification = {
        id: notificationData.id,
        message: notificationData.message,
        time: new Date(notificationData.created_at).toLocaleString(),
        profileImg:
          notificationData.file_url ||
          "https://unsplash.com/photos/a-person-holding-a-cell-phone-in-their-hand-BbAh4kTXUM4", // Placeholder if no image
      };

      setNotifications((prev = []) => {
        const existingIds = new Set(prev.map((n) => n.id));
        return existingIds.has(formattedNotification.id)
          ? prev
          : [formattedNotification, ...prev];
      });
    }
  }, [notificationData]);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }} // Start off-screen
      animate={{ x: 0, opacity: 1 }} // Slide into view
      exit={{ x: "100%", opacity: 0 }} // Slide out when unmounted
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      className="fixed top-0 left-0 right-0 bg-white shadow-lg mt-4 rounded-lg mx-auto w-96 z-50 p-4"
    >
      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <button
          onClick={() => setShowNotification(false)}
          className="text-[#00943F] text-sm font-medium hover:underline"
        >
          Mark all as read
        </button>
      </div>

      {!notifications.length ? (
        <p>No notifications</p>
      ) : (
        <div className="mt-3 space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start p-2 bg-gray-50 rounded-lg shadow-sm"
            >
              <img
                src={notification?.profileImg}
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
      )}
    </motion.div>
  );
};

export default NotificationBox;
