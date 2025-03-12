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

function Home() {
  const NotifyNum = "3";
  // Tabs Data
  const tabsData = [
    { name: "My Cirkles", isActive: true },
    { name: "Invites", isActive: false },
    { name: "New Cirkle", isActive: false },
  ];

  const { user, refetchUser } = useContext(UserContext);

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

  const { openModal } = useModal();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    refetchUser;
  }, []);

  // Initialize default notification listener
  useEffect(() => {
    if (user?.id && window.Echo) {
      const channels = window.Echo.connector.channels;
      if (!Object.keys(channels).includes(`private-User.${user.id}`)) {
        window.Echo.private(`User.${user.id}`).notification((data) => {
          console.log(data);
        });
      }
    }
  }, [user]);

  return (
    <div className="">
      {/* Nav Bar */}

      <div className=" flex w-[95%] mx-auto  items-center  mb-5 sticky top-0 bg-white z-10 ">
        <div className="w-[65px] flex items-center justify-center rounded-full h-[65px] overflow-hidden">
          <img
            src={user?.profile_pic}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>

        <div className="p-5 ">
          <p className="text-sm font-[400]">Welcome back</p>

          <h1 className="font-bold">{user?.full_name}</h1>
        </div>

        <div className="border border-[#00000066] p-1 rounded-full relative ml-auto">
          <div className=" absolute top-0 right-0 border border-[#00000066] text-[8px] font-bold flex justify-center text-white   h-[12px] w-[12px] bg-[#00943F] rounded-full">
            {""}
            {NotifyNum}
          </div>
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

      {/* <button
        className="p-5 bg-red-300 rounded-md mx-auto w-[70%] flex items-center justify-center"
        onClick={() => {
          toast.success("Cirkle created successfully!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            newestOnTop: true,
            draggable: true,
            theme: "dark",
            // progress:"2",
            style: {
              // backgroundColor: "white",
              // color: "black",
              // width: "80%",
              // minHeight: "50px",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // padding: "0px",
              // borderRadius: "5px",
              // boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
              // margin: "0 auto",
              // fontSize: "14px",
              // fontWeight: "bold",
              // borderColor:"grey",

              backgroundColor: "white",
              color: "black",
              width: "80%",
              minHeight: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px",
              borderRadius: "5px",
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
              margin: "0 auto",
              fontSize: "14px",
              fontWeight: "bold",
              // border: "1px solid grey",
              transition: "box-shadow 0.2s ease-in-out",
            }, // Custom styling
          });
        }}
      >
        testing
      </button> */}

      <Quickstats />
    </div>
  );
}

export default Home;
