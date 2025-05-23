import React from 'react'
import { useModal } from '../../Component/Cirkles/ModalContext';
import { Link } from 'react-router-dom';
// import { useModal } from "./ModalContext";

function NewCirkle() {

  const { openModal } = useModal();
  return (
    <div>
      <div className="border rounded-lg mx-auto w-[95%] flex flex-col items-center py-1 px-10 lg:hidden">
        <img
          src="/images/newcirkles.svg"
          alt=""
          srcset=""
          className="mx-auto mb-5"
        />

        <h1 className="text-[#141B34] text-[18px] mb-5">
          Build Your Financial Cirkle Today
        </h1>

        <p className="text-center text-[#616161] text-[14px] mb-3">
          Join or create a Cirkle to easily pool funds with trusted groups,
          helping you reach your financial goals faster. Enjoy flexible
          contributions, transparent payouts, and a supportive community.
        </p>

        <button
          className="bg-[#00943F] text-white text-sm py-3  mb-3 w-[100%] rounded-lg"
          onClick={() => openModal("create")}
        >
          Create New Cirkle
        </button>

        <Link to="/discover" className="w-[100%]">
          <button className="text-[#141B34] text-sm py-3  mb-1 w-[100%] rounded-lg border">
            Join a New Cirkle
          </button>
        </Link>
      </div>

      <div className="lg:flex hidden lg:w-[50%] lg:justify-between lg:my-5 ">
        <button
          className="bg-[#00943F] text-white text-sm py-3 w-[45%] rounded-lg"
          onClick={() => openModal("create")}
        >
          Create New Cirkle
        </button>

        <Link to="/discover" className="w-[45%]">
          <button className="text-[#141B34] text-sm py-3  w-[100%] rounded-lg border">
            Join a New Cirkle
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NewCirkle