import React from "react";
import { useModal } from "./ModalContext";
import { Navigate, useNavigate } from "react-router-dom";

const NoActiveCirkle = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-10 justify-center bg-white border rounded-lg p-6 h-72 shadow-md w-96 mx-auto">
      <p className="text-center text-gray-600 text-base mb-8">
        You are currently not part of any active Cirkle.
      </p>
      <button
        className="bg-green-600 text-white text-sm font-bold py-4 px-6 rounded-lg w-full mb-5 hover:bg-green-700"
        onClick={() => openModal("create")}
      >
        Create New Cirkle
      </button>
      <button
        className="border text-green-600 text-sm font-bold py-4 px-6 rounded-lg w-full hover:bg-gray-100"
        onClick={() => navigate("/discover")}
      >
        Join a New Cirkle
      </button>
    </div>
  );
};

export default NoActiveCirkle;
