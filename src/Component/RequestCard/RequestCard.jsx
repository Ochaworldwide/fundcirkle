import React from "react";



const RequestCard = ({ data }) => {
  return (
    <div className="py-4 px-2 border border-gray-200 rounded-lg shadow-md mx-auto mt-2">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={data.cirkle.profileImage}
            alt="profile"
            className="w-14 h-14 rounded-full border"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <h3 className="mt-2 text-sm font-[400]">{data.cirkle.name}</h3>
        <p className="text-gray-500 text-xs">{data.cirkle.description}</p>
      </div>
      <div className="mt-4 text-xs text-gray-600 mx-auto">
        <p className="text-center">
          Lives in{" "}
          <span className="font-semibold bg-gray-200 px-2 py-1 rounded">
            {/* {data.location} */}
            Nigeria
          </span>
          &nbsp; and active in{" "}
          <span className="font-semibold">{data.activeCircles}{5}</span> Cirkles
        </p>
        <p className="mt-2 flex items-center justify-center">
          Average monthly income &nbsp;
          <span className="font-semibold flex items-center">
            <img src={data.coinIcon} alt="coin icon" className="w-4 h-4" />
            {data.income}
          </span>
        </p>
      </div>
      <div className="mt-4 flex justify-between text-xs  w-[250px]">
        <button className="px-2 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
          Accept Request
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400">
          Decline Request
        </button>
      </div>
    </div>
  );
};


export default RequestCard;
