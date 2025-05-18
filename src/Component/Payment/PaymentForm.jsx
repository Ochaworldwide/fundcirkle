import React, { useContext, useState } from "react";
import axiosInstance from "../../service";
import { UserContext } from "../../contexts/userDetails";
import { copyToClipboard } from "../../utils/string";
import { toast } from "react-toastify";
import { useModal } from "../Cirkles/ModalContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { toastConfig } from "../../constants/toastConfig";

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

const paymentMethodImages = {
  "Bank Transfer": "/images/bank.svg",
  "Paid with Cash": "/images/cash-01.svg",
};

const PaymentForm = ({ handler, cirkle }) => {
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);
  const [paymentDate, setPaymentDate] = useState("");
  const [location, setLocation] = useState("");
  const [witnesses, setWitnesses] = useState("");
  const [paymentTo, setPaymentTo] = useState("admin"); // State for payment destination (admin or receiving member)

  const { user, refetchUser } = useContext(UserContext);

  const { closeModal: close } = useModal();
  const { showStatusReport } = useModal();

  const bank =
    paymentTo == "admin"
      ? cirkle?.last_payment.admin_bank_details
      : cirkle?.last_payment.bank_details;

  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
    closeModal();
  };

  const handleFileChange = (event) => {
    setPaymentProof(event.target.files[0]);
  };

  const handlePaymentToChange = (event) => {
    setPaymentTo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handler();

    const formData = new FormData();
    formData.append("amount", cirkle.contribution_amount);
    formData.append("to_admin", paymentTo === "admin" ? "1" : "0"); // 1 for admin, 0 for receiving member
    formData.append(
      "payment_method",
      paymentMethod === "Bank Transfer" ? "bank" : "cash"
    );
    if (paymentProof) {
      formData.append("proof", paymentProof);
    }

    const meta = {};

    if (paymentMethod === "Paid with Cash") {
      meta.payment_date = paymentDate;
      meta.location = location;
      meta.witnesses = witnesses;
    } else {
      meta.bank_details = bank;
      meta.receiver = cirkle?.last_payment?.receiver;
    }

    formData.append("meta", JSON.stringify(meta));

    // console.log([...formData.entries()]);
    try {
      const response = await axiosInstance.post(
        ROUTES.CIRKLE.SUBMIT_CIRCLE_PAYMENT(cirkle.id),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Payment submitted successfully:", response.data);
      console.log(response.data);
      navigate("/paymentsuccessful");
      close();
    } catch (error) {
      // Handle errors
      console.error("Error submitting payment:", error);
      // toast.error("Failed to submit payment. Please try again.",{ ...toastConfig });
      showStatusReport("Failed to submit payment. Please try again.");
    }
  };

  const copy = (text) => {
    copyToClipboard(text);
    toast.info("copied to clipboard",{ ...toastConfig });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* Amount to Pay Section */}
        <div className="flex justify-center space-x-3 items-center mb-4">
          <span className="text-gray-600 text-sm">Amount to Pay</span>
          <span className="font-semibold text-gray-800 text-lg flex items-center">
            <img src="/images/currency.svg" alt="Currency" className="h-4" />
            {cirkle.contribution_amount?.toLocaleString()}
          </span>
        </div>

        {/* Payment Destination Radio Buttons */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentTo"
              value="admin"
              checked={paymentTo === "admin"}
              onChange={handlePaymentToChange}
              className="form-radio"
            />
            <span className="text-[10.5px] text-gray-600">Pay to Admin</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentTo"
              value="receiving_member"
              checked={paymentTo === "receiving_member"}
              onChange={handlePaymentToChange}
              className="form-radio"
            />
            <span className="text-[10.5px] text-gray-600">
              Pay to Receiving Member
            </span>
          </label>
        </div>

        {/* Selected Payment Method */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Payment Method
          </label>
          <button
            type="button"
            onClick={openModal}
            className="w-full border flex justify-between items-center text-left rounded px-4 py-2 text-sm text-gray-600"
          >
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
                    type="button"
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
                    type="button"
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
        <div>
          {paymentMethod === "Bank Transfer" && (
            <div className="relative">
              {!bank && (
                <div
                  className={`backdrop-blur flex items-center justify-center inset-0 absolute z-[100]`}
                >
                  <p>No bank details</p>
                </div>
              )}
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
                    <img
                      src={cirkle.last_payment.receiver_pic}
                      alt=""
                      className="w-9"
                    />
                    <p>{cirkle.last_payment.receiver}</p>
                  </span>
                  <button
                    className="text-[10.5px] flex space-x-1"
                    onClick={() => copy(bank.account_number)}
                    type="button"
                  >
                    <p>{bank?.account_number}</p>
                    <img src="/images/copy-02.svg" alt="" className="h-4" />
                  </button>
                </div>

                <div className="flex text-[10.5px] justify-between px-3 py-2 border-b">
                  <p>Bank: {bank?.bank_name}</p>
                  <p>Account Type: {bank?.account_type}</p>
                </div>

                <div className="flex justify-between px-3 py-2 text-[10.5px] border-b">
                  <p>IFSC Code:</p>
                  <button
                    className="text-xs flex space-x-1"
                    onClick={() => copy(bank.ifsc_code)}
                    type="button"
                  >
                    <p>{bank?.ifsc_code}</p>
                    <img src="/images/copy-02.svg" alt="" className="h-4" />
                  </button>
                </div>

                <div className="px-3 py-2 text-[10.5px] flex justify-between">
                  <p>
                   Branch: 
                  </p>
                   {bank?.branch_address}
                </div>
              </div>
              {/* Upload Payment Proof */}
              <div className="mt-4">
                <div className="border flex items-center rounded-md p-1 space-x-5">
                  <img src="/images/file-upload.svg" alt="" />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="png,jpeg,pdf,docx"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="text-[10.5px] cursor-pointer"
                  >
                    {paymentProof?.name || "Click here to upload payment proof"}
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-center">
                  PDF, PNG, JPG (Max:{" "}
                  {contributionDetails.uploadPaymentProof.maxFileSize})
                </p>
              </div>
            </div>
          )}

          {paymentMethod === "Paid with Cash" && (
            <div className="border rounded-md text-[10.5px]">
              <div className="flex border-b py-2 px-2 items-center justify-between">
                <p>I made the payment on: </p>
                <div className="border p-1 rounded-md flex items-center space-x-2">
                  <input
                    type="date"
                    required
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                    className="text-[10.5px]"
                  />
                  <img src="/images/calendar-01.svg" alt="" className="h-3" />
                </div>
              </div>

              <div className="flex border-b py-2 px-2 justify-between items-center">
                <p>To: </p>
                <div className="px-1 py-2 w-[70%] flex items-center space-x-1">
                  <img src="/images/person4.svg" alt="" />
                  <p>{cirkle?.last_payment.receiver}</p>
                </div>
              </div>

              <div className="flex border-b py-2 px-2 items-center justify-between">
                <p>Where: </p>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="px-1 py-2 w-[70%] border rounded-md text-[10.5px]"
                  placeholder="Location"
                />
              </div>

              <div className="flex py-2 px-2 items-center justify-between">
                <p>Witness(es): </p>
                <input
                  type="text"
                  value={witnesses}
                  onChange={(e) => setWitnesses(e.target.value)}
                  className="px-1 py-2 w-[70%] border rounded-md text-[10.5px]"
                  placeholder="Amit Kumar"
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            disabled={!bank}
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded "
          >
            Submit Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
