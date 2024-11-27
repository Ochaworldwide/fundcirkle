import React from "react";

const CardBox = ({ groupName, personCount, persons }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col justify-between items-center bg-white">
      <div className="flex justify-between w-[100%] mb-2">
        {persons.map((person, index) => (
          <img
            key={index}
            src={person}
            alt="Person"
            className="w-16 h-10 rounded-full border-2 border-white"
          />
        ))}

        <img src="/images/radio-button.svg" alt="" srcset="" />
      </div>
      <div>
        <p className="text-[12px] font-semibold border rounded-md px-2 py-[2px] mb-2">
          {personCount} Persons need payment validation
        </p>
        <p className="text-[8px] text-gray-500 ">{groupName}</p>
      </div>
    </div>
  );
};

export default CardBox;
