// import React from "react";
// import { formatNumber } from "../../utils/string";

// const PaymentOverview = ({due,validations,receive}) => {

//   return (
//     <div className="flex overflow-x-auto space-x-3 py-4 hide-scrollbar">
//       <div className="flex-shrink-0 w-[47%] py-4 px-2 bg-[#E5F7FF66] border rounded-md lg:w-[30%] lg:border-gray-400 ">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-[14px] font-semibold mb-2 lg:text-[18px] lg:mx-auto">
//             Total Due
//           </h2>
//         </div>

//         <div className="flex justify-between mb-5 text-[#141B3480] lg:justify-between">
//           <p className="text-sm text-gray-500 lg:text-[16px]">You Owe</p>
//           <h3 className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
//             {formatNumber(due.amount)}
//           </h3>
//         </div>

//         <div className="flex justify-between text-sm text-[#141B3480] lg:justify-between">
//           <p className="text-[10.5px] lg:text-[16px]">Across</p>
//           <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
//             {formatNumber(due.cirkle_count)}
//           </p>
//           <p className="text-[10.5px] lg:text-[16px]">Cirkles</p>
//         </div>
//       </div>

//       <div className="flex-shrink-0 w-[45%] py-4 px-2 bg-[#E5F7FF66] border rounded-md lg:w-[30%] lg:border-gray-400">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-[14px] font-semibold mb-2 lg:text-[18px] lg:mx-auto">
//             Validations
//           </h2>
//         </div>

//         <div className="flex justify-between mb-5 text-[#141B3480] lg:justify-between">
//           <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
//             {validations.member_count}
//           </p>
//           <h3 className="text-[10.5px] text-gray-500 lg:text-[16px]">
//             members across
//           </h3>
//         </div>

//         <div className="flex justify-between text-sm text-[#141B3480] lg:justify-between">
//           <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
//             {formatNumber(validations.cirkle_count)}
//           </p>
//           <p className="text-[10.5px] lg:text-[16px]">cirkles have paid</p>
//         </div>
//       </div>

//       <div className="flex-shrink-0 w-[45%] py-4 px-2 bg-[#E5F7FF66] border rounded-md lg:w-[30%] lg:border-gray-400">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-[14px] font-semibold mb-2 lg:mx-auto lg:text-[18px]">
//             To Receive
//           </h2>
//         </div>

//         <div className="flex justify-between mb-5 text-[#141B3480] lg:justify-between">
//           <p className="text-[10.5px] text-gray-500 lg:text-[16px]">
//             You will receive
//           </p>
//           <h3 className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
//             {formatNumber(receive.amount)}
//           </h3>
//         </div>

//         <div className="flex justify-between text-sm text-[#141B3480] lg:justify-between">
//           <p className="text-[10.5px] lg:text-[16px]">From</p>
//           <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
//             {receive.cirkle_count}
//           </p>
//           <p className="text-[10.5px] lg:text-[16px]">Cirkles</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentOverview;






import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatNumber } from "../../utils/string";

const PaymentBoxSkeleton = () => (
  <div className="flex-shrink-0 w-[47%] py-4 px-2 bg-[#E5F7FF66] border rounded-md lg:w-[30%] lg:border-gray-400">
    <div className="mb-4">
      <Skeleton height={20} width="60%" />
    </div>
    <div className="flex justify-between mb-5">
      <Skeleton height={24} width="40%" />
      <Skeleton height={24} width="40%" />
    </div>
    <div className="flex justify-between">
      <Skeleton height={20} width="30%" />
      <Skeleton height={20} width="30%" />
      <Skeleton height={20} width="30%" />
    </div>
  </div>
);

const PaymentOverview = ({ due, validations, receive, loading }) => {
  return (
    <div className="flex overflow-x-auto space-x-3 py-4 hide-scrollbar">
      {loading ? (
        // Render 3 skeletons
        Array.from({ length: 3 }).map((_, i) => <PaymentBoxSkeleton key={i} />)
      ) : (
        <>
          {/* Total Due */}
          <div className="flex-shrink-0 w-[47%] py-4 px-2 bg-[#E5F7FF66] border rounded-md lg:w-[30%] lg:border-gray-400">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[14px] font-semibold mb-2 lg:text-[18px] lg:mx-auto">
                Total Due
              </h2>
            </div>
            <div className="flex justify-between mb-5 text-[#141B3480] lg:justify-between">
              <p className="text-sm text-gray-500 lg:text-[16px]">You Owe</p>
              <h3 className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
                {formatNumber(due.amount)}
              </h3>
            </div>
            <div className="flex justify-between text-sm text-[#141B3480] lg:justify-between">
              <p className="text-[10.5px] lg:text-[16px]">Across</p>
              <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
                {formatNumber(due.cirkle_count)}
              </p>
              <p className="text-[10.5px] lg:text-[16px]">Cirkles</p>
            </div>
          </div>

          {/* Validations */}
          <div className="flex-shrink-0 w-[45%] py-4 px-2 bg-[#E5F7FF66] border rounded-md lg:w-[30%] lg:border-gray-400">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[14px] font-semibold mb-2 lg:text-[18px] lg:mx-auto">
                Validations
              </h2>
            </div>
            <div className="flex justify-between mb-5 text-[#141B3480] lg:justify-between">
              <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
                {validations.member_count}
              </p>
              <h3 className="text-[10.5px] text-gray-500 lg:text-[16px]">
                members across
              </h3>
            </div>
            <div className="flex justify-between text-sm text-[#141B3480] lg:justify-between">
              <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
                {formatNumber(validations.cirkle_count)}
              </p>
              <p className="text-[10.5px] lg:text-[16px]">cirkles have paid</p>
            </div>
          </div>

          {/* To Receive */}
          <div className="flex-shrink-0 w-[45%] py-4 px-2 bg-[#E5F7FF66] border rounded-md lg:w-[30%] lg:border-gray-400">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[14px] font-semibold mb-2 lg:mx-auto lg:text-[18px]">
                To Receive
              </h2>
            </div>
            <div className="flex justify-between mb-5 text-[#141B3480] lg:justify-between">
              <p className="text-[10.5px] text-gray-500 lg:text-[16px]">
                You will receive
              </p>
              <h3 className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
                {formatNumber(receive.amount)}
              </h3>
            </div>
            <div className="flex justify-between text-sm text-[#141B3480] lg:justify-between">
              <p className="text-[10.5px] lg:text-[16px]">From</p>
              <p className="text-sm font-bold text-black border rounded-full bg-white lg:text-[16px] lg:px-2 lg:py-1 lg:rounded-md">
                {receive.cirkle_count}
              </p>
              <p className="text-[10.5px] lg:text-[16px]">Cirkles</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentOverview;


