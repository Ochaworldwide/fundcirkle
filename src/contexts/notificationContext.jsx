// import { createContext, useContext, useEffect, useState } from "react";
// import { UserContext } from "./userDetails";

// const NotificationContext = createContext();

// export const NotificationProvider = ({ children}) => {
//   const [notificationData, setNotificationData] = useState(null);

//   const { user, refetchUser } = useContext(UserContext);

//   useEffect(() => {
//     if (user?.id && window.Echo) {
//       const channels = window.Echo.connector.channels;
//       if (!Object.keys(channels).includes(`private-User.${user.id}`)) {
//         window.Echo.private(`User.${user.id}`).notification((data) => {
//           console.log("New Notification:", data);
//           setNotificationData(data);
//         });
//       }
//     }

//     return () => {
//       if (user?.id && window.Echo) {
//         window.Echo.leave(`private-User.${user.id}`);
//       }
//     };
//   }, [user]);

//   return (
//     <NotificationContext.Provider
//       value={{ notificationData, setNotificationData }}
//     >
//       {children}
//     </NotificationContext.Provider>
//   );
// };

// export const useNotification = () => {
//   return useContext(NotificationContext);
// };




// import { createContext, useContext, useEffect, useState } from "react";
// import { UserContext } from "./userDetails";

// const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]); // Store notifications as an array

//   const { user, refetchUser } = useContext(UserContext);

//   useEffect(() => {
//     if (user?.id && window.Echo) {
//       const channels = window.Echo.connector.channels;
//       if (!Object.keys(channels).includes(`private-User.${user.id}`)) {
//         window.Echo.private(`User.${user.id}`).notification((data) => {
//           console.log("New Notification:", data);
//           setNotifications((prev) => [data, ...prev]); // Append new notification to the array
//         });
//       }
//     }

//     return () => {
//       if (user?.id && window.Echo) {
//         window.Echo.leave(`private-User.${user.id}`);
//       }
//     };
//   }, [user]);

//   // Function to clear all notifications
//   const clearNotifications = () => {
//     setNotifications([]);
//   };

//   return (
//     <NotificationContext.Provider
//       value={{ notifications, setNotifications, clearNotifications }}
//     >
//       {children}
//     </NotificationContext.Provider>
//   );
// };

// export const useNotification = () => {
//   return useContext(NotificationContext);
// };





import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userDetails";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(() => {
    // Load notifications from localStorage on initial render
    const savedNotifications = localStorage.getItem("notifications");
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });

  const { user, refetchUser } = useContext(UserContext);

  useEffect(() => {
    if (user?.id && window.Echo) {
      const channels = window.Echo.connector.channels;
      if (!Object.keys(channels).includes(`private-User.${user.id}`)) {
        window.Echo.private(`User.${user.id}`).notification((data) => {
          console.log("New Notification:", data);
          setNotifications((prev) => {
            if (prev.some((notif) => notif.id === data.id)) return prev;
            const updatedNotifications = [data, ...prev];
            localStorage.setItem(
              "notifications",
              JSON.stringify(updatedNotifications)
            );
            return updatedNotifications;
          });
        });
      }
    }

    return () => {
      if (user?.id && window.Echo) {
        window.Echo.leave(`private-User.${user.id}`);
      }
    };
  }, [user]);

  // Function to clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
    localStorage.removeItem("notifications");
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, setNotifications, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};






