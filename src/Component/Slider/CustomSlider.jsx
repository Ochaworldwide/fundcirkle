import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      content:
        "Our new goal-setting tool helps you ensure investment on your top priorities!",
      buttonText: "Set A New Goal",
      image: "/images/rings-1.svg",
    },
    {
      content:
        "You can now easily find friends on the Cirkle App using their username tag and invite them to join Cirkle.",
      buttonText: null,
      image: "/images/rings-2.svg",
    },
    {
      content:
        "Get a 10% Discount on the Tata S3 Electric vehicle. Just by joining the Tata Exclusive Cirkle today!",
      buttonText: "Join To Get Discount",
      image: "/images/rings-3.svg",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-2">
            <div className=" rounded-lg shadow-md border  text-center w-[100%] flex flex-col items-center ">
              {/* Circular Design */}
              <img src={slide.image} alt="" srcset="" className="ml-auto mb-5 h-32" />
              {/* Slide Content */}
              <p className="text-gray-700 text-lg px-6">{slide.content}</p>
              {/* Conditional Button */}
              {slide.buttonText && (
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  {slide.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
