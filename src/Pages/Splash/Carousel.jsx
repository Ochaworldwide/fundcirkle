import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import "/src/App.css"; // Import custom Tailwind-based CSS

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const [isLast, setIsLast] = useState(false);
  
  const slides = [
    {
      image: "/images/pana-1.svg",
      heading: "Welcome to FundCirkle",
      description:
        "Empowering communities to save and achieve financial goals together through trusted group contributions.",
    },
    {
      image: "/images/pana-2.svg",
      heading: "Join Forces to Achieve More",
      description:
        "Start or join a Cirkle to pool resources, support each other, and make financial dreams a reality.",
    },
    {
      image: "/images/pana-3.svg",
      heading: "Easy, Transparent, and Secure",
      description:
        "Track your contributions, payments, and payouts effortlessly while we keep your data safe.",
    },
  ];

  useEffect(() => {
    setIsLast(currentIndex == slides.length - 1);
  }, [currentIndex]);
  
  const handleNextClick = () => {
    if (isLast && enabled) {
      navigate("/sign-in");
    }
  };

  return (
    <div className={`-mt-10 py-2 px-5 relative z-0`}>
      {/* Custom Previous Button with "Back" text */}
      <button className="swiper-button-prev-custom absolute left-5 text-[#00000080] top-[100%] -translate-y-1/2 p-3 rounded-full text-[18px] z-10">
        Back
      </button>

      {/* Custom Next Button */}
      {isLast ? (
        <button
          disabled={false}
          className={` ${"bg-[#00943F]"} absolute right-5 top-[100%] -translate-y-1/2 p-3 rounded-full border z-[1000] text-white`}
          onClick={!enabled ? () => setEnabled(true) : handleNextClick}
        >
          {enabled ? (
            "Get Started"
          ) : (
            <>
              <img src="/images/arrow-right-01.svg" alt="Next Icon" />
            </>
          )}
        </button>
      ) : (
        <button
          className={`swiper-button-next-custom ${"bg-[#00943F]"} absolute right-5 top-[100%] -translate-y-1/2 p-2 rounded-full border z-10 text-white`}
          aria-label="Next"
          // onClick={handleNextClick}
        >
          <img src="/images/arrow-right-01.svg" alt="Next Icon" />
        </button>
      )}

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="my-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="text-center h-fit pb-10 flex flex-col justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="mb-5 w-80 mx-auto"
              />
              <h1 className="text-[22px] font-[600] mb-5 text-center">
                {slide.heading}
              </h1>
              <p className="text-sm text-gray-600 mb-4 px-3 w-[90%] mx-auto">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
