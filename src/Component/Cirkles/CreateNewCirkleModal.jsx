// import React, { useState } from "react"
// import { motion } from "framer-motion";
// import { useModal } from "./ModalContext";
// import CircularProgress from "./CircularProgress";
// import PayoutCard from "./PayoutCard";

// const CreateNewCirkleModal = () => {

//   const [cirkleName, setCirkleName] = useState("");
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState(250000);
//   const [category, setCategory] = useState("Personal");
//   const [members, setMembers] = useState(2);
//   const [frequency, setFrequency] = useState("Monthly");
//   const [dueDate, setDueDate] = useState(25);

//   const { isModalOpen, modalType, closeModal } = useModal();

//   if (!isModalOpen || modalType !== "create") return null;

//   const data = {
//     title: "Hyderabad Pharmacist Union",
//     description:
//       "The Hyderabad Pharmacist Union is a Cirkle of Professional Pharmacists working in Hyderabad and its environs. The aim of this Cirkle is to create a social funding scheme for members to fund their private projects.",
//     image: "/images/circlepeople.svg",
//     groupName: "Hyderabad Pharmacist Union",
//     payoutAmount: "420,000",
//     amount: "420,000",
//     dateRange: "August 2024 - February 2025",
//     members: [
//       {
//         image: "/images/person1.svg",
//         name: "Priya",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person2.svg",
//         name: "Ravi",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person3.svg",
//         name: "Lyla",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person4.svg",
//         name: "John",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person5.svg",
//         name: "Hana",
//         memberDate: "Aug, 2024",
//       },
//       {
//         image: "/images/person6.svg",
//         name: "Steven",
//         memberDate: "Aug, 2024",
//       },
//     ],
//     payoutDate: "25th of Nov 2024",
//     cirkleAmount: "60,000",
//     currency: "/images/green-currency.svg",
//   };

//   const payoutData = {
//     progress: { current: 2, total: 7 },
//     payoutDate: "25th of Nov 2024",
//     amount: "60,000",
//     currency: "/images/currency.svg",
//   };

//   return (
//     <motion.div
//       initial={{ y: "100%", opacity: 0 }} // Start off-screen
//       animate={{ y: 0, opacity: 1 }} // Slide into view
//       exit={{ y: "100%", opacity: 0 }} // Slide out when unmounted
//       transition={{
//         duration: 0.5,
//         ease: "easeInOut",
//       }} // Smooth transition
//       // transition={{ type: "spring", stiffness: 100, damping: 15 }}
//       className="fixed bottom-0 left-0 right-0  rounded-lg mx-auto max-w-md z-50  bg-white"
//     >
//       <div className=" pb-10 rounded-lg max-w-md w-full">
//         <div className="py-5 px-3 bg-[#FAF5FF] flex justify-between w-[100%] mx-auto rounded-xl">
//           <img src="/images/tricycle.svg" alt="" srcset="" />

//           <p className="text-[18px] font-[400]">View Circle Details</p>
//           <button onClick={closeModal} className="text-gray-500 float-right">
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//                 stroke="#141B34"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="max-w-md mx-auto border rounded-lg p-3 shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <input
//               type="text"
//               placeholder="Enter Cirkle Name"
//               value={cirkleName}
//               onChange={(e) => setCirkleName(e.target.value)}
//               className=" border rounded-lg px-3 py-2 text-sm"
//             />
//             <div className="flex flex-col items-center  ml-4">
//               <span className="text-[12px]">Number of Members</span>
//               <div className="flex items-center space-x-1">
//                 <button
//                   onClick={() => setMembers((prev) => Math.max(1, prev - 1))}
//                   className="w-8 h-8 flex items-center justify-center border rounded-lg text-sm"
//                 >
//                   -
//                 </button>
//                 <span>{members}</span>
//                 <button
//                   onClick={() => setMembers((prev) => prev + 1)}
//                   className="w-8 h-8 flex items-center justify-center border rounded-lg text-sm"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>

//           <textarea
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2 mb-4 text-sm"
//           ></textarea>

//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center">
//               <span className="text-2xl mr-2">₹</span>
//               <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 className="w-28 border rounded-lg px-3 py-2 text-sm"
//               />
//             </div>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="border rounded-lg px-3 py-2 text-sm"
//             >
//               <option value="Personal">Personal</option>
//               <option value="Business">Business</option>
//               <option value="Others">Others</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <p className="text-sm mb-2">Contribution Frequency and Due Date</p>
//             <div className="flex space-x-4 mb-4">
//               {["Biweekly", "Monthly", "Quarterly"].map((freq) => (
//                 <button
//                   key={freq}
//                   onClick={() => setFrequency(freq)}
//                   className={`px-3 py-2 border rounded-lg ${
//                     frequency === freq ? "bg-green-200" : ""
//                   }`}
//                 >
//                   {freq}
//                 </button>
//               ))}
//             </div>
//             <div className="grid grid-cols-7 gap-2">
//               {[...Array(31)].map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setDueDate(i + 1)}
//                   className={`w-8 h-8 flex items-center justify-center border rounded-lg ${
//                     dueDate === i + 1 ? "bg-green-500 text-white" : ""
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center"
//             onClick={() => alert("Next clicked")}
//           >
//             Next
//             <span className="ml-2">&rarr;</span>
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CreateNewCirkleModal;




import React, { useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "./ModalContext";
import SimpleDropdown from "./SimpleDropdown";

const CreateNewCirkleModal = () => {
  const [cirkleName, setCirkleName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(250000);
  const [category, setCategory] = useState("Personal");
  const [members, setMembers] = useState(2);
  const [frequency, setFrequency] = useState("Monthly");
  const [dueDate, setDueDate] = useState(25);
  const [dueMonth, setDueMonth] = useState(24);
  const [selectedDay, setSelectedDay] = useState("Friday");

  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "create") return null;

  const handleSelection = (value) => {
    console.log("Selected value:", value);
  };

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 right-0 rounded-lg mx-auto max-w-md z-50 bg-white"
    >
      <div className="pb-10 rounded-lg max-w-md w-full">
        <div className="py-5 px-3 bg-[#E5F4EC] flex justify-between w-[100%] mx-auto rounded-xl mb-5">
          <img src="/images/tricycle.svg" alt="Circle Icon" />

          <p className="text-[18px] font-[400]">Create New Cirkle</p>
          <button onClick={closeModal} className="text-gray-500 float-right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="max-w-md mx-auto rounded-lg p-3 ">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Enter Cirkle Name"
              value={cirkleName}
              onChange={(e) => setCirkleName(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm outline-none"
            />
            <div className="flex flex-col items-center ml-4">
              <span className="text-[12px]">Number of Members</span>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setMembers((prev) => Math.max(1, prev - 1))}
                  className="w-7 h-7 flex items-center justify-center border rounded-lg text-sm"
                >
                  -
                </button>
                <span className="p-1">{members}</span>
                <button
                  onClick={() => setMembers((prev) => prev + 1)}
                  className="w-7 h-7 flex items-center justify-center border rounded-lg text-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-4 text-sm outline-none"
          ></textarea>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <img src="/images/blue-currency.svg" alt="" srcset="" />
              {/* <span className="text-2xl mr-2">₹</span> */}
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-28 border rounded-lg px-3 py-2 text-sm outline-none"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 text-[]"
            >
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <p className="text-[12px] font-[400] mb-5">
            Contribution Frequency and Due date
          </p>
          <div className="mb-4 flex justify-between h-[200px]">
            <div className="flex flex-col space-y-2  text-[10.5px] bg-[#EBEBED] w-[25%] h-fit py-1 rounded-md">
              {["Biweekly", "Monthly", "Quarterly"].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`px-3 py-2 border rounded-md w-[90%] mx-auto text-[#141B3480] ${
                    frequency === freq ? "bg-white text-[#141B34]" : ""
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>

            <div className="w-[70%] ">
              {/* Weekday Selection for Biweekly */}
              {frequency === "Biweekly" && (
                <div className="flex flex-col items-center ">
                  {/* <p className="text-sm mb-2">Select a Weekday</p> */}
                  <SimpleDropdown
                    options={["Week 1", "Week 2", "Week 3", "Week 4"]}
                    onSelect={handleSelection}
                    optionHeading={"Select Week"}
                  />
                  <div className="space-y-2 space-x-2  w-[100%]">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-3 py-2 border rounded-lg  text-[10.5px] w-fit ${
                          selectedDay === day ? "bg-green-500 text-white" : ""
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Due Date Selection */}
              {frequency === "Monthly" && (
                <div>
                  <p className="text-sm mb-4 text-center">Pick a Date</p>
                  <div className="grid grid-cols-7 gap-3 flex-wrap  ">
                    {[...Array(28)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setDueDate(i + 1)}
                        className={`w-7 h-7 flex items-center justify-center border rounded-lg text-[11px] ${
                          dueDate === i + 1 ? "bg-green-500 text-white" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Due Quaterly Selection */}
              {frequency === "Quarterly" && (
                <div>
                  {/* <p className="text-sm mb-2">Select a Due Date</p> */}

                  <SimpleDropdown
                    options={["Month 1", "Month 2", "Month 3", "Month 4"]}
                    onSelect={handleSelection}
                    optionHeading={"Select Month"}
                  />
                  <div className="grid grid-cols-7 gap-2 flex-wrap ">
                    {[...Array(28)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setDueMonth(i + 1)}
                        className={`w-7 h-7 flex items-center justify-center border rounded-lg text-[11px] ${
                          dueMonth === i + 1 ? "bg-green-500 text-white" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center"
            onClick={() =>
              alert(
                `Next clicked. Frequency: ${frequency}, ${
                  frequency === "Biweekly"
                    ? `Day: ${selectedDay}`
                    : `Due Date: ${dueDate}`
                }`
              )
            }
          >
            Next
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateNewCirkleModal;
