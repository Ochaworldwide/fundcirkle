// import React, { createContext, useContext, useState } from "react";

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState(null); // To track which modal is open

//   const openModal = (type) => {
//     setModalType(type);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalType(null);
//   };

//   return (
//     <ModalContext.Provider
//       value={{ isModalOpen, modalType, openModal, closeModal }}
//     >
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => useContext(ModalContext);





import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // To track which modal is open
  const [modalData, setModalData] = useState(null); // To hold modal-specific data

  const openModal = (type, data = null) => {
    setModalType(type);
    setModalData(data); // Store the data for this modal instance
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setModalData(null); // Reset the data when the modal is closed
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, modalData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
