import React, { useContext, useEffect, useState } from "react";
import InviteCard from "../../Component/Cirkles/InviteCard";
import { useModal } from "../../Component/Cirkles/ModalContext";
import FilterModal from "../../Component/DiscoverModals/FilterModal";
import GoalSettingSlider from "../../Component/Slider/GoalSettingSlider";
import NavigationBar from "../../Component/BottomNav/NavigationBar";
import CategoriesDropdown from "../../Component/DiscoverModals/CategoriesDropdown";
import axios from "axios";
import { ROUTES } from "../../constants/routes";
import axiosInstance from "../../service";
import RequestCard from "../../Component/RequestCard/RequestCard";
import { toast } from "react-toastify";
import RecommendedCirklesCard from "../../Component/RecommendedCirklesCard/RecommendedCirklesCard";
import { MdCancel } from "react-icons/md";
import { toastConfig } from "../../constants/toastConfig";
import { FaCircleUser } from "react-icons/fa6";
import { useNotification } from "../../contexts/notificationContext";
import { UserContext } from "../../contexts/userDetails";
import NotificationBox from "../../Component/Cirkles/NotificationBox";

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
  const fetchData = async () => {
    try {
      // Fetch data from the first API
      const response1 = await axiosInstance.get(
        ROUTES.CIRKLE.GET_RECOMMENDED_CIRKLES
      );
      if (response1.data.success) {
        setGroups(response1.data.data); // Update the state with the first API's data
        setInitialGroups(response1.data.data); // Store the original data
      }

      // Fetch data from the second API
      const response2 = await axiosInstance.get(
        ROUTES.CIRKLE.GET_CIRCLE_REQUEST
      );
      if (response2.data.success) {
        setRequestData(response2.data.data); // Update state with the second API's data
        // console.log(response2.data.data);
      }
    } catch (error) {
      console.error(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message, { ...toastConfig });
      } else {
        toast.error("An error occurred. Please try again.", { ...toastConfig });
      }
    } finally {
      // Uncomment or implement if necessary
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [filterOpen, setFilterModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState([]);
  const [initialGroups, setInitialGroups] = useState([]); // To store the original data
  const { filterOptions } = useModal();
  const [appliedFilters, setAppliedFilters] = useState(null);

  const buttons = (
    <button className="bg-[#00943F] text-white px-3 py-1 rounded-md text-xs font-semibold">
      Request to Join
    </button>
  );

  const handleSearch = async () => {
    try {
      setLoading(true);

      // Construct the params object dynamically
      const params = {
        query,
        ...(appliedFilters?.locations &&
          appliedFilters.locations.length > 0 && {
            location: appliedFilters.locations.join(","),
          }),
        ...(appliedFilters?.categories && {
          category: appliedFilters?.categories,
        }),
        ...(appliedFilters?.min !== undefined && { min: appliedFilters?.min }),
        ...(appliedFilters?.max !== undefined && { max: appliedFilters?.max }),
      };

      const response = await axiosInstance.get(ROUTES.CIRKLE.SEARCH_CIRKLES, {
        params,
      });

      if (response.data.success) {
        setGroups(response.data.data); // Replace groups with search results
      } else {
        toast.error("No results found.", { ...toastConfig });
      }
    } catch (err) {
      toast.error(err.message, { ...toastConfig });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleRevert = () => {
    setGroups(initialGroups); // Reset groups to the original data
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters); // Save the filters in the parent component
    console.log("Applied Filters:", filters);
  };

  const { user, refetchUser } = useContext(UserContext);
  const { notifications, clearNotifications } = useNotification();
  const [showNotification, setShowNotification] = useState(false);

  const NotifyNum = notifications.length;

  return (
    <div className="mb-32">
      {/* header */}
      <div className="w-[100%] flex justify-center py-5 sticky top-0 bg-white lg:relative lg:hidden">
        <p className="text-[22px] font-[600]">Discover</p>
      </div>

      

      <div className="w-[100%] mx-auto  items-center mb-5  h-[100px] hidden lg:flex">
        <div className="w-[40%] flex items-center ">
          <div className="w-[100%] flex py-5 sticky top-0 bg-white lg:relative ">
            <p className="text-[22px] font-[600]">Discover</p>
          </div>
        </div>

        <div className="ml-auto flex space-x-6 items-center">
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
                src={user.profile_pic}
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

      {/* search */}

      <div className="flex w-[90%] mx-auto mt-2 justify-between lg:w-[60%] lg:justify-start lg:space-x-5 lg:mx-0 ">
        <div className="flex border border-[#00000066] py-1 w-[80%] rounded-md px-1 shadow h-fit relative">
          <img
            src="/images/search-01.svg"
            alt="search-icon"
            className="mr-2 h-7"
          />
          <input
            type="text"
            value={query}
            placeholder="Search for a Cirkle or a User"
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch();
            }}
            onKeyDown={handleKeyDown}
            className="outline-none text-[12px] flex-1"
          />
          {query && (
            <button
              onClick={handleRevert}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <MdCancel />
            </button>
          )}
        </div>
        <button
          onClick={() => setFilterModal(true)}
          className="p-1 border rounded-md shadow h-fit"
        >
          <img src="/images/filter-horizontal.svg" alt="" />
        </button>
        {filterOpen && (
          <FilterModal setModal={setFilterModal} onApply={handleApplyFilters} />
        )}
      </div>

      <div className="mt-11 ml-5 lg:text-xl lg:mb-5">Recommended Cirkles</div>

      <div className="max-h-[420px] overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar p-2 mb-10 lg:hidden">
        <div className="p-1">
          {groups.length > 0 ? (
            groups.map((group, index) => (
              <RecommendedCirklesCard
                key={index}
                group={group}
                buttons={buttons}
              />
            ))
          ) : (
            <div className="border flex justify-center items-center rounded-2xl h-56 mt-4">
              <p>No recommended Cirkles</p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop version */}

      <div className="hidden lg:flex w-[90%]">
        <div className="max-h-[420px] overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar w-[50%]">
          <div className="p-1">
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <RecommendedCirklesCard
                  key={index}
                  group={group}
                  buttons={buttons}
                />
              ))
            ) : (
              <div className="border flex justify-center items-center rounded-2xl h-56 mt-4">
                <p>No recommended Cirkles</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 lg:block hidden lg:w-[35%] lg:ml-auto lg:h-[600px] overflow-x-scroll hide-scrollbar border rounded-xl">
          <h1 className="text-xl font-bold text-center lg:hidden">
            New Features and Offers
          </h1>
          <div className=" space-y-7">
            {slidesData.map((slidesData, index) => (
              <div
                key={index}
                className="border rounded-lg bg-white flex flex-col items-center shadow-sm"
              >
                <div className="text-center h-52 ">
                  <img
                    src={slidesData.image}
                    alt=""
                    srcset=""
                    className="ml-auto h-16 mb-5"
                  />
                  {/* <h3 className="text-lg font-bold mb-3">{slide.title}</h3> */}
                  <p className="text-[14px] text-gray-600 mb-4 px-3">
                    {slidesData.description}
                  </p>
                  {slidesData.buttonText && slidesData.buttonAction && (
                    <button
                      className="px-4 py-2  text-black border text-[10.5px] rounded-lg  transition"
                      onClick={slidesData.buttonAction}
                    >
                      {slidesData.buttonText}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Card  */}

      <h1 className="text-lg font-[400] ml-4 w-[70%] lg:hidden">
        Requests to join your Cirkle
      </h1>

      <div className="flex space-x-4 overflow-x-scroll w-[98%] mx-auto hide-scrollbar mb-20 lg:hidden">
        {requestData && requestData.length > 0 ? (
          requestData.map((request, index) => (
            <RequestCard key={index} data={request} />
          ))
        ) : (
          <div className="border flex justify-center items-center rounded-2xl h-56 mt-3 w-[95%] mx-auto shadow-lg">
            <p>No requests available.</p>
          </div>
        )}
      </div>

      {/* New Features */}
      <div className="pl-5 pt-3  relative lg:hidden">
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
