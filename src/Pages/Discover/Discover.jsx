import React, { useEffect, useState } from "react";
import InviteCard from "../../Component/Cirkles/InviteCard";
import { useModal } from "../../Component/Cirkles/ModalContext";
import FilterModal from "../../Component/DiscoverModals/FilterModal";
import GoalSettingSlider from "../../Component/Slider/GoalSettingSlider";
import NavigationBar from "../../Component/BottomNav/NavigationBar";
import CategoriesDropdown from "../../Component/DiscoverModals/CategoriesDropdown";
import axios from "axios";
import { ROUTES } from "../../constants/routes";
import axiosInstance from "../../service";
// const url = "https://fundcirkle.techr.me/api/cirkles";

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

  // const fetchData = async () =>{
  //   // try {
  //   //   const response = await axios.get(ROUTES.CIRKLE.GET_USER_CIRKLES)
  //   //   console.log(response)
  //   // } catch (error) {
  //   //   console.log(error.response)
      
  //   // }

  //   axiosInstance
  //     .get(ROUTES.CIRKLE.GET_USER_CIRKLES)
  //     .then((response) => {
  //       if (response.data.success) {
  //         // toast.success(response.data.message);
  //         console.log(response)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error(error.response.data.message);
  //     })
  //     // .finally(() => {
  //     //   setLoading(false);
  //     // });
  // }


  // const fetchData = async () => {
  //   try {
  //     const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_CIRKLES);
  //     if (response.data.success) {
  //       console.log(response);
  //       // You can add additional logic here if needed, e.g., updating state
  //       // toast.success(response.data.message); // Uncomment if you want success toast
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     if (error.response?.data?.message) {
  //       toast.error(error.response.data.message);
  //     } else {
  //       toast.error("An error occurred. Please try again.");
  //     }
  //   } finally {
  //     // Uncomment or implement if necessary
  //     // setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   fetchData();
  // },[]);

  const [filterOpen, setFilterModal] = useState(false);

  const buttons = (
    <button className="bg-[#00943F] text-white px-3 py-1 rounded-md text-xs font-semibold">
      Request to Join
    </button>
  );

  return (
    <div className="mb-32">
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


      <div className="mt-5">
        <CategoriesDropdown />
      </div>

      


      <div className="h-[420px] overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar p-2">
        <div className="p-1  min-h-screen">
          {groups.map((group, index) => (
            
            <InviteCard key={index} group={group} buttons={buttons}/>
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
