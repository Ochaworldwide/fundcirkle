import React from "react";

function NoInvitesCard() {
  return (
    <div className="flex items-center justify-center h-96 ">
      <div className="border border-gray-300 rounded-lg p-6 shadow-md h-[70%] flex justify-center items-center bg-white text-center max-w-md">
        <p className="text-gray-600 font-medium text-xl">
          You do not have any pending Cirkle Invites.
        </p>
      </div>
    </div>
  );
}

export default NoInvitesCard;
