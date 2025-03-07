import React, { useEffect, useState } from "react";
import { useModal } from "../Cirkles/ModalContext";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import MultiSelect from "../Common/Multiselect";


const CirkleCategoryModal = ({closeModal, name, updateSelection}) => {

  const [categories, setCategories] = useState(null);
  const [ selectedCategories , setSelection ] = useState([]);

const fetchData = async () => {
  try {
    const response = await axiosInstance.get(
      ROUTES.CIRKLE.GET_CIRKLE_CATEGORIES
    );
    // console.log(response.data);
    setCategories(response.data.data);
    // Handle your data here if needed (e.g., setCategories(response.data.data))
  } catch (error) {
    console.error(error);
    if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred. Please try again.");
    }
  } finally {
    // Uncomment or implement if needed
    // setLoading(false);
  }
};


useEffect(() => {
    fetchData();
  },[]);


  const handleSave = () => {
    updateSelection(name, selectedCategories);
    closeModal();
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen">
      <div className="bg-white w-11/12 md:w-1/3 py-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 w-[90%] mx-auto">
          <h2 className="text-xl font-semibold">Select Cirkle Category</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4 text-sm">

          <MultiSelect onSelectionChange={(selection) => setSelection(selection)} options={categories ?? []} />
          {/* buttons */}
          <div className="flex  ml-auto w-[60%] justify-between px-1">
            <button
              className="bg-[#00943F] py-2 px-4 rounded-md text-white"
              onClick={handleSave}
            >
              Set Category
            </button>

            <button
              className=" border py-2 px-4 rounded-md"
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

export default CirkleCategoryModal;
