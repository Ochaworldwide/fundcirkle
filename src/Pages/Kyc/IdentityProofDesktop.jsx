
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useKycState } from "../../hooks/useKycState";

const IdentityProofDesktop = () => {
  const [selectedID, setSelectedID] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { kycState, setKycState } = useKycState();

  const proofOptions = [
    { label: "International Passport", value: "international_passport" },
    { label: "Aadhaar Card", value: "aadhaar_card" },
    { label: "Driving License", value: "driving_license" },
    { label: "Voter’s ID Card", value: "voters_id_card" },
    { label: "Pan Card", value: "pan_card" },
    { label: "NRGEA Job Card", value: "nrgea_job_card" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedID) {
      alert("Please select an ID type.");
      return;
    }

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    // Debugging: Log the file to ensure it's captured correctly
    console.log("File to be uploaded:", file);

    // Append the selected ID and file to the FormData object
    kycState.append("identity_proof_type", selectedID);
    kycState.append("identity_proof", file);

    // Debugging: Log the FormData entries
    for (let pair of kycState.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Navigate to the next step
    navigate("/addressproofdesktop");
  };

  return (
    <div className="w-full p-6">
      <div className="mb-10 flex items-center">
        <Link to="/uploaddocumentdesktop">
          <img src="/images/arrowback.svg" alt="Back" />
        </Link>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="w-full">
          <h1 className="text-[22px] font-[600] mb-3">Proof of Identity</h1>
          <p className="mb-10 text-[14px]">
            We need to see your name and ID number clearly printed on an
            official document.
          </p>

          <div className="border bg-[#FBC8CE1A] p-5 w-full rounded-lg mb-10 border-[#00000066]">
            <p className="mb-5 text-[18px]">Select ID Type:</p>

            <div className="grid grid-cols-2 gap-5">
              {proofOptions.map((idType, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    type="radio"
                    name="selectedID"
                    id={`id-${index}`}
                    value={idType.value}
                    checked={selectedID === idType.value}
                    onChange={(e) => setSelectedID(e.target.value)}
                  />
                  <label htmlFor={`id-${index}`} className="text-sm ml-5">
                    {idType.label}
                  </label>
                  {idType.value === "international_passport" && (
                    <p className="rounded-md bg-white px-1 py-2 text-sm ml-auto">
                      Recommended
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-dashed border-[#141B3480] flex py-6 px-10 space-x-10 rounded-md mb-10">
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
            className="bg-[#00943F] text-[14px] rounded-md w-full text-white font-extrabold p-5 cursor-pointer"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default IdentityProofDesktop;
