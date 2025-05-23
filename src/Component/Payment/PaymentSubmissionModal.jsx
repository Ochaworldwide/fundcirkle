// import React from "react";
// import { useModal } from "../Cirkles/ModalContext";
// import PaymentForm from "./PaymentForm";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const PaymentSubmissionModal = () => {
//   const navigate = useNavigate();
//   const { isModalOpen, closeModal, modalType, modalData,openModal } = useModal();

//   //   console.log("payment modal", modalData);

  

//   const handleSubmit = () => {
//     openModal("make payment", modalData);
//     // navigate("/paymentsuccessful");
//     // console.log(modalData);
//     // closeModal();
//   };

//   if (!isModalOpen || modalType !== "payment submission") return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen  bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="bg-white rounded-lg  w-full max-w-md ">
//           {/* Modal Header */}
//           <div className="flex items-center justify-between p-4 bg-green-100 rounded-t-lg sticky  top-0">
//             <div className="flex items-center gap-2">
//               <img
//                 src="/images/payment-head-image.svg"
//                 alt="Payment Icon"
//                 className="w-8 h-8"
//               />
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Submit for Payment
//               </h2>
//             </div>
//             <button
//               onClick={closeModal}
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <img src="/images/arrow-down-01.svg" alt="" srcset="" />
//             </button>
//           </div>

//           {/* Payment Instructions */}
//           <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
//             <h2 className="text-lg font-semibold">Select who to pay</h2>
//             <p className="text-sm text-gray-600 mt-1">
//               See details of the current Receiving member for the set period,
//               and any missed payment for members of this Cirkle.
//             </p>

//             <div className="mt-4 p-4 border rounded-lg flex items-center justify-between">
//               <div className="flex items-center ">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="Rebecca Lee"
//                   className="w-10 h-10 rounded-full mr-3"
//                 />
//                 <div>
//                   <p className="font-medium">Rebecca Lee</p>
//                   <p className="text-xs text-gray-500">
//                     See the Receiving Member for this month
//                   </p>
//                 </div>
//               </div>
//               <span className="text-green-500 text-xl">✔</span>
//             </div>

//             <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700" onClick={()=>{
//                 handleSubmit()
//             }}>
//               Proceed to make Payment
//             </button>

//             <p className="text-center text-xs text-gray-500 mt-4">
//               Missed Payments for other members of this Cirkle should appear
//               here.
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PaymentSubmissionModal;






// import React, { useEffect, useState } from "react";
// import { useModal } from "../Cirkles/ModalContext";
// import { motion } from "framer-motion";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const members = [
//   {
//     id: 1,
//     name: "Westempire",
//     date: "Current",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Sharon White",
//     date: "May 24, 2024",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Viraj Kiaan",
//     date: "October 28, 2024",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
// ];

// const PaymentSubmissionModal = () => {
//   const navigate = useNavigate();
//   const { isModalOpen, closeModal, modalType, modalData, openModal } =
//     useModal();
//   const [selectedMember, setSelectedMember] = useState(members[0]);

//   const handleSubmit = () => {
//     openModal("make payment", modalData);
//   };
//   const [info, setInfo] = useState({})

//   useEffect(() => {
//       console.log(modalData)
//       setInfo(modalData?.last_payment)

//   }, [modalData])
  

//   if (!isModalOpen || modalType !== "payment submission") return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
//       >
//         <div className="bg-white rounded-lg w-full max-w-md">
//           <div className="flex items-center justify-between p-4 bg-green-100 rounded-t-lg sticky top-0">
//             <div className="flex items-center gap-2">
//               <img
//                 src="/images/payment-head-image.svg"
//                 alt="Payment Icon"
//                 className="w-8 h-8"
//               />
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Submit for Payment
//               </h2>
//             </div>
//             <button
//               onClick={closeModal}
//               className="text-gray-600 hover:text-gray-900"
//             >
//               <img src="/images/arrow-down-01.svg" alt="" />
//             </button>
//           </div>

//           <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
//             <h2 className="text-lg font-semibold">Select who to pay</h2>
//             <p className="text-sm text-gray-600 mt-1">
//               See details of the current Receiving member for the set period,
//               and any missed payment for members of this Cirkle.
//             </p>

//             <div className="mt-4 border rounded-lg p-3 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <span className="font-medium">{selectedMember.name}</span>
//               </div>
//               <FaCheckCircle className="text-green-500 text-xl" />
//             </div>

//             {/* <div className="mt-4 border rounded-lg p-3 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={modalData.last_payment.receiver_pic}
//                   // alt={selectedMember.name}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <span className="font-medium">
//                   {modalData.last_payment.receiver}
//                 </span>
//               </div>
//               <FaCheckCircle className="text-green-500 text-xl" />
//             </div> */}

//             <button
//               className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
//               onClick={handleSubmit}
//             >
//               Proceed to make Payment
//             </button>

//             <p className="text-center text-xs text-gray-500 mt-4">
//               Missed Payments for other members of this Cirkle should appear
//               here.
//             </p>

//             <div className="mt-4 space-y-3">
//               {members.slice(1).map((member) => (
//                 <div
//                   key={member.id}
//                   className="border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100"
//                   onClick={() => setSelectedMember(member)}
//                 >
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div>
//                       <span className="font-medium block">{member.name}</span>
//                       <span className="text-sm text-gray-500">
//                         {member.date}
//                       </span>
//                     </div>
//                   </div>
//                   <FaTimesCircle className="text-red-500 text-xl" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PaymentSubmissionModal;











import React, { useEffect, useState } from "react";
import { useModal } from "../Cirkles/ModalContext";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentSubmissionModal = () => {
  const navigate = useNavigate();
  const { isModalOpen, closeModal, modalType, modalData, openModal } =
    useModal();

  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  // const handleSubmit = () => {
  //   // openModal("make payment", modalData);
  //   openModal("make payment", selectedMember);
  // };

  const handleSubmit = () => {
    openModal("make payment", {
      ...modalData,
      selectedMember: selectedMember,
    });
  };
  

  useEffect(() => {
    if (modalData?.last_payment) {
      const currentReceiver = {
        id: 0,
        name: modalData.last_payment.receiver,
        date: "Current",
        image: modalData.last_payment.receiver_pic,
        bank_details: modalData.last_payment.bank_details,
        status: "current",
      };

      const pastPending =
        modalData.past_pending_payments?.map((member, index) => ({
          id: index + 1,
          name: member.receiver,
          // date: member.date,
          image: member.receiver_pic,
          bank_details:member.bank_details,
          status: "missed",
        })) || [];

      const updatedMembers = [currentReceiver, ...pastPending];
      setMembers(updatedMembers);
      setSelectedMember(currentReceiver);
      console.log(modalData)
    }
  }, [modalData]);

  if (!isModalOpen || modalType !== "payment submission") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black h-screen bg-opacity-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 h-[75%] bg-white overflow-scroll"
      >
        <div className="bg-white rounded-lg w-full max-w-md">
          <div className="flex items-center justify-between p-4 bg-green-100 rounded-t-lg sticky top-0">
            <div className="flex items-center gap-2">
              <img
                src="/images/payment-head-image.svg"
                alt="Payment Icon"
                className="w-8 h-8"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                Submit for Payment
              </h2>
            </div>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-900"
            >
              <img src="/images/arrow-down-01.svg" alt="" />
            </button>
          </div>

          <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
            <h2 className="text-lg font-semibold">Select who to pay</h2>
            <p className="text-sm text-gray-600 mt-1">
              See details of the current Receiving member for the set period,
              and any missed payment for members of this Cirkle.
            </p>

            {selectedMember && (
              <div className="mt-4 border rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{selectedMember.name}</span>
                </div>
                <FaCheckCircle className="text-green-500 text-xl" />
              </div>
            )}

            <button
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              onClick={handleSubmit}
            >
              Proceed to make Payment
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              Missed Payments for other members of this Cirkle should appear
              here.
            </p>

            <div className="mt-4 space-y-3">
              {members.slice(1).map((member) => (
                <div
                  key={member.id}
                  className="border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <span className="font-medium block">{member.name}</span>
                      <span className="text-sm text-gray-500">
                        {member.date}
                      </span>
                    </div>
                  </div>
                  <FaTimesCircle className="text-red-500 text-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSubmissionModal;

