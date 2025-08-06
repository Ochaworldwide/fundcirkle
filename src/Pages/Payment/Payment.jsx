import { div } from "framer-motion/client";
import React, { useContext, useEffect, useState } from "react";
import PaymentOverview from "../../Component/Payment/PaymentOverview";
import ManagePaymentCirkle from "../../Component/Payment/ManagePaymentCirkle";
import PaymentTable from "../../Component/Payment/PaymentTable";
import NavigationBar from "../../Component/BottomNav/NavigationBar";
import axiosInstance from "../../service";
import { toast } from "react-toastify";
import { ROUTES } from "../../constants/routes";
import { toastConfig } from "../../constants/toastConfig";
import { UserContext } from "../../contexts/userDetails";
import { useNotification } from "../../contexts/notificationContext";
import { FaCircleUser } from "react-icons/fa6";
import NotificationBox from "../../Component/Cirkles/NotificationBox";
import { useModal } from "../../Component/Cirkles/ModalContext";

const Payment = () => {
  const [due, setDue] = useState({});
  const [validations, setValidations] = useState({});
  const [receive, setReceive] = useState({});
  const [loading, setLoading] = useState(true);
  const { user, refetchUser } = useContext(UserContext);
  const { notifications, clearNotifications } = useNotification();
  const [showNotification, setShowNotification] = useState(false);
  const { showStatusReport } = useModal();

  const NotifyNum = notifications.length;

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetch payment overview
        const overview = await axiosInstance.get("/payment/overview");
        setDue(overview.data.total_due);
        setValidations(overview.data.total_validations);
        setReceive(overview.data.to_receive);
        // Fetch account data
        const accountResponse = await axiosInstance.get(
          ROUTES.ACCOUNT.GET_USER_ACCOUNT
        );

        // Fetch user cirkles
        const accountResponse2 = await axiosInstance.get(
          ROUTES.CIRKLE.GET_USER_CIRKLES
        );
        accountResponse;
        console.log(accountResponse.data);
        // setAccountData();
      } catch (error) {
        // toast.error("Error fetching initial data:", error, { ...toastConfig });
        showStatusReport("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []); // Ensure modalType is also included in the dependency array

  return (
    <div className="mb-20">
      {/* heading */}
      <div className="py-5 border-b text-[22px] font-[600] mb-5 sticky top-0 bg-white z-10 lg:hidden">
        <h1 className="text-center">Payment</h1>
      </div>

      <div className="w-[100%] mx-auto  items-center mb-5  h-[100px] hidden lg:flex sticky top-0 z-10 bg-white">
        <div className="w-[40%] flex items-center ">
          <div className="w-[100%] flex py-5 sticky top-0 bg-white lg:relative ">
            <p className="text-[22px] font-[600]">Payment</p>
          </div>
        </div>

        <div className="ml-auto flex space-x-6 items-center">
          <div className="border border-[#00000066] p-2 rounded-full relative ml-auto">
            {NotifyNum === 0 ? (
              " "
            ) : (
              <div className=" absolute top-0 right-0 border border-[#00000066] text-[8px] font-bold flex justify-center text-white   h-[12px] w-[12px] bg-[#00943F] rounded-full">
                {""}

                {NotifyNum}
              </div>
            )}

            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-full"
              onClick={() => setShowNotification(true)}
            >
              <path
                d="M12 6.94V10.27"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M12.0199 2.5C8.3399 2.5 5.3599 5.48 5.3599 9.16V11.26C5.3599 11.94 5.0799 12.96 4.7299 13.54L3.4599 15.66C2.6799 16.97 3.2199 18.43 4.6599 18.91C9.4399 20.5 14.6099 20.5 19.3899 18.91C20.7399 18.46 21.3199 16.88 20.5899 15.66L19.3199 13.54C18.9699 12.96 18.6899 11.93 18.6899 11.26V9.16C18.6799 5.5 15.6799 2.5 12.0199 2.5Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M15.3299 19.32C15.3299 21.15 13.8299 22.65 11.9999 22.65C11.0899 22.65 10.2499 22.27 9.64992 21.67C9.04992 21.07 8.66992 20.23 8.66992 19.32"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>

          <div>
            {user?.profile_pic ? (
              <img
                src={`${user?.profile_pic}?t=${Math.random()}`}
                alt="Profile"
                className="w-14 h-14 rounded-full"
              />
            ) : (
              <FaCircleUser className=" text-gray-500 w-full h-full" />
            )}
          </div>
        </div>

        {showNotification && (
          <NotificationBox setShowNotification={setShowNotification} />
        )}
      </div>

      {/* Payment Overview */}
      <div className="w-[100%] px-5 lg:w-[80%] lg:mb-5">
        <h1 className="   text-[18px] font-bold">Payment Overview</h1>
        <PaymentOverview
          due={due}
          validations={validations}
          receive={receive}
          loading={loading}
        />
      </div>
      {/* Manage Payment Cirkle */}

      <div className="lg:hidden">
        <ManagePaymentCirkle />
      </div>

      {/* History */}
      <div className="p-4 lg:hidden">
        <h1 className="mb-5 text-[18px] font-bold ">Payment History</h1>

        {/* <div className="flex justify-between mb-5">
          <div className="flex items-center space-x-1">
            <img
              src="/images/filter-history.svg"
              alt=""
              srcset=""
              className="h-7"
            />
            <span className="text-[10.5px]">Filters</span>
          </div>

          <div className="flex border p-2 rounded-lg w-[70%]">
            <img src="/images/search-01.svg" alt="" srcset="" className="" />
            <input
              type="text"
              placeholder="Search for a Cirkle or a User"
              className="outline-none pl-2 text-[10.5px]"
            />
          </div>

          <img src="/images/download-02.svg" alt="" srcset="" />
        </div> */}

        {/* filters */}

        {/* <div className="flex space-x-5 mb-5 mx-auto w-fit">
          <div className="flex text-[10px] items-center">
            Mumbai
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            Personal
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            August
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            Completed
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>
        </div> */}

        {/* hand  icon */}

        <div className="flex text-[10px] items-center justify-center border-y py-5">
          <img src="/images/hand.svg" alt="" srcset="" />

          <p>Swipe left to view the hidden columns of the table</p>
        </div>

        {/* table */}

        <PaymentTable />
      </div>

      {/* Desktop version */}
      <div className="hidden lg:flex lg:flex-col justify-between h-[500px]">
        <div className="w-[90%]">
          <ManagePaymentCirkle />
        </div>
      </div>

      <div className="hidden lg:block p-4 w-[100%] overflow-scroll hide-scrollbar h-[500px]">
        <h1 className="mb-5 text-[18px] font-bold ">Payment History</h1>

        <div className="flex justify-between mb-5">
          <div className="flex items-center space-x-1">
            <img
              src="/images/filter-history.svg"
              alt=""
              srcset=""
              className="h-7"
            />
            <span className="text-[10.5px]">Filters</span>
          </div>

          <div className="flex border p-2 rounded-lg w-[70%]">
            <img src="/images/search-01.svg" alt="" srcset="" className="" />
            <input
              type="text"
              placeholder="Search for a Cirkle or a User"
              className="outline-none pl-2 text-[10.5px]"
            />
          </div>

          <img src="/images/download-02.svg" alt="" srcset="" />
        </div>

        {/* filters */}

        {/* <div className="flex space-x-5 mb-5 mx-auto w-fit">
          <div className="flex text-[10px] items-center">
            Mumbai
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            Personal
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            August
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>

          <div className="flex text-[10px] items-center">
            Completed
            <img
              src="/images/cancel-circle.svg"
              alt=""
              srcset=""
              className="ml-1"
            />
          </div>
        </div> */}

        {/* hand  icon */}

        <div className="flex text-[10px] items-center justify-center border-y py-5">
          <img src="/images/hand.svg" alt="" srcset="" />

          <p>Swipe left to view the hidden columns of the table</p>
        </div>

        {/* table */}

        <PaymentTable />
      </div>
    </div>
  );
};

export default Payment;
