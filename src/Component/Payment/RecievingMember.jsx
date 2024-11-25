import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReceivingMember = () => {
  const slides = [
    {
      Background: "/images/payment-bg-3.svg",
      title: "Hyderabad Teaching Hospital Worker’s Club",
      user: "Receiving Member",
      image: "/images/paygroup-1.svg",
      num: "7/10 Paid",
      Amount: "240K",
      Due: "Due by",
      curruency: "/images/currency-01.svg",
      Date: "Oct, 19th",
      buttonText2: "Validate Payment",
      buttonAction2: () => alert("Validate Payment"),
      button2: (
        <button className="px-1 py-2  text-[#00943F] border text-[10.5px] mx-auto w-[90%] rounded-lg  transition">
          Validate Payment
        </button>
      ),
    },
    {
      Background: "/images/payment-bg-2.svg",
      title: "Sunshine Valley General Hospital Staff Association",
      user: "Receiving Member",
      image: "/images/paygroup-1.svg",
      num: "8/10 Paid",
      Amount: "240K",
      Due: "Due by",
      curruency: "/images/currency-01.svg",
      Date: "Oct, 19th",
      button2: (
        <button className="px-1 py-2  text-[#00943F] border text-[10.5px] mx-auto w-[90%] rounded-lg  transition">
          Validate Payment
        </button>
      ),
    },
    {
      Background: "/images/payment-bg-1.svg",
      title: "Greenwood Community Medical Center Employee Guild",
      user: "Receiving Member",
      image: "/images/paygroup-1.svg",
      num: "10/10 Paid",
      Amount: "240K",
      Due: "Due by",
      curruency: "/images/currency-01.svg",
      Date: "Oct, 19th",
      button2: (
        <button className="px-1 py-2  text-[#00943F] border text-[10.5px] mx-auto w-[90%] rounded-lg  transition">
          Validate Payment
        </button>
      ),
    },
  ];
  const middleSlideIndex = Math.floor(slides.length / 2); // Dynamically calculate the middle slide index

  return (
    <div className={`mt-5  py-2 px-5 custom-slider relative -z-0 `}>
      {/* Custom Previous Button */}
      <button
        className="swiper-button-prev-custom absolute left-0 top-[85%]  -translate-y-1/2  text-white p-3 rounded-full border   z-10"
        aria-label="Previous"
      >
        <img src="/images/arrow-left.svg" alt="" srcset="" />
      </button>

      {/* Custom Next Button */}
      <button
        className="swiper-button-next-custom absolute right-0 top-[85%] -translate-y-1/2  text-white p-3 rounded-full border z-10"
        aria-label="Next"
      >
        <img src="/images/arrow-right.svg" alt="" srcset="" />{" "}
        {/* Right arrow or any icon */}
      </button>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.4}
        spaceBetween={25} // Adjusts spacing between slides
        loop={true}
        // initialSlide={2} // Start from the middle slide
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.2,
          slideShadows: false,
        }}
        // pagination={showPagination ? { clickable: true } : false}
        navigation={{
          prevEl: ".swiper-button-prev-custom", // Custom class for the previous button
          nextEl: ".swiper-button-next-custom", // Custom class for the next button
        }}
        modules={[EffectCoverflow, Navigation]}
        className="my-swiper "
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-center  rounded-lg border py-4 px-2 "
            style={{
              backgroundImage: `url(${slide.Background})`,
              backgroundSize: "contain",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              //   height: "300px", // Set height for the container
              //   color: "white",
            }}
          >
            <div className=" h-56">
              {/* <img
                src={slide.image}
                alt=""
                srcset=""
                className="ml-auto h-16 mb-5 absolute"
              /> */}
              <h3 className="text-[14px] font-bold leading-relaxed mb-5 w-[80%]">
                {slide.title}
              </h3>

              <div className="flex justify-between mb-5">
                <p className="text-white bg-black rounded-md p-2 text-[8px]">
                  {slide.user}
                </p>

                <div className="flex space-x-2 items-center">
                  <img src={slide.image} alt="" srcset="" className="h-5" />

                  <p className="text-[8px] font-bold">{slide.num}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-5">
                <p className="text-[14px] font-[700]">{slide.Amount}</p>

                <p className="text-[10px]">{slide.Due}</p>

                <p className="text-[14px] font-[700]">{slide.Date}</p>
              </div>

              <div className="flex ">
                {slide.button2}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReceivingMember;
