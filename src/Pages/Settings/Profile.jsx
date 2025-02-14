// import React from 'react'
// import { Link } from 'react-router-dom';

// const Profile = () => {


//   return (
//     <div>
//       <div className="bg-[#E5F7FF] p-5 h-44 flex justify-between items-center">
//         <Link to="/setting">
//             <img src="/images/arrowback.svg" alt="" srcset="" />

//         </Link>
       
//         <div className="flex p-1 border rounded-md space-x-1">
//           <img src="/images/verified-badge.svg" alt="" srcset="" />
//           <p className="text-[8px]">verified</p>
//         </div>
//       </div>

//       <div className="w-32 h-32 rounded-full border-2 mx-auto relative -mt-20 mb-3 ">
//         <img
//           src="/images/person4.svg"
//           alt=""
//           srcset=""
//           className="w-full h-full"
//         />
//         <Link to="/editprofile">
//             <img
//             src="/images/edit.svg"
//             alt=""
//             srcset=""
//             className="absolute right-[10%] top-[75%] "
//             />
//         </Link>
        
//       </div>

//       <div>
//         <h1 className="text-[22px] font-bold text-center">
//           Bhaavik Jeff Arhaan
//         </h1>
//         <p className="text-[10.5px] text-center">bhaavik.arhaan@xyz.com</p>
//       </div>

//       <div className="w-full p-5">
//         <div className="mb-5">
//           <p className="mb-2 text-[12px]">Phone number</p>
//           <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
//             91 787 847 9083 948
//           </div>
//         </div>

//         <div className="mb-5">
//           <p className="mb-2 text-[12px]">Date of Birth</p>
//           <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
//             12th of May, 1987
//           </div>
//         </div>

//         <div className="mb-5">
//           <p className="mb-2 text-[12px]">Home Address</p>
//           <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
//             14, Street Road, New Town, Mumbai, India
//           </div>
//         </div>

//         <div className="mb-5">
//           <p className="mb-2 text-[12px]">Occupation</p>
//           <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
//             Solopreneur
//           </div>
//         </div>

//         <p className="text-[10.5px] ">
//           You can change your profile image. All other information has been
//           verified. Any updates will require re-verification of your identity.
//           Email us at{" "}
//           <span className="text-[#00943F]"> contact@fundcirkle.com </span> to
//           update your information.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Profile




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";


const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(
          ROUTES.ACCOUNT.GET_USER_ACCOUNT
        ); // Adjust endpoint as needed
        setProfile(response.data.data);
        console.log(response.data.data)
      } catch (err) {
        // setError("Failed to load profile data.");
        toast.error(err.response?.data?.message || "An error occurred"); // Use err instead of response
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

        <div className="flex p-1 border rounded-md space-x-1">
          <img src="/images/verified-badge.svg" alt="Verified" />
          <p className="text-[8px]">Verified</p>
        </div>
      </div>

      <div className="w-32 h-32 rounded-full border-2 mx-auto relative -mt-20 mb-3">
        <img
          src={profile?.profile_pic || "/images/person4.svg"}
          alt="Profile"
          className="w-full h-full rounded-full"
        />
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
          {profile?.full_name || "User Name"}
        </h1>
        <p className="text-[10.5px] text-center">
          {profile?.email || "email@xyz.com"}
        </p>
      </div>

      <div className="w-full p-5">
        <div className="mb-5">
          <p className="mb-2 text-[12px]">Phone number</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {profile?.phone || "N/A"}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Date of Birth</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {profile?.dob || "N/A"}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Home Address</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {profile?.address || "N/A"}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Occupation</p>
          <div className="border rounded-xl p-5 text-[12px] text-[#00000080]">
            {profile?.occupation || "N/A"}
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


