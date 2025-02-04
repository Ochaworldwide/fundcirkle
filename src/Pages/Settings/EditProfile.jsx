// import React from "react";
// import { Link } from "react-router-dom";
// import axiosInstance from "../../service";
// import { ROUTES } from "../../constants/routes";

// const EditProfile = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const payload = {
//       full_name: "Shawn Mendes",
//       email: "khrisx01@gmail.com",
//       phone: "0201234567",
//       dob: "2001-05-24",
//       address: "16 Columbus Street",
//       occupation: "Developer",
//     };

//     axiosInstance
//       .post(ROUTES.ACCOUNT.UPDATE_PROFILE_INFO, payload)
//       .then((response) => {
//         if (response.data.success) {
//           toast.success(response.data.message);
//           closeModal();
//         }
//       })
//       .catch((error) => {
//         toast.error(error?.response?.data?.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <div className="bg-[#E5F7FF] p-5 h-36 flex justify-between items-center">
//         <Link to="/profile">
//           <img src="/images/arrowback.svg" alt="" srcset="" />
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
//         <img
//           src="/images/edit.svg"
//           alt=""
//           srcset=""
//           className="absolute right-[10%] top-[75%] "
//         />
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="w-full p-5 ">
//           <div className="mb-5">
//             <p className="mb-2 text-[12px]">Name</p>
//             <input
//               type="text"
//               placeholder="Bhaavik Jeff Arhaan"
//               className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
//             />
//           </div>
//           <div className="flex justify-between w-full">
//             <div className="mb-5 w-[48%]">
//               <p className="mb-2 text-[12px]">Email</p>
//               <input
//                 type="text"
//                 placeholder="bhaavik.arhaan@xyz.com"
//                 className="border rounded-xl p-5 text-[12px] w-full outline-none text-[#00000080]"
//               />
//             </div>

//             <div className="mb-5 w-[48%]">
//               <p className="mb-2 text-[12px]">Phone number</p>
//               <input
//                 type="text"
//                 placeholder="91 787 847 9083 948"
//                 className="border rounded-xl p-5 text-[12px] w-full outline-none text-[#00000080]"
//               />
//             </div>
//           </div>

//           <div className="mb-5">
//             <p className="mb-2 text-[12px]">Date of Birth</p>
//             <input
//               type="text"
//               placeholder="12th of May, 1987"
//               className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
//             />
//           </div>

//           <div className="mb-5">
//             <p className="mb-2 text-[12px]">Home Address</p>
//             <input
//               type="text"
//               placeholder="14, Street Road, New Town, Mumbai, India"
//               className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
//             />
//           </div>

//           <div className="mb-5">
//             <p className="mb-2 text-[12px]">Occupation</p>
//             <input
//               type="text"
//               placeholder="Solopreneur"
//               className="border rounded-xl p-5 text-[12px] outline-none text-[#00000080] w-full"
//             />
//           </div>

//           <div className="flex justify-between w-[80%] mx-auto">
//             <button className=" border py-3 px-6 rounded-md bg-[#00943F] text-[14px] font-[700] text-white">
//               Save Changes
//             </button>
//             <button className=" border py-3 px-6 rounded-md text-[14px] font-[700] text-black">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

import React, { useState , ChangeEvent} from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("/images/person4.svg");

   const handleImageChange = (event) => {
     const file = event.target.files?.[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = () => setImage(reader.result);
       reader.readAsDataURL(file);
     }
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      full_name: fullName,
      email: email,
      phone: phone,
      dob: dob,
      address: address,
      occupation: occupation,
    };

   

    axiosInstance
      .post(ROUTES.ACCOUNT.UPDATE_PROFILE_INFO, payload)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="bg-[#E5F7FF] p-5 h-36 flex justify-between items-center">
        <Link to="/profile">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>

        <div className="flex p-1 border rounded-md space-x-1">
          <img src="/images/verified-badge.svg" alt="" srcset="" />
          <p className="text-[8px]">verified</p>
        </div>
      </div>

      <div className="w-32 h-32 rounded-full border-2 mx-auto relative -mt-20 mb-3 ">
        <label className="relative cursor-pointer">
          <img
            src={image}
            alt=""
            srcset=""
            className="w-full h-full rounded-full"
            onClick={() => document.querySelector("input[type = 'file']").click()}
          />

          {/* <img
            src="/images/edit.svg"
            alt=""
            srcset=""
            className="absolute right-[10%] top-[75%] "
          /> */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
            name=""
            id=""
          />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="w-full p-5">
        <div className="mb-5">
          <p className="mb-2 text-[12px]">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border outline-none rounded-xl p-5 text-[12px] w-full"
          />
        </div>

        <div className="flex w-full space-x-1">
          <div className="mb-5">
            <p className="mb-2 text-[12px]">Email</p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border outline-none rounded-xl p-5 text-[12px] w-full"
            />
          </div>

          <div className="mb-5">
            <p className="mb-2 text-[12px]">Phone</p>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border outline-none rounded-xl p-5 text-[12px] w-full"
            />
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Date of Birth</p>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border outline-none rounded-xl p-5 text-[12px] w-full"
          />
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Address</p>
          <input
            type="text"
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border outline-none rounded-xl p-5 text-[12px] w-full"
          />
        </div>

        <div className="mb-5">
          <p className="mb-2 text-[12px]">Occupation</p>
          <input
            type="text"
            placeholder="Enter your occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="border outline-none rounded-xl p-5 text-[12px] w-full"
          />
        </div>

        <div className="flex justify-between w-[80%] mx-auto">
          <button
            type="submit"
            className="border py-3 px-6 rounded-md bg-[#00943F] text-[14px] font-[700] text-white"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            className="border py-3 px-6 rounded-md text-[14px] font-[700] text-black"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
