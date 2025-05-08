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

function Swapping() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { showStatusReport } = useModal();

  const { hash } = useParams();

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get(`/cirkles/${id}`);
//         setData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // empty dependency array = runs once on mount

  const handleAccept = async () => {
        payload = {
          swap_hash: hash,
        };
        setLoading(true);
    try {
      const response = await axiosInstance.post(`/payment/swap/accept`, { payload });
          if (response.status >= 200 && response.status < 300) {
            navigate("/home"); // Redirect to home page
          }
    } catch (error) {
      //   console.error("Error making POST request:", error);59
      showStatusReport("Error making POST request:", error);
    }
    finally {
      setLoading(false);
    }
  };

  const handleDecline = async () => {
    payload ={
        swap_hash : hash
    }
    try {
      const response = await axiosInstance.post(`/payment/swap/decline`, {
        payload,
      });
      if (response.status >= 200 && response.status < 300) {
        navigate("/home"); // Redirect to home page
      }
    } catch (error) {
      //   console.error("Error making POST request:", error);59
      showStatusReport("Error making POST request:", error);
    } finally {
      setLoading(false);
    }
  };




//   console.log(data);

  return (
    <div className="">
      {/* <NavBar backLink="/sign-in" /> */}

      <div className=" pb-10 mt-10">
        <img src={logo} alt="" srcset="" className="mx-auto" />
      </div>

      <div className="mx-auto w-[90%] flex flex-col lg:flex-row  lg:items-center lg:w-[80%] lg:bg-white lg:rounded-2xl lg:overflow-hidden  lg:justify-center">
        <div className="lg:px-10 lg:my-5 lg:w-[60%] lg:min-h-[500px]">
          <h1 className="font-bold text-xl mb-10 poppins text-center">
            Payment Swapping Request
          </h1>

          <h1 className="text-center mb-4 font-semibold">Hello,</h1>
          <p className="text-base mb-10 leading-relaxed text-center">
            You are permitted to accept or decline the cirkle payment swapping
            request below.
          </p>

          <div className="w-[90%] mx-auto flex justify-between">
            <button
              className="bg-[#00943F] font-bold text-white rounded-lg w-[45%] py-3"
              onClick={() => {
                handleAccept();
              }}
              disabled={loading}
            >
              {loading ? <PulseLoader size={12} color="white" /> : "Accept"}
            </button>

            <button
              className="bg-[#00943F] font-bold text-white rounded-lg w-[45%] py-3"
              onClick={() => {
                handleDecline();
              }}
              disabled={loading}
            >
              {loading ? <PulseLoader size={12} color="white" /> : "Decline"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swapping;
