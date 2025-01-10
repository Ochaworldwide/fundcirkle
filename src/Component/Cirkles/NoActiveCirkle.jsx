import React from "react";

const NoActiveCirkle = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white border rounded-lg p-6 shadow-md w-96 mx-auto">
      <p className="text-center text-gray-600 text-sm mb-4">
        You are currently not part of any active Cirkle.
      </p>
      <button className="bg-green-600 text-white text-sm font-medium py-2 px-6 rounded-lg w-full mb-2 hover:bg-green-700">
        Create New Cirkle
      </button>
      <button className="border text-green-600 text-sm font-medium py-2 px-6 rounded-lg w-full hover:bg-gray-100">
        Join a New Cirkle
      </button>
    </div>
  );
};

export default NoActiveCirkle;
