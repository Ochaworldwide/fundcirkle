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
    },
    {
      content:
        "You can now easily find friends on the Cirkle App using their username tag and invite them to join Cirkle.",
      buttonText: null,
    },
    {
      content:
        "Get a 10% Discount on the Tata S3 Electric vehicle. Just by joining the Tata Exclusive Cirkle today!",
      buttonText: "Join To Get Discount",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-2">
            <div className=" rounded-lg shadow-md p-6 text-center w-[100%] flex flex-col items-center ">
              {/* Circular Design */}
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-gray-300 rounded-full"></div>
                </div>
              </div>
              {/* Slide Content */}
              <p className="text-gray-700 text-lg">{slide.content}</p>
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
