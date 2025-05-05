// import React from "react";
// import { useModal } from "../Cirkles/ModalContext";

// const ConfirmPaymentModal = () => {
//   // const { isModalOpen, closeModal, modalType, openModal } = useModal();
//    const { openModal, isModalOpen, closeModal, modalType, modalData } = useModal();

//   if (!isModalOpen || modalType !== "Confirm Payment") return null;

//   console.log(modalData)

//   return (
//     <div className="fixed inset-0 z-[50] flex items-center h-screen justify-center bg-black bg-opacity-[0.01] ">
//       <div className="bg-white rounded-lg shadow-lg  w-[85%] ">
//         <div
//           className="border-b py-4 px-2 mb-6 flex justify-between"
//           // onClick={closeModal}#
//           onClick={() => openModal("validate payment")}
//         >
//           <h1 className="text-[14px]">Confirm Payment Received</h1>

//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M15 9L9 14.9996M15 15L9 9.00039"
//               stroke="#141B34"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
//               stroke="#141B34"
//             />
//           </svg>
//         </div>

//         <div className="p-4">
//           <p className="mb-10 text-[14px]">
//             Are you sure you want to confirm receipt of this payment?
//           </p>

//           <p className="mb-2 text-[12px]">
//             Add any additional notes about this transaction for your records.
//           </p>

//           <textarea
//             name=""
//             id=""
//             placeholder="Enter any comments about this payment"
//             className=" border w-[100%] text-[10.5px] mx-auto rounded-md outline-none mb-10 px-4 py-5 "
//           ></textarea>

//           <div className="w-[90%] mx-auto flex justify-between ">
//             <button className="py-3 px-7 text-[10.5px] bg-[#00943F] rounded-md text-white font-bold ">
//               Comfirm Payment
//             </button>

//             <button
//               className="py-3 px-7 border text-[10.5px] rounded-md"
//               // onClick={closeModal}
//               onClick={() => openModal("validate payment")}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmPaymentModal;




import React, { useState } from "react";
import { useModal } from "../Cirkles/ModalContext";
import axiosInstance from "../../service";
// import axiosInstance from "../utils/axiosInstance";

const ConfirmPaymentModal = () => {
  const { openModal, isModalOpen, closeModal, modalType, modalData } =
    useModal();
  const [comment, setComment] = useState("");

  if (!isModalOpen || modalType !== "Confirm Payment") return null;

  console.log(modalData);

  const handleConfirmPayment = async () => {
    try {
      const response = await axiosInstance.post(
        `/cirkles/${modalData?.id}/validate`,
        {
          user: modalData?.user_id, // Ensure user ID is available
          comment: comment || "Received with thanks",
        }
      );
      console.log("Payment confirmed:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error confirming payment:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[50] flex items-center h-screen justify-center bg-black bg-opacity-[0.01] ">
      <div className="bg-white rounded-lg shadow-lg  w-[85%] ">
        <div
          className="border-b py-4 px-2 mb-6 flex justify-between"
          // onClick={() => openModal("validate payment")}
          onClick={() => closeModal()}
        >
          <h1 className="text-[14px]">Confirm Payment Received</h1>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 9L9 14.9996M15 15L9 9.00039"
              stroke="#141B34"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#141B34"
            />
          </svg>
        </div>

        <div className="p-4">
          <p className="mb-10 text-[14px]">
            Are you sure you want to confirm receipt of this payment?
          </p>

          <p className="mb-2 text-[12px]">
            Add any additional notes about this transaction for your records.
          </p>

          <textarea
            placeholder="Enter any comments about this payment"
            className="border w-[100%] text-[10.5px] mx-auto rounded-md outline-none mb-10 px-4 py-5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <div className="w-[90%] mx-auto flex justify-between ">
            <button
              className="py-3 px-7 text-[10.5px] bg-[#00943F] rounded-md text-white font-bold"
              onClick={handleConfirmPayment}
            >
              Confirm Payment
            </button>

            <button
              className="py-3 px-7 border text-[10.5px] rounded-md"
              // onClick={() => openModal("validate payment")}
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPaymentModal;


