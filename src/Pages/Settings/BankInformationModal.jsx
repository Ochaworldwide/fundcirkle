import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "../../Component/Cirkles/ModalContext";
import { ROUTES } from "../../constants/routes";
import axiosInstance from "../../service";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";

const BankInformationModal = () => {
  const [accountDetails, setAccountDetails] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);
  const { isModalOpen, modalType, closeModal, openModal } = useModal();

  useEffect(() => {
    if (!isModalOpen || modalType !== "Bank Information") return;

    const fetchAccountData = async () => {
      try {
        const response = await axiosInstance.get(
          ROUTES.ACCOUNT.GET_USER_ACCOUNT
        );
        setAccountDetails(response.data.data.bank_details); // Set bank_details from API response
        console.log(response.data.data.bank_details);
      } catch (err) {
        toast.error(err.response?.data?.message || "An error occurred", {
          ...toastConfig
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAccountData();
  }, [isModalOpen, modalType]); // Only trigger when modal is open and the modalType is "Bank Information"

  if (!isModalOpen || modalType !== "Bank Information") return null;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", { ...toastConfig });
  };

  // If accountDetails is null or undefined, show a message
  if (!accountDetails) {
    return (
      <div className="fixed inset-0 z-[50] flex items-center h-screen justify-center bg-black bg-opacity-50">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white shadow-lg mt-4 rounded-lg mx-auto w-[90%] z-50"
        >
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-5 space-y-4 border">
            <div className="flex space-x-2 ">
              <button
                className="flex items-center space-x-2 px-3 py-2 text-[10.5px] ml-auto font-medium text-gray-800 bg-gray-100 border rounded-lg hover:bg-gray-200"
                onClick={() => openModal("Edit Bank Information")}
              >
                <span>Edit</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9499 3.07006L11.6099 2.41007C12.1567 1.86331 13.0431 1.86331 13.5899 2.41007C14.1366 2.95683 14.1366 3.84329 13.5899 4.39005L12.9299 5.05004M10.9499 3.07006L6.51031 7.5096C6.17197 7.848 5.93195 8.27187 5.8159 8.73607L5.33325 10.6667L7.26385 10.184C7.72805 10.068 8.15192 9.82793 8.49032 9.4896L12.9299 5.05004M10.9499 3.07006L12.9299 5.05004"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6666 8.99992C12.6666 11.1916 12.6666 12.2874 12.0613 13.025C11.9505 13.16 11.8267 13.2838 11.6917 13.3946C10.9541 13.9999 9.85827 13.9999 7.6666 13.9999H7.33333C4.81917 13.9999 3.56211 13.9999 2.78106 13.2189C2.00002 12.4379 2 11.1807 2 8.66659V8.33325C2 6.1416 2 5.04578 2.60529 4.30821C2.71611 4.17319 2.83993 4.04937 2.97496 3.93855C3.71253 3.33325 4.80835 3.33325 7 3.33325"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <h2 className="text-[14px] font-medium text-center text-gray-800">
              No Bank Details Found
            </h2>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[50] flex items-center h-screen justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white shadow-lg mt-4 rounded-lg mx-auto w-[90%] z-50"
      >
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-5 space-y-4 border">
          <div className="flex justify-between items-center">
            <h2
              className="text-[14px] font-medium text-gray-800"
              onClick={closeModal}
            >
              Your Bank Details
            </h2>

            <div className="flex space-x-2">
              <button
                className="flex items-center space-x-2 px-3 py-2 text-[10.5px] font-medium text-gray-800 bg-gray-100 border rounded-lg hover:bg-gray-200"
                onClick={() => openModal("Edit Bank Information")}
              >
                <span>Edit</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9499 3.07006L11.6099 2.41007C12.1567 1.86331 13.0431 1.86331 13.5899 2.41007C14.1366 2.95683 14.1366 3.84329 13.5899 4.39005L12.9299 5.05004M10.9499 3.07006L6.51031 7.5096C6.17197 7.848 5.93195 8.27187 5.8159 8.73607L5.33325 10.6667L7.26385 10.184C7.72805 10.068 8.15192 9.82793 8.49032 9.4896L12.9299 5.05004M10.9499 3.07006L12.9299 5.05004"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6666 8.99992C12.6666 11.1916 12.6666 12.2874 12.0613 13.025C11.9505 13.16 11.8267 13.2838 11.6917 13.3946C10.9541 13.9999 9.85827 13.9999 7.6666 13.9999H7.33333C4.81917 13.9999 3.56211 13.9999 2.78106 13.2189C2.00002 12.4379 2 11.1807 2 8.66659V8.33325C2 6.1416 2 5.04578 2.60529 4.30821C2.71611 4.17319 2.83993 4.04937 2.97496 3.93855C3.71253 3.33325 4.80835 3.33325 7 3.33325"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  copyToClipboard(
                    `${accountDetails.bank_name}\n${accountDetails.account_number}\n${accountDetails.account_type}\n${accountDetails.ifsc_code}\n${accountDetails.branch_address}`
                  )
                }
                className="flex items-center space-x-2 px-3 py-2 text-[10.5px] font-medium text-gray-800 bg-gray-100 border rounded-lg hover:bg-gray-200"
              >
                <span>Copy All</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3092 5.98798C11.3076 4.02121 11.2778 3.00248 10.7052 2.30494C10.5947 2.17022 10.4712 2.04671 10.3365 1.93616C9.60057 1.33228 8.5073 1.33228 6.32062 1.33228C4.13396 1.33228 3.04064 1.33228 2.30476 1.93616C2.17004 2.0467 2.04651 2.17022 1.93595 2.30494C1.33203 3.04077 1.33203 4.13402 1.33203 6.32052C1.33203 8.50705 1.33203 9.60025 1.93595 10.3361C2.0465 10.4708 2.17004 10.5943 2.30476 10.7048C3.00234 11.2774 4.02115 11.3071 5.98804 11.3087"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.35224 6.01645L11.3294 5.98804M9.34291 14.6676L11.32 14.6392M14.6478 9.34815L14.6291 11.3213M6.00693 9.35722L5.98828 11.3303M7.65824 6.01645C7.10304 6.11589 6.21191 6.21817 6.00693 7.36595M12.9964 14.6392C13.5531 14.5483 14.4457 14.4597 14.6684 13.3152M12.9964 6.01645C13.5516 6.11589 14.4428 6.21817 14.6478 7.36595M7.66671 14.6383C7.11151 14.5392 6.2203 14.4374 6.01469 13.2897"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <hr />

          <div className="space-y-3">
            {Object.entries(accountDetails).map(([key, value], index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-800">
                    {value}
                  </span>
                  {key !== "branch_address" &&
                    key !== "account_type" &&
                    key !== "bank_name" && (
                      <button
                        onClick={() => copyToClipboard(value)}
                        className="ml-2 p-1 text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.3092 5.98798C11.3076 4.02121 11.2778 3.00248 10.7052 2.30494C10.5947 2.17022 10.4712 2.04671 10.3365 1.93616C9.60057 1.33228 8.5073 1.33228 6.32062 1.33228C4.13396 1.33228 3.04064 1.33228 2.30476 1.93616C2.17004 2.0467 2.04651 2.17022 1.93595 2.30494C1.33203 3.04077 1.33203 4.13402 1.33203 6.32052C1.33203 8.50705 1.33203 9.60025 1.93595 10.3361C2.0465 10.4708 2.17004 10.5943 2.30476 10.7048C3.00234 11.2774 4.02115 11.3071 5.98804 11.3087"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.35224 6.01645L11.3294 5.98804M9.34291 14.6676L11.32 14.6392M14.6478 9.34815L14.6291 11.3213M6.00693 9.35722L5.98828 11.3303M7.65824 6.01645C7.10304 6.11589 6.21191 6.21817 6.00693 7.36595M12.9964 14.6392C13.5531 14.5483 14.4457 14.4597 14.6684 13.3152M12.9964 6.01645C13.5516 6.11589 14.4428 6.21817 14.6478 7.36595M7.66671 14.6383C7.11151 14.5392 6.2203 14.4374 6.01469 13.2897"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BankInformationModal;


