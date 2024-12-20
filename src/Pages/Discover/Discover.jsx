import React, { useState } from "react";
import InviteCard from "../../Component/Cirkles/InviteCard";
import { useModal } from "../../Component/Cirkles/ModalContext";
import FilterModal from "../../Component/DiscoverModals/FilterModal";
import GoalSettingSlider from "../../Component/Slider/GoalSettingSlider";
import NavigationBar from "../../Component/BottomNav/NavigationBar";

const groups = [
  {
    image: "/images/invite-img-1.svg", // Replace with the actual image URL
    name: "The Delhi Friends Club",
    memberName: "Amir Luke",
    currentMembers: 8,
    totalMembers: 10,
    amount: "120K",
  },
  {
    image: "/images/invite-img-2.svg", // Replace with the actual image URL
    name: "The Chennai Connections Group",
    memberName: "Michael Chen",
    currentMembers: 5,
    totalMembers: 11,
    amount: "142K",
  },
  {
    image: "/images/invite-img-3.svg", // Replace with the actual image URL
    name: "The Chennai Connections Group",
    memberName: "Michael Chen",
    currentMembers: 5,
    totalMembers: 11,
    amount: "142K",
  },
  {
    image: "/images/invite-img-4.svg", // Replace with the actual image URL
    name: "The Chennai Connections Group",
    memberName: "Michael Chen",
    currentMembers: 5,
    totalMembers: 11,
    amount: "142K",
  },
  {
    image: "/images/invite-img-5.svg", // Replace with the actual image URL
    name: "The Chennai Connections Group",
    memberName: "Michael Chen",
    currentMembers: 5,
    totalMembers: 11,
    amount: "142K",
  },
];

const slidesData = [
  {
    title: "Set A New Goal",
    description:
      "Our new goal-setting tool helps you ensure investment on your top priorities!",
    buttonText: "Set A New Goal",
    buttonAction: () => alert("Setting a new goal!"),
    image: "/images/rings-1.svg",
  },
  {
    title: "Track Your Progress",
    description: "Track your goals and stay on top of your tasks effortlessly!",
    buttonText: "Track Now",
    buttonAction: () => alert("Tracking progress!"),
    image: "/images/rings-2.svg",
  },
  {
    title: "Share with Friends",
    description:
      "You can share your progress with friends for better accountability!",
    buttonText: "Share Now",
    buttonAction: () => alert("Sharing with friends!"),
    image: "/images/rings-3.svg",
  },
];

function Discover() {
  // const { isModalOpen, modalType, closeModal, openModal } = useModal();

  const [filterOpen, setFilterModal] = useState(false);

  return (
    <div className="mb-32">
      {/* Nav Bar */}
      {/* <NavigationBar /> */}
      {/* header */}
      <div className="w-[100%] flex justify-center py-5 sticky top-0 bg-white ">
        <p className="text-[22px] font-[600]">Discover</p>
      </div>
      {/* search */}
      <div className="flex w-[90%] mx-auto mt-2 justify-between">
        <div className="flex border py-1 w-[80%] rounded-md px-1 shadow h-fit">
          <img
            src="/images/search-01.svg"
            alt=""
            srcset=""
            className="mr-2 h-7"
          />

          <input
            type="text"
            placeholder="Search for a Cirkle or a User "
            className="outline-none text-[10.5px]"
          />
        </div>

        <button
          onClick={() => setFilterModal(true)}
          className="p-1 border rounded-md shadow h-fit"
        >
          <img
            src="/images/filter-horizontal.svg"
            alt=""
            srcset=""
            className=""
          />

          {/* Modals */}
        </button>
        {filterOpen && <FilterModal setModal={setFilterModal} />}
      </div>
      {/* body */}
      <div className="flex p-5 " onClick={() => openModal("displayCategories")}>
        <p className="text-[18px] mr-5">Recommended Cirkles</p>

        <img src="/images/arrow-down-01.svg" alt="" srcset="" />
      </div>
      <div className="h-[420px] overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar p-2">
        <div className="p-1  min-h-screen">
          {groups.map((group, index) => (
            // <InviteCard key={index} group={group} buttons={Buttons} />
            <InviteCard key={index} group={group} />
          ))}
        </div>
      </div>
      {/* New Features */}
      <div className="pl-5 pt-3  relative">
        <h1 className="text-[18px]">New Features and Offers</h1>

        {/* <GoalSettingSlider /> */}
      </div>
      <GoalSettingSlider
        slides={slidesData}
        initialSlide={1}
        slidesPerView={1.2}
        loop={true}
        showNavigation={true}
        // showPagination={true}
        className="custom-slider"
      />
    </div>
  );
}

export default Discover;
