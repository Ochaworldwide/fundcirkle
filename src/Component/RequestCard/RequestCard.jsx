import React from "react";
import axiosInstance from "../../service";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";
import { FaCircleUser } from "react-icons/fa6";
import { useModal } from "../Cirkles/ModalContext";

const RequestCard = ({ data }) => {
  const { showStatusReport } = useModal();
  const handleAccept = async () => {
    const payload = {
      email: data.email,
    };
    try {
      const response = await axiosInstance.post(
        `/cirkles/${data.cirkle_id}/accept`,
        payload
      );

      if (response.data.success) {
        // toast.success("Request accepted successfully!",{ ...toastConfig });
        showStatusReport("Request accepted successfully!");
      } else {
        // toast.error("Failed to accept request: " + response.data.message,{ ...toastConfig });
        showStatusReport("Failed to accept request: " + response.data.message);

      }
    } catch (error) {
      if (error.response) {
        showStatusReport(
          "Warning: " +
            (error.response.data.message || error.response.statusText)
        );
      } else if (error.request) {
        showStatusReport("Warning: No response received from the server.");
      } else {
        showStatusReport("Warning: " + error.message);
      }
      console.error("Error details:", error);
    }
  };

  const handleDecline = async () => {
    const payload = {
      email: data.email,
    };
    try {
      const response = await axiosInstance.post(
        `/cirkles/${data.id}/decline`,
        payload
      );

      if (response.data.success) {
        // toast.success("Request declined successfully!",{ ...toastConfig });
        showStatusReport("Request declined successfully!");
      } else {
        // toast.error("Failed to decline request: " + response.data.message,{ ...toastConfig });
        showStatusReport("Failed to decline request: " + response.data.message);
      }
    } catch (error) {
      if (error.response) {
        showStatusReport(
          "Warning: " +
            (error.response.data.message || error.response.statusText)
        );
      } else if (error.request) {
        showStatusReport("Warning: No response received from the server.");
      } else {
        showStatusReport("Warning: " + error.message);
      }
      console.error("Error details:", error);
    }
  };



  return (
    <div className="py-4 px-2 border border-gray-200 rounded-lg shadow-md mx-auto mt-2">
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* <img
            src={data.cirkle.profileImage}
            alt="profile"
            className="w-14 h-14 rounded-full border"
          /> */}
          {data?.user?.profile_pic ? (
            <img
              src={data.user.profile_pic}
              alt="Group"
              className="w-14 h-14 rounded-full"
            />
          ) : (
            <FaCircleUser className="w-14 h-14 text-gray-500" />
          )}

          {/* <FaCircleUser className=" text-gray-500 w-12 h-12 rounded-full border" /> */}
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <h3 className="mt-2 text-sm font-[400]">{data.user.full_name}</h3>
        <p className="text-gray-500 text-xs">{data.user.description}</p>
      </div>
      <div className="mt-4 text-xs text-gray-600 mx-auto">
        <p className="text-center mb-2">
          Lives in{" "}
          <span className="font-semibold bg-gray-200 px-2 py-1 rounded">
            {/* {data.location} */}
            Nigeria
          </span>
          &nbsp; and active in{" "}
          <span className="font-semibold">
            {data.activeCircles}
            {5}
          </span>{" "}
          Cirkles
        </p>
        <p className="mt-2 flex items-center justify-center">
          {data.user.phone}
        </p>
      </div>
      <div className="mt-4 flex justify-between text-xs  w-[250px]">
        <button
          className="px-2 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          onClick={handleAccept}
        >
          Accept Request
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400"
          onClick={handleDecline}
        >
          Decline Request
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
