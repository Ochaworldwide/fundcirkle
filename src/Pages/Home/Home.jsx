import React, { useContext, useEffect, useState } from "react";
import profileImg from "/images/profileImg.svg";
import notificationIcon from "/src/assets/images/notification-bing.png";
import Kyc from "../../Component/VerifyKyc/kyc";
import Quickstats from "../../Component/Quickstats/Quickstats";
import CirkleCard from "../../Component/Cirkles/CirkleCard";
import messageIcon from "/src/assets/images/message.png";
import catIcon from "/src/assets/images/cat.png";
import moreIcon from "/src/assets/images/more.png";
import currency from "/src/assets/images/currrency.png";
import CircularProgress from "../../Component/Cirkles/CircularProgress";
import { useModal } from "/src/Component/Cirkles/ModalContext";
import NavigationBar from "../../Component/BottomNav/NavigationBar";
import { Link } from "react-router-dom";
import NotificationBox from "../../Component/Cirkles/NotificationBox";
import { UserContext } from "../../contexts/userDetails";
import { toast } from "react-toastify";
import { useNotification } from "../../contexts/notificationContext";
import { CiUser } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import Invites from "../../Component/Cirkles/Invites";
import MyCirkles from "../../Component/Cirkles/MyCirkles";
import NewCirkle from "./NewCirkle";

function Home() {
  // Tabs Data
  const tabsData = [
    { name: "My Cirkles", isActive: true },
    { name: "Invites", isActive: false },
    { name: "New Cirkle", isActive: false },
  ];

  const { user, refetchUser } = useContext(UserContext);
  const { notifications, clearNotifications } = useNotification();

  const NotifyNum = notifications.length;

  // Header Data
  const headerData = {
    groupName: "Hyderabadwwwwwwwwwwwwwwwww",
    groupImage: "/src/assets/images/circlepeople.png",
    notifications: [
      { icon: messageIcon, count: 1 },
      { icon: catIcon },
      { icon: moreIcon },
    ],
  };

  // Payment Dates
  const paymentDates = {
    nextPayment: "Oct 1, 2024",
    yourTurn: "Nov 1, 2024",
  };

  // Members Data
  const membersData = [
    { name: "Alice", image: "/src/assets/images/member1.png" },
    { name: "Bob", image: "/src/assets/images/member2.png" },
    { name: "Carol", image: "/src/assets/images/member3.png" },
    { name: "Dave", image: "/src/assets/images/member4.png" },
    { name: "Eve", image: "/src/assets/images/member5.png" },
    { name: "Frank", image: "/src/assets/images/member6.png" },
    { name: "Grace", image: "/src/assets/images/member7.png" },
  ];

  // const { openModal } = useModal();
  const [showNotification, setShowNotification] = useState(false);
  // const [notificationData, setNotificationData] = useState([])

  useEffect(() => {
    refetchUser();
  }, []);

  // Initialize default notification listener
  // useEffect(() => {
  //   if (user?.id && window.Echo) {
  //     const channels = window.Echo.connector.channels;
  //     if (!Object.keys(channels).includes(`private-User.${user.id}`)) {
  //       window.Echo.private(`User.${user.id}`).notification((data) => {
  //         console.log(data);
  //         setNotificationData(data)

  //       });
  //     }
  //   }
  // }, [user]);

  return (
    <div className="">
      {/* Mobile Version */}

      <div className="lg:hidden">
        {/* Nav Bar */}

        <div className=" flex w-[95%] mx-auto  items-center  mb-5 sticky top-0 bg-white z-10 ">
          <div className="w-[65px] flex items-center justify-center rounded-full h-[65px] overflow-hidden">
            {/* <img
            src={user?.profile_pic}
            alt=""
            className="w-full h-full object-cover "
          /> */}

            {user?.profile_pic ? (
              <img
                src={`${user?.profile_pic}?t=${Math.random()}`}
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            ) : (
              <FaCircleUser className=" text-gray-500 w-full h-full" />
            )}
          </div>

          <div className="p-5 ">
            <p className="text-sm font-[400]">Welcome back</p>

            <h1 className="font-bold">{user?.full_name}</h1>
          </div>

          <div className="border border-[#00000066] p-1 rounded-full relative ml-auto">
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

          {showNotification && (
            <NotificationBox setShowNotification={setShowNotification} />
          )}
        </div>

        {/* Kyc section */}

        <Link to="/startkyc">
          <Kyc />
        </Link>

        {/* Cirkles */}

        <CirkleCard
          tabs={tabsData}
          header={headerData}
          dates={paymentDates}
          members={membersData}
        />

        {/* QuickStats */}

        <Quickstats />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        {/* Nav Bar */}

        <div className=" flex w-[100%] mx-auto  items-center mb-5  h-[100px]">
          <div className="w-[50%] flex items-center ">
            <div className=" flex items-center space-x-2 text-3xl">
              <p className=" font-[400]">Welcome back,</p>

              <h1 className="font-[400]">{user?.full_name}</h1>
            </div>
          </div>

          <div className="ml-auto flex space-x-6 items-center ">
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
                  src={`${user?.profile_pic}?t=${Math.random()}`}
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

        <div>
          <NewCirkle />
        </div>

        <div className="flex w-full justify-evenly">
          <div className="w-[65%]">
            {/* QuickStats */}

            <Quickstats />

            {/* Cirkles */}

            <h1 className="font-[400] font-[Poppins] mb-2 text-xl">
              My Cirkles
            </h1>

            <div className="p-5 border rounded-xl">
              <MyCirkles />
            </div>
          </div>

          <div className="ml-auto border rounded-2xl p-3 w-[29%]">
            <h1 className="text-2xl font-bold">Invites</h1>

            <Invites />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
