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
import RequestCard from "../../Component/RequestCard/RequestCard";
import { toast } from "react-toastify";
import RecommendedCirklesCard from "../../Component/RecommendedCirklesCard/RecommendedCirklesCard";
import { MdCancel } from "react-icons/md";


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
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
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

  // const requestData = [
  //   {
  //     name: "Jonathan Lee",
  //     club: "Hyderabad Teaching Hospital Club",
  //     location: "Hyderabad",
  //     activeCircles: 4,
  //     income: "120K",
  //     profileImage: "https://via.placeholder.com/50",
  //     coinIcon: "https://via.placeholder.com/16",
  //   },
  //   {
  //     name: "Sophia Carter",
  //     club: "New York Medical Association",
  //     location: "New York",
  //     activeCircles: 3,
  //     income: "95K",
  //     profileImage: "https://via.placeholder.com/50",
  //     coinIcon: "https://via.placeholder.com/16",
  //   },
  //   {
  //     name: "Sophia Carter",
  //     club: "New York Medical Association",
  //     location: "New York",
  //     activeCircles: 3,
  //     income: "95K",
  //     profileImage: "https://via.placeholder.com/50",
  //     coinIcon: "https://via.placeholder.com/16",
  //   },
  //   {
  //     name: "Sophia Carter",
  //     club: "New York Medical Association",
  //     location: "New York",
  //     activeCircles: 3,
  //     income: "95K",
  //     profileImage: "https://via.placeholder.com/50",
  //     coinIcon: "https://via.placeholder.com/16",
  //   },
  // ];

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(ROUTES.CIRKLE.SEARCH_CIRKLES, {
        params: {
          query,
          location: appliedFilters.locations,
          category: appliedFilters.categories,
          min: 0, 
          max: 400000000,
        },
      });
      if (response.data.success) {
        setGroups(response.data.data); // Replace groups with search results
      } else {
        toast.error("No results found.");
      }
      // setResults(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // console.log(appliedFilters.locations);

  // console.log(appliedFilters.locations);

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

  return (
    <div className="mb-32">
      {/* header */}
      <div className="w-[100%] flex justify-center py-5 sticky top-0 bg-white ">
        <p className="text-[22px] font-[600]">Discover</p>
      </div>



      {/* search */}

      <div className="flex w-[90%] mx-auto mt-2 justify-between">
        <div className="flex border py-1 w-[80%] rounded-md px-1 shadow h-fit relative">
          <img
            src="/images/search-01.svg"
            alt="search-icon"
            className="mr-2 h-7"
          />
          <input
            type="text"
            value={query}
            placeholder="Search for a Cirkle or a User"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="outline-none text-[10.5px] flex-1"
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

      <div className="mt-11 ml-5">Recommended Cirkles</div>

      <div className="max-h-[420px] overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar p-2 mb-10">
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

      {/* Request Card  */}

      <h1 className="text-lg font-[400] ml-4 w-[70%]">
        Requests to join your Cirkle
      </h1>

      <div className="flex space-x-4 overflow-x-scroll w-[98%] mx-auto hide-scrollbar mb-20">
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
