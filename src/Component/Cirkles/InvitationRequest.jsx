import React, { useEffect, useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import Toast from "../../Component/Toast/Toast";
import { toast } from "react-toastify";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { PulseLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";
import logo from "/images/Logo.svg";
import { useModal } from "../../Component/Cirkles/ModalContext";

function InvitationRequest() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const { showStatusReport } = useModal();

  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/cirkles/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // empty dependency array = runs once on mount

  const handleAccept = async () => {
    try {
      const response = await axiosInstance.post(`/cirkles/${id}/join`);
    } catch (error) {
    //   console.error("Error making POST request:", error);
      showStatusReport("Error making POST request:", error);
    }
  };



  console.log(data);

  return (
    <div className="">
      {/* <NavBar backLink="/sign-in" /> */}


      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
        <img src={logo} alt="" srcset="" />
      </div>

      <div className="mx-auto w-[90%] flex flex-col lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden  lg:justify-center">
        <div className="lg:px-10 lg:my-5 lg:w-[60%] lg:min-h-[500px]">
          <h1 className="font-bold text-[22px] mb-10 poppins text-center">
            Invitation Request
          </h1>

          <h1 className="text-center mb-4 font-semibold">Hello,</h1>
          <p className="text-base mb-10 leading-relaxed text-center">
            You have been invited to join {data?.name} by{" "}
            {data?.owner?.first_name} cirkle. If you would like to accept this
            invitation, click on the accept button below.
          </p>

          <div className="w-[90%] mx-auto flex justify-center">
            <button className="bg-[#00943F] font-bold text-white rounded-lg w-[80%] py-3" onClick={() => {handleAccept()}}>
              Accept
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default InvitationRequest;
