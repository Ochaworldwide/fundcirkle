import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GoalSettingSlider = ({
  slides, // Array of slides to display
  slidesPerView, // Number of slides visible at a time
  loop = true, // Enables looping
  showNavigation = true, // Controls visibility of navigation buttons
  showPagination = true, // Controls visibility of pagination
  className = "", // Additional class for styling
  
}) => {
  const middleSlideIndex = Math.floor(slides.length / 2); // Dynamically calculate the middle slide index

  return (
    <div className={`mt-5  py-2 px-5 ${className} relative -z-0 lg:hidden`}>
      {/* Custom Previous Button */}
      <button
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2  text-white p-3 rounded-full border   z-10"
        aria-label="Previous"
      >
        <img src="/images/arrow-left.svg" alt="" srcset="" />
      </button>

      {/* Custom Next Button */}
      <button
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2  text-white p-3 rounded-full border z-10"
        aria-label="Next"
      >
        <img src="/images/arrow-right.svg" alt="" srcset="" />{" "}
        {/* Right arrow or any icon */}
      </button>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        spaceBetween={30} // Adjusts spacing between slides
        loop={loop}
        initialSlide={middleSlideIndex} // Start from the middle slide
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
            className="flex flex-col justify-center items-center   shadow-md rounded-lg border  "
          >
            <div className="text-center h-48 ">
              <img
                src={slide.image}
                alt=""
                srcset=""
                className="ml-auto h-16 mb-5"
              />
              {/* <h3 className="text-lg font-bold mb-3">{slide.title}</h3> */}
              <p className="text-[12px] text-gray-600 mb-4 px-3">
                {slide.description}
              </p>
              {slide.buttonText && slide.buttonAction && (
                <button
                  className="px-4 py-2  text-black border text-[10.5px] rounded-lg  transition"
                  onClick={slide.buttonAction}
                >
                  {slide.buttonText}
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GoalSettingSlider;
