import React, { useState } from "react";
import moreIcon from "/images/more.svg";
import { useModal } from "./ModalContext";
import InviteCirkleDetailsModal from "./InviteCirkleDetailsModal";
import { formatNumber } from "../../utils/string";

const InviteCard = ({ group, buttons}) => {
  const { openModal, isModalOpen } = useModal();

  // Handle click function
  const handleGroupClick = () => {
    console.log(`Clicked group ID: ${group.id}`);
    const stateId = group.id
    openModal("invite", stateId);
  };

  // console.log(group)

  return (
    <div className="flex p-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] border rounded-lg mb-4 w-[100%] lg:p-2">
      <div className="py-5  w-[20%]">
        <img
          src={group.image}
          alt={group.name}
          className="w-12 h-12 rounded-full "
        />
      </div>

      <div className="py-5  w-[80%]">
        <div className="p-1 flex justify-between w-[100%]">
          <div className="w-[60%]">
            <h3 className="text-sm font-semibold">{group.name}</h3>
            <p className="text-xs text-gray-500">{group.memberName}</p>
          </div>

          <div className="text-center flex border h-fit rounded-full p-3">
            <p className="text-[#00943F] font-semibold text-xs">
              {group.currentMembers}/{group.totalMembers}
            </p>
          </div>

          <div
            className=" rounded-full p-1 border h-10 "
            onClick={() => {
              // openModal("invite",stateId);
              handleGroupClick();
            }}
          >
            <img src={moreIcon} alt="" srcset="" />
          </div>
        </div>
        <div className="py-5 flex justify-around">
          <div className="py-2 px-3 border rounded-md mr-auto">
            <p className="text-gray-700 font-bold flex ">
              <span className="pr-1">
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 19.6C15.302 19.6 19.6 15.302 19.6 10C19.6 4.69809 15.302 0.400024 10 0.400024C4.69809 0.400024 0.400024 4.69809 0.400024 10C0.400024 15.302 4.69809 19.6 10 19.6ZM6.40006 4.00002C5.73732 4.00002 5.20006 4.53728 5.20006 5.20002C5.20006 5.86277 5.73732 6.40002 6.40006 6.40002H7.60006C8.4884 6.40002 9.26401 6.88266 9.67898 7.60002H6.40006C5.73732 7.60002 5.20006 8.13728 5.20006 8.80002C5.20006 9.46277 5.73732 10 6.40006 10H9.67898C9.26401 10.7174 8.4884 11.2 7.60006 11.2H6.40006C5.9147 11.2 5.47714 11.4924 5.2914 11.9408C5.10567 12.3892 5.20833 12.9054 5.55153 13.2486L9.15153 16.8486C9.62016 17.3172 10.38 17.3172 10.8486 16.8486C11.3172 16.3799 11.3172 15.6201 10.8486 15.1515L9.06838 13.3713C10.6267 12.8711 11.838 11.5963 12.2488 10H13.6001C14.2628 10 14.8001 9.46277 14.8001 8.80002C14.8001 8.13728 14.2628 7.60002 13.6001 7.60002H12.2488C12.1393 7.1743 11.9728 6.77143 11.7579 6.40002H13.6001C14.2628 6.40002 14.8001 5.86277 14.8001 5.20002C14.8001 4.53728 14.2628 4.00002 13.6001 4.00002H6.40006Z"
                    fill="#141B34"
                  />
                </svg>
              </span>
              {/* {group.amount} */}
              {formatNumber(group.amount)}
            </p>
          </div>

          <div className="flex gap-2 lg:w-[60%] lg:gap-0 lg:overflow-hidden  ">{buttons}</div>
        </div>
      </div>
    </div>
  );
};

export default InviteCard;




