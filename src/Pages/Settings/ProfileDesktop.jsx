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
import EditProfileDesktop from "./EditProfileDesktop";
import { useModal } from "../../Component/Cirkles/ModalContext";
// import { FaUser } from "react-icons/fa6";

const ProfileDesktop = ({edit,setEdit}) => {
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
        console.log(response.data.data);
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
    <div className="flex justify-between font-poppins">
      <div className="w-[45%]">
        <div className="bg-[#E5F7FF] p-5 h-44 justify-between items-center hidden">
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

        <div className="flex items-center space-x-4 mb-5">
          <div className="w-24 h-24 rounded-full border-2 relative mb-3">
            {user?.profile_pic ? (
              <img
                src={user.profile_pic}
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
                className="absolute right-[10%] top-[75%] lg:hidden"
              />
            </Link>

            <img
              onClick={() => setEdit(!edit)}
              src="/images/edit.svg"
              alt="Edit"
              className="absolute right-[10%] top-[75%] hidden lg:block"
            />
          </div>

          <div className="">
            <h1 className="text-[32px] font-bold text-left">
              {user?.full_name || "User Name"}
            </h1>
            <p className="text-sm text-left">
              {user?.email || "email@xyz.com"}
            </p>
          </div>
        </div>

        <div className="border rounded-md h-11 w-[22%] p-2 font-poppins mb-5">
          {user?.is_verified ? (
            <div className="flex p-1 rounded-md space-x-3 h-full items-center">
              <img
                src="/images/verified-badge.svg"
                alt="Verified"
                className="w-[30px]"
              />
              <p className="text-sm text-[#141B3480]">Verified</p>
            </div>
          ) : (
            <div className="flex p-1 rounded-md space-x-3 h-full items-center justify-center">
              <p className="text-sm text-red-500">Not Verified</p>
            </div>
          )}
        </div>

        <div className="w-full p-5">
          <div className="mb-5">
            <p className="mb-2 text-lg">Phone number</p>
            <div className="border rounded-xl p-5 text-lg text-[#00000080]">
              {user?.phone || "N/A"}
            </div>
          </div>

          <div className="mb-5">
            <p className="mb-2 text-lg">Date of Birth</p>
            <div className="border rounded-xl p-5 text-lg text-[#00000080]">
              {user?.dob || "N/A"}
            </div>
          </div>

          <div className="mb-5">
            <p className="mb-2 text-lg">Home Address</p>
            <div className="border rounded-xl p-5 text-lg text-[#00000080]">
              {user?.address || "N/A"}
            </div>
          </div>

          <div className="mb-5">
            <p className="mb-2 text-lg">Occupation</p>
            <div className="border rounded-xl p-5 text-lg text-[#00000080]">
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

      <div className="w-[40%] flex flex-col space-y-10">
        <h1 className="text-xl font-[400] font-[Poppins] w-[50%]">
          Update your Profile Information
        </h1>

        <p className="text-sm font-poppins">
          You can change your profile image and language. All other information
          has been verified. Any updates will require re-verification of your
          identity. Email us at{" "}
          <span className="text-[#00943F]">contact@fundcirkle.com</span> to
          update your information or you can send a message detailing why you
          want to update your information below.
        </p>

        <textarea
          name=""
          id=""
          placeholder="Describe the profile information you want to change and why?"
          className="border rounded-md p-4 w-full h-52"
        ></textarea>

        <button
          type="submit"
          className="bg-[#00943F] w-[50%] py-3 rounded-xl text-white block mx-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfileDesktop;
