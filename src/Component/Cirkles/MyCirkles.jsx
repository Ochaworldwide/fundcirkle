// import React, { useEffect, useState } from "react";
// import CircularProgress from "./CircularProgress";
// import messageIcon from "/images/chatting.svg";
// import catIcon from "../../assets/images/cat.png";
// import moreIcon from "/images/more.svg";
// import currency from "/images/currency.svg";
// import { useModal } from "./ModalContext";
// import axiosInstance from "../../service";
// import { ROUTES } from "../../constants/routes";
// import { toast } from "react-toastify";
// import NoActiveCirkle from "./NoActiveCirkle";


// function MyCirkles() {
//   const [data, setData] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const fetchData = async () => {
//     try {
//       const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_CIRKLES);
//       if (response.data.success) {
//         // Transform the data to match the required structure
//         const transformedData = response.data.data.map((item) => ({
//           header: {
//             groupName: item.name,
//             groupImage: "/images/circlepeople.svg", // Use a default image or customize it per item
//             count: item.member_count,
//           },
//           contribution: {
//             amount: item.contribution_amount,
//             currencySymbol: item.currency,
//             paymentStatus: {
//               completed: 2, // Add real data if available
//               total: item.max_members,
//             },
//           },
//           dates: {
//             nextPayment: `Day ${item.contribution_day} of the month`, // Customize as needed
//           },
//         }));

//         setData(transformedData);
//         console.log("Transformed data:", transformedData);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       if (error.response?.data?.message) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error("An error occurred. Please try again.");
//       }
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleNext = () => {
//     if (data) {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }
//   };

//   const handlePrevious = () => {
//     if (data) {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + data.length) % data.length
//       );
//     }
//   };

//   if (!data || data.length === 0) {
//     return <NoActiveCirkle />; // Show a loading message if data is null or empty
//   }

//   const { header, contribution, dates } = data[currentIndex];
//   const { openModal } = useModal();

//   return (
//     <div className="relative">
//       <div className="flex flex-col border bg-gray-50 rounded-lg">
//         <div className="py-5 flex justify-between w-[95%] mx-auto">
//           <div className="w-[50%] flex flex-col justify-center">
//             <div className="text-[30px] font-[600] flex items-center overflow-hidden whitespace-nowrap truncate">
//               <img src={currency} alt="" className="h-7" />
//               {contribution.amount}
//             </div>
//             <p className="text-[14px] truncate">Cirkle Amount</p>
//           </div>

//           <div className="w-[50%]">
//             <CircularProgress contribution={contribution} />
//             <p className="text-black mb-3 text-center text-[14px]">
//               Payment Status
//             </p>
//           </div>
//         </div>

//         <div className="flex w-[95%] mx-auto justify-between">
//           <div
//             className="border rounded-full flex items-center h-10 w-[45%]"
//             onClick={() => openModal("chat")}
//           >
//             <button
//               className="relative rounded-full p-1 border h-10 bg-[#E5F4EC]"
//               onClick={() => openModal("chat")}
//             >
//               <img src={messageIcon} alt="" />
//               <span className="absolute top-0 right-0 bg-[#00943F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                 {header.count}
//               </span>
//             </button>
//             <p className="mx-auto text-[12px]">Messages</p>
//           </div>
//           <div
//             className="border rounded-full flex items-center h-10 w-[45%]"
//             onClick={() => openModal("detail")}
//           >
//             <button
//               className="relative rounded-full p-1 border h-10 bg-[#E5F4EC]"
//               onClick={() => openModal("detail")}
//             >
//               <img src={moreIcon} alt="" />
//             </button>
//             <p className="mx-auto text-[12px]">Details</p>
//           </div>
//         </div>

//         <div className="flex justify-between bg-[#E5F4EC] items-center mb-5 mt-5 mx-auto w-[95%] p-2 rounded-xl text-[10.5px]">
//           <p className="text-gray-600">Next Payment</p>
//           <p className="font-medium ml-auto p-2 border rounded-[8px] w-[45%] text-[#141B34]">
//             {dates.nextPayment}
//           </p>
//         </div>

//         <div className="flex items-center w-[95%] mx-auto mb-8">
//           <img
//             src={header.groupImage}
//             alt="Group"
//             className="w-14 h-14 rounded-full"
//           />
//           <h1 className="ml-3 text-black px-3 py-1 text-[22px] rounded-[8px] text-ellipsis overflow-hidden">
//             {header.groupName}
//           </h1>
//         </div>

//         <button
//           onClick={handlePrevious}
//           className="text-black border font-bold text-lg absolute top-48 p-1 -left-0 rounded-full"
//         >
//           <img src="/images/arrow-left.svg" alt="" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="text-black border font-bold text-lg absolute top-48 -right-0 p-1 rounded-full"
//         >
//           <img src="/images/arrow-right.svg" alt="" />
//         </button>
//       </div>
//     </div>
//   );
// }


// export default MyCirkles;



import React, { useEffect, useState } from "react";
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

function MyCirkles() {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_CIRKLES);
      if (response.data.success) {
        // Transform the data to match the required structure
        const transformedData = response.data.data.map((item) => ({
          header: {
            groupName: item.name,
            groupImage: "/images/circlepeople.svg", // Use a default image or customize it per item
            count: item.member_count,
          },
          contribution: {
            amount: item.contribution_amount,
            currencySymbol: item.currency,
            paymentStatus: {
              completed: 2, // Add real data if available
              total: item.max_members,
            },
          },
          dates: {
            nextPayment: `Day ${item.contribution_day} of the month`, // Customize as needed
          },
        }));

        setData(transformedData);
        console.log("Transformed data:", transformedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[350px]">
        <FadeLoader size={50} color="#36D7B7" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <NoActiveCirkle />;
  }

  const { header, contribution, dates } = data[currentIndex];
  const { openModal } = useModal();

  return (
    <div className="relative">
      <div className="flex flex-col border bg-gray-50 rounded-lg">
        <div className="py-5 flex justify-between w-[95%] mx-auto">
          <div className="w-[50%] flex flex-col justify-center">
            <div className="text-[30px] font-[600] flex items-center overflow-hidden whitespace-nowrap truncate">
              <img src={currency} alt="" className="h-7" />
              {contribution.amount}
            </div>
            <p className="text-[14px] truncate">Cirkle Amount</p>
          </div>

          <div className="w-[50%]">
            <CircularProgress contribution={contribution} />
            <p className="text-black mb-3 text-center text-[14px]">
              Payment Status
            </p>
          </div>
        </div>

        <div className="flex w-[95%] mx-auto justify-between">
          <div
            className="border rounded-full flex items-center h-10 w-[45%]"
            onClick={() => openModal("chat")}
          >
            <button
              className="relative rounded-full p-1 border h-10 bg-[#E5F4EC]"
              onClick={() => openModal("chat")}
            >
              <img src={messageIcon} alt="" />
              <span className="absolute top-0 right-0 bg-[#00943F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {header.count}
              </span>
            </button>
            <p className="mx-auto text-[12px]">Messages</p>
          </div>
          <div
            className="border rounded-full flex items-center h-10 w-[45%]"
            onClick={() => openModal("detail")}
          >
            <button
              className="relative rounded-full p-1 border h-10 bg-[#E5F4EC]"
              onClick={() => openModal("detail")}
            >
              <img src={moreIcon} alt="" />
            </button>
            <p className="mx-auto text-[12px]">Details</p>
          </div>
        </div>

        <div className="flex justify-between bg-[#E5F4EC] items-center mb-5 mt-5 mx-auto w-[95%] p-2 rounded-xl text-[10.5px]">
          <p className="text-gray-600">Next Payment</p>
          <p className="font-medium ml-auto p-2 border rounded-[8px] w-[45%] text-[#141B34]">
            {dates.nextPayment}
          </p>
        </div>

        <div className="flex items-center w-[95%] mx-auto mb-8">
          <img
            src={header.groupImage}
            alt="Group"
            className="w-14 h-14 rounded-full"
          />
          <h1 className="ml-3 text-black px-3 py-1 text-[22px] rounded-[8px] text-ellipsis overflow-hidden">
            {header.groupName}
          </h1>
        </div>

        <button
          onClick={handlePrevious}
          className="text-black border font-bold text-lg absolute top-48 p-1 -left-0 rounded-full"
        >
          <img src="/images/arrow-left.svg" alt="" />
        </button>
        <button
          onClick={handleNext}
          className="text-black border font-bold text-lg absolute top-48 -right-0 p-1 rounded-full"
        >
          <img src="/images/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default MyCirkles;
