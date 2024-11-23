import React from "react";
import { useModal } from "../Cirkles/ModalContext";

const DisplayCategoriesModal = () => {
  const { isModalOpen, modalType, closeModal } = useModal();

  if (!isModalOpen || modalType !== "displayCategories") {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen">
      <div className="bg-white w-11/12 md:w-1/3 p-6 rounded-lg shadow-lg">
        {/* Modal Header */}

        {/* Categories List */}
        <div className="">
          <div
            className="p-4 hover:bg-gray-100 cursor-pointer"
            onClick={closeModal}
          >
            Recommended Cirkles
          </div>
          <div
            className="p-4 border-y hover:bg-gray-100 cursor-pointer"
            onClick={closeModal}
          >
            Most Popular Cirkles
          </div>
          <div
            className="p-4 border-y hover:bg-gray-100 cursor-pointer"
            onClick={closeModal}
          >
            Most Recent Cirkles
          </div>
          <div
            className="p-4 hover:bg-gray-100 cursor-pointer"
            onClick={closeModal}
          >
            Family & Friends Cirkles
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default DisplayCategoriesModal;
