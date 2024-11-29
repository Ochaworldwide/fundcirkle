import React from "react";
import { useModal } from "../Cirkles/ModalContext";
import ConfirmPaymentModal from "./ConfirmPaymentModal";
import RequestReuploadModal from "./RequestReuploadModal";


const PaymentCard = ({
  name,
  image,
  club,
  amount,
  currency,
  method,
  date,
  proofUrl,
  isCash,
}) => {

   const { openModal } = useModal();
  return (
    <div className=" rounded-lg shadow-lg p-4 border  w-72 ">
      <div className="flex flex-col items-center space-x-4">
        <img
          src={image} // Replace with actual image URL
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-[12px] text-center font-semibold">{name}</h3>
          <p className="text-[8px] text-[#141B3480]">{club}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between w-[70%] mx-auto mb-3">
        <p className="text-[10.5px] text-gray-500">Contribution Amount</p>
        <div className="text-[12px] font-bold text-gray-800 flex items-center">
          <img src={currency} alt="" className="h-4" />
          {amount}
        </div>
      </div>

      <div className="flex items-center w-[70%] mx-auto text-[8px] space-x-2 mb-4">
        <p className="  text-gray-500">
          Paid through:{" "}
          <span className="font-semibold border p-1 rounded-md">{method}</span>
        </p>
        <p className=" text-gray-500">
          On: <span className="border p-1 rounded-md">{date}</span>
        </p>
      </div>

      <div className="border h-20 rounded-md w-[100%] bg-[#F5F5F5]">
        {isCash ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[8px] text-gray-500 mt-2 ">
              You received cash payment at{" "}
              <span className="font-semibold border py-1 px-3 rounded-md ml-2">
                Location
              </span>
            </p>

            <p className="text-[8px] text-gray-500 mt-2 ">
              in the presence of{" "}
              <span className="font-semibold border p-1 rounded-md ml-2">
                Witnesses
              </span>
              .
            </p>
          </div>
        ) : (
          // <div className="mt-2">
          //   <button
          //     onClick={() => window.open(proofUrl, "_blank")}
          //     className="text-blue-500 underline"
          //   >
          //     View Proof
          //   </button>
          // </div>

          <div
            className="h-20 overflow-hidden relative"
            onClick={() => openModal("View Proof")}
          >
            <img src="/images/proof.svg" alt="" srcset="" className="w-full" />
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  items-center">
              <img src="/images/file-upload.svg" alt="" srcset="" />
              <p>view proof</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex space-x-2 w-full justify-between">
        <button
          className="bg-green-500 text-white text-[10.5px] px-2 py-2 rounded-lg "
          onClick={() => openModal("Confirm Payment")}
        >
          Confirm Payment
        </button>

        <button
          className="border text-black text-[10.5px] px-2 py-2 rounded-lg"
          onClick={() => openModal("Request Reupload")}
        >
          Request Re-Upload
        </button>
      </div>
    </div>
  );
};



const PaymentList = () => {
  const data = [
    {
      name: "Jonathan Lee",
      image: "/images/verified-1.svg",
      club: "Hyderabad Teaching Hospital Club",
      amount: "42k",
      currency: "/images/currency.svg",
      method: "Bank Transfer",
      date: "20-10-24",
      proofUrl: "#",
      isCash: false,
    },
    {
      name: "Jane Kofi",
      image: "/images/verified-2.svg",
      club: "Hyderabad Teaching Hospital Club",
      amount: "42k",
      currency: "/images/currency.svg",
      method: "Cash",
      date: "20-10-24",
      proofUrl: null,
      isCash: true,
    },
    {
      name: "David Zhang",
      image: "/images/verified-3.svg",
      club: "Hyderabad Teaching Hospital Club",
      amount: "42k",
      currency: "/images/currency.svg",
      method: "Bank Transfer",
      date: "20-10-24",
      proofUrl: "#",
      isCash: false,
    },
    {
      name: "Alexander Smith",
      image: "/images/verified-4.svg",
      club: "Hyderabad Teaching Hospital Club",
      amount: "42k",
      currency: "/images/currency.svg",
      method: "Cash",
      date: "20-10-24",
      proofUrl: null,
      isCash: true,
    },
  ];

  return (
    <div className="flex w-[1200px] justify-between  ">
      {data.map((item, index) => (
        <PaymentCard key={index} {...item} />
      ))}
    </div>
  );
};

export default PaymentList;
