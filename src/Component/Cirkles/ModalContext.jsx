// import React, { createContext, useContext, useState } from "react";

// const ModalContext = createContext();

// export const useModal = () => useContext(ModalContext);

// export const ModalProvider = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };



import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // To track which modal is open

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
