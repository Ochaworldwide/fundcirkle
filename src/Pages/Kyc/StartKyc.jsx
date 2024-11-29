import React from 'react'
import { Link } from 'react-router-dom';

const StartKyc = () => {
  return (
    <div className="w-full p-6">
      <div className="mb-10 flex items-center">
        <Link to="/home">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>
      </div>

      <div className='px-3'>
        <h1 className='text-[22px] font-[600] mb-10'>Verify Your Identity</h1>

        <p className='text-[14px] font-[400] mb-5'>
          To ensure a secure experience, please complete your KYC verification.
        </p>

        <div className='mb-10 w-full'>
          <img src="/images/security.svg" alt="" srcset="" className='object-cover w-full' />
        </div>

        <p className="mb-10 text-[10.5px]">
          KYC verification is required to join or create Cirkles and securely
          handle transactions. This process only takes a few minutes.
        </p>

        <Link to="/personalinfo">
          <button className="text-white bg-[#00943F] px-10 py-5 w-full rounded-xl ">
            Start Verification
          </button>
        </Link>

        
      </div>
    </div>
  );
};

export default StartKyc;