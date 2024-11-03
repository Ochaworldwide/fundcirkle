import React from 'react'
import profileImg from '/src/assets/images/profileImg.png'
import notificationIcon from '/src/assets/images/notification-bing.png'
import Kyc from '../../Component/VerifyKyc/kyc';
import Quickstats from '../../Component/Quickstats/Quickstats';
import CirkleCard from '../../Component/Cirkles/CirkleCard';
import messageIcon from '/src/assets/images/message.png';
import catIcon from '/src/assets/images/cat.png';
import moreIcon from '/src/assets/images/more.png'
import currency from "/src/assets/images/currrency.png";
import CircularProgress from '../../Component/Cirkles/CircularProgress';


function Home() {
  const NotifyNum = "3";
  // Tabs Data
  const tabsData = [
    { name: "My Cirkles", isActive: true },
    { name: "Invites", isActive: false },
    { name: "New Cirkle", isActive: false },
  ];

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

  return (
    <div>
      <div className=" flex w-[95%] mx-auto  items-center  mb-5 sticky top-0 bg-white">
        <div className="">
          <img src={profileImg} alt="" srcset="" className="rounded-full " />
        </div>

        <div className="p-5 ">
          <p className="text-sm font-[400]">Welcome back</p>

          <h1 className='font-bold'>Bhaavik Arhaan</h1>
        </div>

        <div className="border p-1 rounded-full relative ml-auto">
          <div className=" absolute top-0 right-0 border text-[8px] font-bold flex justify-center text-white   h-[12px] w-[12px] bg-[#F0243B] rounded-full">
            {""}
            {NotifyNum}
          </div>
          <img
            src={notificationIcon}
            alt=""
            srcset=""
            className="rounded-full"
          />
        </div>
      </div>

      {/* Kyc section */}

      <Kyc />

      {/* QuickStats */}

      <Quickstats />

      {/* Cirkles */}

      <CirkleCard
        tabs={tabsData}
        header={headerData}
        dates={paymentDates}
        members={membersData}
      />

      
    </div>
  );
}

export default Home