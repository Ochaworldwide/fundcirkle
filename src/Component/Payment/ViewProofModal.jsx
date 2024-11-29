// import React from "react";
// import { useModal } from "../Cirkles/ModalContext";

// const ViewProofModal = () => {
//   const { isModalOpen, closeModal, modalType } = useModal();

//   if (!isModalOpen || modalType !== "View Proof") return null;

//   return (
//     <div className="fixed inset-0 z-[50] flex items-center h-screen justify-center bg-black bg-opacity-[0.01] ">
//       <div className=" rounded-lg shadow-lg  w-[85%] relative ">
//         <div className=" flex absolute right-0 space-x-6 pt-3">
//           <img src="/images/download-02.svg" alt="" srcset="" />

//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             onClick={closeModal}
//           >
//             <path
//               d="M15 9L9 14.9996M15 15L9 9.00039"
//               stroke="#141B34"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
//               stroke="#141B34"
//             />
//           </svg>
//         </div>

//         <div className="w-full">
//           <img src="/images/proof.svg" alt="" srcset="" className="w-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProofModal;


import React from "react";
import { useModal } from "../Cirkles/ModalContext";

const ViewProofModal = () => {
  const { isModalOpen, closeModal, modalType } = useModal();

  if (!isModalOpen || modalType !== "View Proof") return null;

  // Function to handle the download of the proof image
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    // Set the href to the proof image URL
    link.href = "/images/proof.svg";
    // Set the download attribute with the desired file name
    link.download = "proof.svg";
    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center bg-black bg-opacity-35">
      <div className="rounded-lg shadow-lg w-[85%] relative bg-white">
        {/* Header with Download and Close Icons */}
        <div className="flex absolute right-4 top-4 space-x-6 ">
          {/* Download Icon */}
          <img
            src="/images/download-02.svg"
            alt="Download proof"
            onClick={handleDownload}
            className="cursor-pointer w-6 h-6"
          />

          {/* Close Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={closeModal}
            className="cursor-pointer"
          >
            <path
              d="M15 9L9 15"
              stroke="#141B34"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 15L9 9"
              stroke="#141B34"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#141B34"
            />
          </svg>
        </div>

        {/* Proof Image */}
        <div className="w-full">
          <img
            src="/images/proof.svg"
            alt="Proof"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewProofModal;
