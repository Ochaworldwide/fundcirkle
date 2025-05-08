import React, { useEffect, useRef, useState } from "react";
import CircularProgress from "./CircularProgress";
import messageIcon from "/images/chatting.svg";
import catIcon from "../../assets/images/cat.png";
import moreIcon from "/images/more.svg";
import currency from "/images/currency.svg";
import { useModal } from "./ModalContext";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import NoActiveCirkle from "./NoActiveCirkle";
import { FadeLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";
import { formatNumber } from "../../utils/string";
import { useUserCirkle } from "../../contexts/UserCirkleContext";
import { FaCircleUser } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
// import SwiperCore from "swiper";

function MyCirkles() {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { showStatusReport } = useModal();
  const swiperRef = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  const { cirkles, refreshCirkles } = useUserCirkle();

  const today = new Date();

  // Options for formatting
  const options = { day: "numeric", month: "long" };

  const currentDate = today.toLocaleDateString("en-US", options);

  useEffect(() => {
    // Refresh cirkle data when component mounts
    refreshCirkles();
  }, []);

  useEffect(() => {
    if (cirkles && cirkles.length > 0) {
      const transformedData = cirkles.map((item) => ({
        header: {
          groupName: item.name,
          groupImage: item.image_url,
          count: item.member_count,
          id: item.id,
          ownerName: item.owner_details.name,
          startDate: item.start_month + " " + item.contribution_day,
        },
        contribution: {
          amount: item.contribution_amount,
          currencySymbol: item.currency,
          paymentStatus: {
            completed: item.last_receipt?.length || 0,
            total: item.max_members,
          },
        },
        dates: {
          nextPayment: `${item.next_receiving_date}`,
        },
      }));
      setData(transformedData);
      setLoading(false);
    } else {
      setData([]);
      setLoading(false);
    }
  }, [cirkles]);

  const handleNext = () => {
    if (data) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  const handlePrevious = () => {
    if (data) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
    }
  };

  if (!data || data.length === 0) {
    return <NoActiveCirkle />;
  }

  const handleGroupClick = () => {
    console.log(`Clicked group ID: ${header.id}`);
    const stateId = header.id;
    openModal("detail", stateId);
  };

  const handleMessageClick = () => {
    console.log(`Clicked group ID: ${header.id}`);
    const chatObject = {
      name: header.groupName,
      cirkleid: header.id,
    };
    openModal("chat", chatObject);
  };

  const handleEditClick = () => {
    openModal("edit", header.id);
  };

  const { header, contribution, dates } = data[currentIndex];
  // console.log(header.startDate);
  const { openModal } = useModal();

  // console.log(header);

  return (
    <div className="relative">
      {/* <div className="flex flex-col border border-[#00000066] bg-gray-50 rounded-lg mb-3">
        <div className="pt-5 flex justify-between w-[95%] mx-auto">
          <div className="w-[50%] flex flex-col justify-center">
            <div className="text-[30px] font-[600] flex items-center overflow-hidden whitespace-nowrap truncate">
              <img src={currency} alt="" className="h-7" />
              {formatNumber(contribution.amount * header.count)}
            </div>
            <p className="text-[18px] font-medium truncate">Cirkle Amount</p>
          </div>

          <div className="w-[50%]">
            <CircularProgress contribution={contribution} />
            <p className="text-black mb-3 text-center text-[18px] font-medium">
              Monthly Payers
            </p>
          </div>
        </div>

        <div className="flex w-[95%] mx-auto justify-between">
          <div
            className="border border-[#00943F] rounded-full flex items-center h-10 w-[45%] bg-[#00943F]"
            onClick={
              currentDate < header?.startDate
                ? () => handleEditClick()
                : () => handleMessageClick()
            }
          >
            <p className="mx-auto text-[14px] font-medium text-white ">
              {currentDate < header?.startDate ? "Edit" : "Message"}
            </p>
          </div>
          <div
            className="border border-[#00943F] rounded-full flex items-center h-10 w-[45%] bg-[#00943F]"
            // onClick={() => openModal("detail")}
            onClick={() => {
              handleGroupClick();
            }}
          >
            <p className="mx-auto text-[14px] font-medium text-white">
              Details
            </p>
          </div>
        </div>

        <div className="flex justify-between bg-[#E5F4EC] items-center mb-5 mt-5 mx-auto w-[95%] p-2 rounded-xl text-[10.5px]">
          <p className="text-gray-600 text-sm">Next Payment</p>
          <p className="font-medium ml-auto p-2 border border-[#00000066] rounded-[8px] flex justify-center w-[45%] text-[#141B34] text-sm">
            {dates.nextPayment}
          </p>
        </div>

        <div className="flex items-center w-[95%] mx-auto mb-5 space-x-5">
          {header.groupImage ? (
            <img
              src={header.groupImage}
              alt="Group"
              className="w-14 h-14 rounded-full"
            />
          ) : (
            <FaCircleUser className="w-14 h-14 text-gray-500" />
          )}

          <div className="">
            <h1 className="ml-3 text-black text-xl text-left font-semibold rounded-[8px] text-ellipsis overflow-hidden lg:text-3xl">
              {header.groupName}
            </h1>
            <p className="ml-3 text-black  text-sm font-semibold rounded-[8px] text-ellipsis overflow-hidden lg:text-xl">
              {header.ownerName}
            </p>
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="text-black border font-bold text-lg absolute top-56 p-1 -left-0 rounded-full"
        >
          <img src="/images/arrow-left.svg" alt="" />
        </button>
        <button
          onClick={handleNext}
          className="text-black border font-bold text-lg absolute top-56 -right-0 p-1 rounded-full"
        >
          <img src="/images/arrow-right.svg" alt="" />
        </button>
      </div> */}

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        spaceBetween={25}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="my-swiper"
      >
        {data.map(({ contribution, header, dates }, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col border border-[#00000066] bg-gray-50 rounded-lg mb-3 relative">
              <div className="pt-5 flex justify-between w-[95%] mx-auto">
                <div className="w-[50%] flex flex-col justify-center">
                  <div className="text-[30px] font-[600] flex items-center overflow-hidden whitespace-nowrap truncate">
                    <img src={currency} alt="" className="h-7" />
                    {formatNumber(contribution.amount * header.count)}
                  </div>
                  <p className="text-[18px] font-medium truncate">
                    Cirkle Amount
                  </p>
                </div>

                <div className="w-[50%]">
                  <CircularProgress contribution={contribution} />
                  <p className="text-black mb-3 text-center text-[18px] font-medium">
                    Monthly Payers
                  </p>
                </div>
              </div>

              <div className="flex w-[95%] mx-auto justify-between">
                <div
                  className="border border-[#00943F] rounded-full flex items-center h-10 w-[45%] bg-[#00943F]"
                  onClick={
                    new Date() < new Date(header?.startDate)
                      ? () => handleEditClick()
                      : () => handleMessageClick()
                  }
                >
                  <p className="mx-auto text-[14px] font-medium text-white ">
                    {new Date() < new Date(header?.startDate)
                      ? "Edit"
                      : "Message"}
                  </p>
                </div>
                <div
                  className="border border-[#00943F] rounded-full flex items-center h-10 w-[45%] bg-[#00943F]"
                  onClick={handleGroupClick}
                >
                  <p className="mx-auto text-[14px] font-medium text-white">
                    Details
                  </p>
                </div>
              </div>

              <div className="flex justify-between bg-[#E5F4EC] items-center mb-5 mt-5 mx-auto w-[95%] p-2 rounded-xl text-[10.5px]">
                <p className="text-gray-600 text-sm">Next Payment</p>
                <p className="font-medium ml-auto p-2 border border-[#00000066] rounded-[8px] flex justify-center w-[45%] text-[#141B34] text-sm">
                  {dates.nextPayment}
                </p>
              </div>

              <div className="flex items-center w-[95%] mx-auto mb-5 space-x-5">
                {header.groupImage ? (
                  <img
                    src={header.groupImage}
                    alt="Group"
                    className="w-14 h-14 rounded-full"
                  />
                ) : (
                  <FaCircleUser className="w-14 h-14 text-gray-500" />
                )}

                <div>
                  <h1 className="ml-3 text-black text-xl font-semibold truncate lg:text-3xl">
                    {header.groupName}
                  </h1>
                  <p className="ml-3 text-black text-sm font-semibold truncate lg:text-xl">
                    {header.ownerName}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      {data.length > 0 && (
        <div className="flex justify-center mt-3 md:mt-4 gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                swiperRef.current?.slideToLoop(index);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-[#00943F] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCirkles;
