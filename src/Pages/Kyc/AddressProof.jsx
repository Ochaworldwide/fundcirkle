import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useKycState } from "../../hooks/useKycState";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";
import { useModal } from "../../Component/Cirkles/ModalContext";

const AddressProof = () => {
  const [selectedProof, setSelectedProof] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { showStatusReport } = useModal();

  const { kycState, setKycState } = useKycState();

  const proofOptions = [
    { label: "Electric Bill", value: "electric_bill" },
    { label: "Gas Bill", value: "gas_bill" },
    { label: "Bank Account Statement", value: "bank_account_statement" },
    { label: "Landline Bill", value: "landline_bill" },
    { label: "Life Insurance Policy", value: "life_insurance_policy" },
    
  ];


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedProof) {
      // toast("Please select an address proof type.",{ ...toastConfig });
      showStatusReport("Please select an address proof type.");

      return;
    }

    if (!file) {
      // toast("Please upload a file.",{ ...toastConfig });
      showStatusReport("Please upload a file.");
      return;
    }

    kycState.append("address_proof_type", selectedProof);
    kycState.append("address_proof", file);

    console.log("Form Data Submitted", Object.fromEntries(kycState.entries()));

    

    try {
      const response = await axiosInstance.post(ROUTES.ACCOUNT.UPDATE_KYC, kycState,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate("/thanks");
      // toast.success(response.data.message,{ ...toastConfig })
      showStatusReport(response.data.message);
    } catch (error) {
      // toast.error(error.response.data.message,{ ...toastConfig });
      showStatusReport(error.response.data.message);
    }


  };

  return (
    <div className="w-full p-6">
      <div className="mb-10 flex items-center">
        <Link to="/uploaddocument">
          <img src="/images/arrowback.svg" alt="Back" />
        </Link>
      </div>

      <div>
        <div className="mb-10 w-full">
          <img
            src="/images/proof-of-address.svg"
            alt="Proof of Address"
            className="object-cover w-full"
          />
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="border bg-[#FBC8CE1A] p-5 w-full border-[#00000066] rounded-lg mb-5">
            <p className="mb-5 text-[18px]">Select Address Proof Type:</p>

            {proofOptions.map((option, index) => (
              <div className="flex items-center mb-5" key={index}>
                <input
                  type="radio"
                  name="selectedProof"
                  id={`proof-${index}`}
                  value={option.value}
                  checked={selectedProof === option.value}
                  onChange={(e) => setSelectedProof(e.target.value)}
                />
                <label htmlFor={`proof-${index}`} className="text-[12px] ml-5">
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          <h1 className="text-[22px] font-[600] mb-3">Proof of Address</h1>
          <p className="mb-10 text-[14px]">
            We need to see your name and address clearly printed on an official
            document.
          </p>

          <div className="border border-dashed border-[#141B3480] flex py-6 px-10 space-x-10 rounded-md mb-5">
            <img src="/images/file-upload.svg" alt="Upload File" />
            <div className="w-[60%]">
              <label className="text-[14px] mb-1">Upload File</label>
              <p className="text-[12px] text-[#141B3480]">
                Maximum file size: 5 MB
              </p>
              <p className="text-[12px] text-[#141B3480]">
                Supported Format: JPEG, PNG, or PDF
              </p>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="mt-2 text-[12px]"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#00943F] text-[14px] rounded-md w-full text-white font-extrabold p-5"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressProof;
