import React, { useEffect, useState } from "react";
import NavBar from "../../Component/Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";
import Toast from "../../Component/Toast/Toast";
import { toast } from "react-toastify";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { PulseLoader } from "react-spinners";
import { toastConfig } from "../../constants/toastConfig";
import logo from "/images/Logo.svg";
import { useModal } from "../../Component/Cirkles/ModalContext";

function CirkleInvitation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { showStatusReport } = useModal();
    const [acceptLoading, setAcceptLoading] = useState(false);
    const [declineLoading, setDeclineLoading] = useState(false);

  const { token } = useParams();

  const handleAccept = async () => {
        const payload = {
          token: token,
        };
        setAcceptLoading(true);
    try {
      const response = await axiosInstance.post(`/invite/accept`, { payload });
          if (response.status >= 200 && response.status < 300) {
            navigate("/home"); // Redirect to home page
          }
    } catch (error) {
      //   console.error("Error making POST request:", error);59
      showStatusReport("Error making POST request:", error);
    }
    finally {
      setAcceptLoading(false);
    }
  };

  const handleDecline = async () => {
    const payload ={
        token : token
    }
    setDeclineLoading(true);
    try {
      const response = await axiosInstance.post(`/invite/decline`, {
        payload,
      });
      if (response.status >= 200 && response.status < 300) {
        navigate("/home"); // Redirect to home page
      }
    } catch (error) {
      //   console.error("Error making POST request:", error);59
      showStatusReport("Error making POST request:", error);
    } finally {
      setDeclineLoading(false);
    }
  };

  return (
    <div className="">

      <div className=" pb-10 mt-10">
        <img src={logo} alt="" srcset="" className="mx-auto" />
      </div>

      <div className="mx-auto w-[90%] flex flex-col lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden  lg:justify-center">
        <div className="lg:px-10 lg:my-5 lg:w-[60%] lg:min-h-[500px]">
          <h1 className="font-semibold text-xl mb-10 poppins text-center">
            Cirkle Invitation
          </h1>

          <h1 className="text-center mb-4 font-semibold">Hello,</h1>
          <p className="text-base mb-10 leading-relaxed text-center">
            Click on the button below to accept the invitation.
          </p>

          <div className="w-[90%] mx-auto flex justify-between">
            <button
              className="bg-[#00943F] font-bold text-white rounded-lg w-[45%] py-3"
              onClick={() => {
                handleAccept();
              }}
              disabled={acceptLoading || declineLoading}
            >
              {acceptLoading ? (
                <PulseLoader size={12} color="white" />
              ) : (
                "Accept"
              )}
            </button>

            <button
              className="bg-[#00943F] font-bold text-white rounded-lg w-[45%] py-3"
              onClick={() => {
                handleDecline();
              }}
              disabled={acceptLoading || declineLoading}
            >
              {declineLoading ? (
                <PulseLoader size={12} color="white" />
              ) : (
                "Decline"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CirkleInvitation;
