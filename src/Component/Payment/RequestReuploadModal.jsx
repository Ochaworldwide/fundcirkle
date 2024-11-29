import React from "react";
import { useModal } from "../Cirkles/ModalContext";

const RequestReuploadModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();

  if (!isModalOpen || modalType !== "Request Reupload") return null;

  return (
    <div className="fixed inset-0 z-[50] flex items-center h-screen justify-center bg-black bg-opacity-[0.01] ">
      <div className="bg-white rounded-lg shadow-lg w-[85%] ">
        <div
          className="border-b py-4 p-2 mb-6 flex justify-between"
          onClick={closeModal}
        >
          <h1 className="text-[18px]">Request Proof Re-Upload</h1>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 9L9 14.9996M15 15L9 9.00039"
              stroke="#141B34"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#141B34"
            />
          </svg>
        </div>

        <div className="p-4 ">
          <p className="mb-10 text-[14px]">
            Are you sure you want to request a re-upload of the proof of
            payment? The contributor will be notified.
          </p>

          <p className="mb-3 text-[12px]">
            Add a reason for requesting the re-upload to help the contributor
            understand the issue.
          </p>

          <textarea
            name=""
            id=""
            placeholder="Enter reason for re-upload request"
            className=" border w-[100%] text-[10.5px] mx-auto rounded-md outline-none mb-10 px-4 py-5 "
          ></textarea>

          <div className="w-[90%] mx-auto flex justify-between ">
            <button className="py-3 px-7 text-[10.5px] bg-[#00943F] rounded-md text-white font-bold ">
              Request Re-Upload
            </button>

            <button
              className="py-3 px-7 border text-[10.5px] rounded-md"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestReuploadModal;
