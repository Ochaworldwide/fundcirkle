import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { UserContext } from "../../contexts/userDetails";
import { toastConfig } from "../../constants/toastConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaCircleUser, FaUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useModal } from "../../Component/Cirkles/ModalContext";
// import { FaUser } from "react-icons/fa6";


const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, refetchUser } = useContext(UserContext);
  console.log(user);
  const { showStatusReport } = useModal();
  // const [error, setError] = useState("");
  

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(
          ROUTES.ACCOUNT.GET_USER_ACCOUNT
        ); // Adjust endpoint as needed
        setProfile(response.data.data);
        refetchUser();
        console.log(response.data.data)
      } catch (err) {
        // setError("Failed to load profile data.");
        // toast.error(err.response?.data?.message || "An error occurred", {
        //   ...toastConfig,
        // }); // Use err instead of response
        showStatusReport(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);



  return (
    <div>
      <div className="bg-[#E5F7FF] p-5 h-44 flex justify-between items-center">
        <Link to="/setting">
          <img src="/images/arrowback.svg" alt="Back" />
        </Link>

        {user?.is_verified ? (
          <div className="flex p-1 border rounded-md space-x-1">
            <img src="/images/verified-badge.svg" alt="Verified" />
            <p className="text-[8px]">Verified</p>
          </div>
        ) : (
          <div className="flex p-1 border rounded-md space-x-1 bg-red-100">
            <p className="text-[8px] text-red-500">Not Verified</p>
          </div>
        )}
      </div>

      <div className="w-32 h-32 rounded-full border-2 mx-auto relative -mt-20 mb-3">
        {/* <img
          src={user?.profile_pic }
          alt="Profile"
          className="w-full h-full rounded-full"
        /> */}

        {user?.profile_pic ? (
          <img
            src={`${user?.profile_pic}?t=${Math.random()}`}
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        ) : (
          <FaCircleUser className=" text-gray-500 w-full h-full" />
        )}

        <Link to="/editprofile">
          <img
            src="/images/edit.svg"
            alt="Edit"
            className="absolute right-[10%] top-[75%]"
          />
        </Link>
      </div>

      <div>
        <h1 className="text-[22px] font-bold text-center">
          {user?.full_name || "User Name"}
        </h1>
        <p className="text-[10.5px] text-center">
          {user?.email || "email@xyz.com"}
        </p>
      </div>

      <div className="w-full p-5">
        <div className="mb-5">
          <p className="mb-2 text-[12px]">Phone number</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {user?.phone || "N/A"}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Date of Birth</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {user?.dob || "N/A"}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Home Address</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {user?.address || "N/A"}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Occupation</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {user?.occupation || "N/A"}
          </div>
        </div>

        <p className="text-[10.5px]">
          You can change your profile image. All other information has been
          verified. Any updates will require re-verification of your identity.
          Email us at{" "}
          <span className="text-[#00943F]">contact@fundcirkle.com</span> to
          update your information.
        </p>
      </div>
    </div>
  );
};

export default Profile;


