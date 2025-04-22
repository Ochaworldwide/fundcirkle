// import React from "react";
// import { useModal } from "./ModalContext";
// import StatusReportModal from "../StatusReport/StatusReportModal";


// const ModalRenderer = () => {
//   const { isModalOpen, modalType, modalData, closeModal } = useModal();

//   if (!isModalOpen) return null;

//   switch (modalType) {
//     case "status-report":
//       return (
//         <StatusReportModal
//           report={modalData?.message || ""}
//           isOpen={isModalOpen}
//           onClose={closeModal}
//         />
//       );
//     // Add more modals here as needed
//     default:
//       return null;
//   }
// };

// export default ModalRenderer;









import React from "react";
import { useModal } from "./ModalContext";
import StatusReportModal from "../StatusReport/StatusReportModal";

const ModalRenderer = () => {
  const {
    isModalOpen,
    modalType,
    modalData,
    closeModal,
    statusReport,
    hideStatusReport,
  } = useModal();

  return (
    <>
      {/* Regular modals */}
      {isModalOpen && modalType !== "status-report" && (
        <>{/* Add your other modals here */}</>
      )}

      {/* Status report modal rendered independently */}
      {statusReport.open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <StatusReportModal
            report={statusReport.message}
            isOpen={true}
            onClose={hideStatusReport}
          />
        </div>
      )}
    </>
  );
};

export default ModalRenderer;
