// import React, { createContext, useContext, useState, useEffect } from "react";

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState(null);
//   const [modalData, setModalData] = useState(null);

//   const [filterOptions, setFilterOptions] = useState({
//     categories: [],
//     range: [],
//     locations: [],
//   });

//   const openModal = (type, data = null) => {
//     setModalType(type);
//     setModalData(data);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalType(null);
//     setModalData(null);
//   };

//   // 🔒 Lock body scroll when modal is open
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     // Cleanup on unmount in case component is removed while modal is open
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isModalOpen]);

//   return (
//     <ModalContext.Provider
//       value={{
//         isModalOpen,
//         modalType,
//         modalData,
//         openModal,
//         closeModal,
//         filterOptions,
//         setFilterOptions,
//       }}
//     >
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => useContext(ModalContext);





import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    range: [],
    locations: [],
  });

  // 🔥 New state for status report modal
  const [statusReport, setStatusReport] = useState({
    open: false,
    message: "",
  });

  const showStatusReport = (message) => {
    setStatusReport({ open: true, message });
  };

  const hideStatusReport = () => {
    setStatusReport({ open: false, message: "" });
  };

  const openModal = (type, data = null) => {
    setModalType(type);
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setModalData(null);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalType,
        modalData,
        openModal,
        closeModal,
        filterOptions,
        setFilterOptions,
        statusReport,
        showStatusReport,
        hideStatusReport,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
