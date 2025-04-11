import React from "react";
import { Link } from "react-router-dom";

const UploadDocumentDesktop = () => {
  return (
    <div className="w-full p-6">
      <div className="mb-10 flex items-center">
        <Link to="/personalinfodesktop">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>
      </div>

      <div className="">
        <h1 className="text-base mb-10 w-[70%]">
          To ensure a secure experience, please complete your KYC verification.
          KYC verification is required to join or create Cirkles and securely
          handle transactions. This process only takes a few minutes.
        </h1>
        <h1 className="text-[22px] font-[600] mb-3">Upload your documents</h1>

        <p className="mb-10 text-base">
          To complete your KYC verification your are required to upload a proof
          of identity and proof of address documentation.
        </p>

        <div className="flex justify-between w-[95%] mb-5">
          <Link to="/identityproofdesktop" className="w-[45%]">
            <div className="flex border bg-[#FBC8CE1A] p-3 mb-5 w-[100%] rounded-lg border-[#00000066]">
              <img src="/images/identity-card.svg" alt="" srcset="" />

              <div className="w-[70%] font-[400] mx-auto p-3">
                <h1 className="text-xl mb-2">Proof of Identity</h1>
                <p className="text-sm text-[#141B3480]">
                  Upload a Passport, Addhaar Card, Pan Card, Driving License,
                  Voter’s ...
                </p>
              </div>

              <img
                src="/images/arrow-right.svg"
                alt=""
                srcset=""
                className="ml-auto"
              />
            </div>
          </Link>

          <Link to="/addressproofdesktop" className="w-[45%]">
            <div className="flex border bg-[#FBC8CE1A] p-3  w-[100%] rounded-lg mb-5 border-[#00000066]">
              <img src="/images/building-02.svg" alt="" srcset="" />

              <div className="w-[70%] font-[400] mx-auto p-3">
                <h1 className="text-xl mb-2">Proof of Address</h1>
                <p className="text-sm text-[#141B3480]">
                  Upload a Utility bill, Bank Statement, Registered Lease
                  Agreement....
                </p>
              </div>

              <img
                src="/images/arrow-right.svg"
                alt=""
                srcset=""
                className="ml-auto"
              />
            </div>
          </Link>
        </div>

        <div className="flex  p-3  w-[100%] rounded-lg space-x-3 items-center">
          <img src="/images/security-validation.svg" alt="" srcset="" />

          <div className="w-[80%] font-[400]">
            <p className="text-sm text-[#141B3480]">
              We Process your information in accordance with our{" "}
              <span className="text-[#00943F]">privacy policy</span> .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentDesktop;
