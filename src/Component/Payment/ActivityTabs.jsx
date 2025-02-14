// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useModal } from "../Cirkles/ModalContext";
// import axiosInstance from "../../service";
// import { ROUTES } from "../../constants/routes";
// import { formatUTCDate } from "../../utils/date";
// import { formatNumber } from "../../utils/string";

// const Slides = [
//   {
//     Background: "/images/payment-bg-3.svg",
//     name: "Hyderabad Teaching Hospital Worker’s Club",
//     user: "Admin",
//     image: "/images/paygroup-1.svg",
//     num: "7/10 Paid",
//     Amount: "240K",
//     Due: "Due by",
//     curruency: "/images/currency.svg",
//     Date: "Oct, 19th",
//     buttonText: "Make Payment",
//     buttonAction: () => alert("Make Payment"),
//     buttonText2: "Validate Payment",
//     buttonAction2: () => alert("Validate Payment"),
//     button: (
//       <button className="px-4 py-2  text-[#00943F] border text-[10.5px] mx-auto w-fit rounded-lg">
//         Make Payment
//       </button>
//     ),
//     button2: (
//       <button className="px-1 py-2  text-black border text-[10.5px] mx-auto w-fit rounded-lg  transition">
//         Validate Payment
//       </button>
//     ),
//   },
//   {
//     Background: "/images/payment-bg-2.svg",
//     name: "Sunshine Valley General Hospital Staff Association",
//     user: "member",
//     image: "/images/paygroup-1.svg",
//     num: "8/10 Paid",
//     Amount: "240K",
//     Due: "Due by",
//     curruency: "/images/currency.svg",
//     Date: "Oct, 19th",
//     buttonText: "Make Payment",
//     buttonAction: () => alert("Make Payment"),
//     button: (
//       <button className="px-4 py-2  text-[#00943F] border text-[10.5px] mx-auto w-fit rounded-lg">
//         Make Payment
//       </button>
//     ),
//   },
//   {
//     Background: "/images/payment-bg-1.svg",
//     name: "Greenwood Community Medical Center Employee Guild",
//     user: "Receiving Member",
//     image: "/images/paygroup-1.svg",
//     num: "10/10 Paid",
//     Amount: "240K",
//     Due: "Due by",
//     curruency: "/images/currency.svg",
//     Date: "Oct, 19th",
//     buttonAction: () => openModal("validate payment"),
//     button2: (
//       <button className="px-4 py-2  text-[#00943F] border text-[10.5px] mx-auto w-fit rounded-lg">
//         Validate Payment
//       </button>
//     ),
//   },

// ];

// const CirkleActivity = ({ slide }) => {
//   const { openModal } = useModal();

//   return (
//     <div className=" h-56">
//       <h3 className="text-[14px] font-base leading-relaxed mb-9 w-[80%]">
//         {slide.name}
//       </h3>
//       <div className="flex justify-between mb-5">
//         <p className="text-white bg-black rounded-md p-2 font-bold text-[8px]">
//           {slide.is_owner ? 'Admin' : 'Receiving member'}

//           {console.log(slide.is_owner)}
//         </p>

//         <div className="flex space-x-2 items-center">
//           <img src="/images/paygroup-1.svg" alt="" srcset="" className="h-5" />
//           <p className="text-[8px] font-bold">{slide.last_receipt?.payment_data.length + '/'+ slide.member_count} Payed</p>
//         </div>
//       </div>
//       <div className="flex items-center justify-between mb-5 px-3">
//         <div className="flex items-center">
//           <img src="/images/currency.svg" alt="" srcset="" className="h-7" />
//           <p className="text-[16px] font-[700]">{formatNumber(slide.contribution_amount)}</p>
//         </div>

//         <p className="text-[10px]">Due by</p>

//         <p className="text-[16px] font-[700]">{formatUTCDate('2025-10-19')}</p>

//       </div>

//       <div className="flex justify-center space-x-3">
//         {/* <button onClick={() => openModal("make payment")}>
//           {slide.button}
//         </button>

//         <div onClick={() => openModal("validate payment")}>{slide.button2}</div> */}
//         <button
//           onClick={() => openModal("make payment", slide)}
//           className="px-4 py-2  text-[#00943F] border text-[10.5px] mx-auto w-fit rounded-lg"
//         >
//           Make Payment
//         </button>
//         <button
//           onClick={() => openModal("validate payment", slide)}
//           className="px-1 py-2  text-black border text-[10.5px] mx-auto w-fit rounded-lg  transition"
//         >
//           Validate Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function ActivityTabs({ type }) {
//   // const middleSlideIndex = Math.floor(slides.length / 2); // Dynamically calculate the middle slide index

//   const [slides, setSlides] = useState(Slides);

//   useEffect(() => {
//     const fetchCircles = async () => {
//       try{
//         const response = await axiosInstance.get(ROUTES.CIRKLE.GET_CIRCLES_WITH_ACTIVITY);
//         const values = Object.values(response.data.data);
//         if(type == 'Admin'){
//           setSlides(values?.filter((v) => v.is_owner))
//         }
//         else if(type == 'Receiving Member'){
//           setSlides(values?.filter((v) => !v.is_owner));
//         }
//         else{
//           setSlides(values);
//         }

//         console.log(response.data.data);
//       }catch(error){
//         console.error(error.message);
//       }
//     }

//     fetchCircles();
//   },[])

//   return (
//     <div className={`mt-5  py-2 px-5 custom-slider relative -z-0 `}>
//       {/* Custom Previous Button */}
//       <button
//         className="swiper-button-prev-custom absolute left-0 top-[85%]  -translate-y-1/2  text-white p-3 rounded-full border   z-10"
//         aria-label="Previous"
//       >
//         <img src="/images/arrow-left.svg" alt="" srcset="" />
//       </button>

//       {/* Custom Next Button */}
//       <button
//         className="swiper-button-next-custom absolute right-0 top-[85%] -translate-y-1/2  text-white p-3 rounded-full border z-10"
//         aria-label="Next"
//       >
//         <img src="/images/arrow-right.svg" alt="" srcset="" />{" "}
//         {/* Right arrow or any icon */}
//       </button>
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={1.4}
//         spaceBetween={25} // Adjusts spacing between slides
//         loop={true}
//         // initialSlide={2} // Start from the middle slide
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 1.2,
//           slideShadows: false,
//         }}
//         // pagination={showPagination ? { clickable: true } : false}
//         navigation={{
//           prevEl: ".swiper-button-prev-custom", // Custom class for the previous button
//           nextEl: ".swiper-button-next-custom", // Custom class for the next button
//         }}
//         modules={[EffectCoverflow, Navigation]}
//         className="my-swiper "
//       >
//         {slides?.map((slide, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex flex-col justify-center items-center  rounded-2xl border py-4 px-3 "
//             style={{
//               backgroundImage: `url(${slide.Background})`,
//               backgroundSize: "contain",
//               backgroundPosition: "top",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <CirkleActivity slide={slide} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useModal } from "../Cirkles/ModalContext";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { formatUTCDate } from "../../utils/date";
import { formatNumber } from "../../utils/string";

const CirkleActivity = ({ slide }) => {
  const { openModal } = useModal();

  return (
    <div className="h-56">
      <h3 className="text-[14px] font-base leading-relaxed mb-9 w-[80%]">
        {slide.name}
      </h3>
      <div className="flex justify-between mb-5">
        <p className="text-white bg-black rounded-md p-2 font-bold text-[8px]">
          {slide.is_owner ? "Admin" : "Receiving member"}
        </p>
        <div className="flex space-x-2 items-center">
          <img src="/images/paygroup-1.svg" alt="paygroup" className="h-5" />
          <p className="text-[8px] font-bold">
            {slide.last_receipt?.payment_data?.length ?? 0}/{slide.member_count}{" "}
            Paid
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-5 px-3">
        <div className="flex items-center">
          <img src="/images/currency.svg" alt="currency" className="h-7" />
          <p className="text-[16px] font-[700]">
            {formatNumber(slide.contribution_amount)}
          </p>
        </div>
        <p className="text-[10px]">Due by</p>
        <p className="text-[16px] font-[700]">{formatUTCDate("2025-10-19")}</p>
      </div>
      <div className="flex justify-center space-x-3">
        {slide.last_payment && slide.last_payment.submitted_at == null && (
          <button
            onClick={() => openModal("make payment", slide)}
            className="px-4 py-2 text-[#00943F] border text-[10.5px] mx-auto w-fit rounded-lg"
          >
            Make Payment
          </button>
        )}
        <button
          onClick={() => openModal("validate payment", slide)}
          className="px-1 py-2 text-black border text-[10.5px] mx-auto w-fit rounded-lg transition"
        >
          Validate Payment
        </button>
      </div>
    </div>
  );
};

export default function ActivityTabs({ type }) {
  const { openModal } = useModal();
  const [slides, setSlides] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data) {
      const values = Object.values(data);
      if (type === "Admin") {
        setSlides(values.filter((v) => v.is_owner));
      } else if (type === "Receiving Member") {
        setSlides(values.filter((v) => !v.is_owner));
      } else {
        setSlides(values);
      }
    }
  }, [type,data]);

  useEffect(() => {
    const fetchCircles = async () => {
      try {
        const response = await axiosInstance.get(
          ROUTES.CIRKLE.GET_CIRCLES_WITH_ACTIVITY
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching circles:", error.message);
      }
    };

    fetchCircles();
  }, []); // Added dependency to refetch on type change

  return (
    <div className="mt-5 py-2 px-5 custom-slider relative -z-0">
      <button
        className="swiper-button-prev-custom absolute left-0 top-[85%] -translate-y-1/2 text-white p-3 rounded-full border z-10"
        aria-label="Previous"
      >
        <img src="/images/arrow-left.svg" alt="Previous" />
      </button>
      <button
        className="swiper-button-next-custom absolute right-0 top-[85%] -translate-y-1/2 text-white p-3 rounded-full border z-10"
        aria-label="Next"
      >
        <img src="/images/arrow-right.svg" alt="Next" />
      </button>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.4}
        spaceBetween={25}
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.2,
          slideShadows: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="my-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-center rounded-2xl border py-4 px-3"
            style={{
              backgroundImage: `url(${slide.Background})`,
              backgroundSize: "contain",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CirkleActivity slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
