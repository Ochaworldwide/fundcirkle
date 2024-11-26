import React, { useState } from "react";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer"); // Default selected payment method
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Map of payment methods to images
  const paymentMethodImages = {
    "Bank Transfer": "/images/bank.svg",
    "Paid with Cash": "/images/cash-01.svg",
  };

  const contributionDetails = {
    accountMessage: "Please make your contribution to this bank account:",
    copyText: "copy",
    accountHolder: {
      name: "Bhaavik Arhaan",
      accountNumber: "123456789012",
    },
    bankDetails: {
      bankName: "State Bank of India (SBI)",
      accountType: "Saving",
    },
    ifscCode: {
      code: "SBIN0001234",
      copyText: "copy",
    },
    branch: "Mumbai, Maharashtra",
    uploadPaymentProof: {
      label: "Upload Payment Proof",
      acceptedFormats: [".pdf", ".png", ".jpg", ".jpeg"],
      maxFileSize: "4MB",
    },
  };


  // Handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const selectPaymentMethod = (method) => {
    setPaymentMethod(method); // Update selected payment method
    closeModal(); // Close the modal
  };

  return (
    <div>
      {/* Selected Payment Method */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Payment Method
        </label>
        <button
          onClick={openModal}
          className="w-full border flex justify-between items-center text-left rounded px-4 py-2 text-sm text-gray-600"
        >
          {/* Display selected payment method with its image */}
          <div className="flex items-center space-x-2">
            <img
              src={paymentMethodImages[paymentMethod]}
              alt={paymentMethod}
              className="w-6 h-6"
            />
            <span className="text-[10.5px]">{paymentMethod}</span>
          </div>
          <img src="/images/arrow-down-01.svg" alt="Arrow Down" />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-md">
            <ul className="space-y-4">
              <li>
                <button
                  className="w-full text-left px-4 py-2 border rounded flex items-center space-x-2 text-sm text-gray-600 hover:bg-gray-100"
                  onClick={() => selectPaymentMethod("Bank Transfer")}
                >
                  <img
                    src="/images/bank.svg"
                    alt="Bank Transfer Icon"
                    className="w-6 h-6"
                  />
                  <span>Bank Transfer</span>
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 border rounded flex items-center space-x-2 text-sm text-gray-600 hover:bg-gray-100"
                  onClick={() => selectPaymentMethod("Paid with Cash")}
                >
                  <img
                    src="/images/cash-01.svg"
                    alt="Cash Payment Icon"
                    className="w-6 h-6"
                  />
                  <span>Paid with Cash</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Conditional Rendering of Payment Details */}
      <div className="">
        {paymentMethod === "Bank Transfer" && (

          <div>
            <div className="border rounded-md">
              <div className="flex justify-between border-b px-3 py-2 items-center">
                <p className="text-[10.5px] text-gray-600 w-[70%]">
                  {contributionDetails.accountMessage}
                </p>

                <div className="flex items-center space-x-3 text-[10.5px]">
                  <p>{contributionDetails.copyText}</p>

                  <img src="/images/copy-02.svg" alt="" className="h-4" />
                </div>
              </div>

              <div className="flex justify-between items-center mb-2 border-b px-3 py-2">
                <span className="font-semibold text-sm text-gray-800 flex items-center space-x-2">
                  <img src="/images/person4.svg" alt="" />
                  <p>{contributionDetails.accountHolder.name}</p>
                </span>
                <button className="text-[10.5px] flex space-x-1">
                  <p>{contributionDetails.accountHolder.accountNumber}</p>
                  <img src="/images/copy-02.svg" alt="" className="h-4" />
                </button>
              </div>

              <div className="flex text-[10.5px] justify-between px-3 py-2 border-b">
                <p>Bank: {contributionDetails.bankDetails.bankName}</p>
                <p>
                  Account Type: {contributionDetails.bankDetails.accountType}
                </p>
              </div>

              <div className="flex justify-between px-3 py-2 text-[10.5px] border-b">
                <p>IFSC Code:</p>
                <button className="text-xs flex space-x-1">
                  <p>{contributionDetails.ifscCode.code}</p>
                  <img src="/images/copy-02.svg" alt="" className="h-4" />
                </button>
              </div>

              <div className="px-3 py-2 text-[10.5px]">
                Branch: {contributionDetails.branch}
              </div>
            </div>
            {/* Upload Payment Proof */}
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                {contributionDetails.uploadPaymentProof.label}
              </label>
              <input
                type="file"
                className="block w-full text-sm text-gray-600 border border-gray-300 rounded cursor-pointer"
                accept={contributionDetails.uploadPaymentProof.acceptedFormats.join(
                  ", "
                )}
              />
              <p className="text-xs text-gray-500 mt-1">
                PDF, PNG, JPG (Max:{" "}
                {contributionDetails.uploadPaymentProof.maxFileSize})
              </p>
            </div>
          </div>
        )}

        {paymentMethod === "Paid with Cash" && (
          <div className="border p-2 rounded-md">

            <div className="flex border-b">
                <p>I made the payment on </p>
            </div>





            <p className="text-sm text-gray-600 mb-2">
              Please deliver your cash payment to the following address:
            </p>
            <div className="text-sm text-gray-600">
              <p>
                <span className="font-semibold">Address:</span> 123 Sunshine
                Street, Mumbai, Maharashtra
              </p>
              <p>
                <span className="font-semibold">Recipient:</span> Bhaavik Arhaan
              </p>
              <p>
                <span className="font-semibold">Contact:</span> +91 9876543210
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
