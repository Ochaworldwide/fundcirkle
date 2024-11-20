import React from 'react'
import { useModal } from '../../Component/Cirkles/ModalContext';
// import { useModal } from "./ModalContext";

function NewCirkle() {

  const { openModal } = useModal();
  return (
    <div>
      <div className="border rounded-lg mx-auto w-[95%] flex flex-col items-center py-1 px-10">
        <img
          src="/images/newcirkles.svg"
          alt=""
          srcset=""
          className="mx-auto mb-5"
        />

        <h1 className="text-[#141B34] text-[18px] mb-5">
          Build Your Financial Circle Today
        </h1>

        <p className="text-center text-[#616161] text-[12px] mb-3">
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

        <button className="text-[#141B34] text-sm py-3  mb-1 w-[100%] rounded-lg border">
          Join a New Cirkle
        </button>
      </div>
    </div>
  );
}

export default NewCirkle