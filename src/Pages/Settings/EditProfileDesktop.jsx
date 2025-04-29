import React, { useState, ChangeEvent, useContext } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";
import { UserContext } from "../../contexts/userDetails";
import { useModal } from "../../Component/Cirkles/ModalContext";

const EditProfileDesktop = ({ edit, setEdit }) => {
  const [full_name, setfull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // New state to hold the file object
  const { user, refetchUser } = useContext(UserContext);
  const { showStatusReport } = useModal();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // For displaying the image preview
      };
      reader.readAsDataURL(file);
      setImageFile(file); // Store the file object
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";

    // Step 1: Upload the Image (if a new one is selected)
    if (imageFile) {
      const imageFormData = new FormData();
      imageFormData.append("file", imageFile); // Append the file object

      try {
        const imageResponse = await axiosInstance.post(
          ROUTES.ACCOUNT.UPDATE_PROFILE_PHOTO,
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (imageResponse.data.success) {
          imageUrl = imageResponse.data.image_url; // Ensure this matches API response
          setLoading(false);
          setEdit(!edit);
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        // toast.error("Image upload failed!", { ...toastConfig });
        showStatusReport("Image should be less than 1mb");
        console.log(error);
        setLoading(false);
        return;
      }
    }

    // Step 2: Update the rest of the profile info
    if (full_name,email,phone,dob,address,occupation){
      try {
        const payload = {
          full_name,
          email,
          phone,
          dob,
          address,
          occupation,
        };

        const profileResponse = await axiosInstance.post("/account/profile",payload);

        if (profileResponse.data.success) {
          showStatusReport("Profile updated successfully!", "success");
          setEdit(!edit);
        } else {
          showStatusReport("Profile update failed!");
        }
      } catch (error) {
        showStatusReport("Profile update failed!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <div className="flex w-full">
        <div className="w-[40%]">
          <div className="w-32 h-32 rounded-full border-2 flex items-center relative mb-3">
            <label className="flex w-full h-full items-center absolute justify-center border-2  rounded-full cursor-pointer overflow-hidden transition-all">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-full "
                />
              ) : (
                <div className="flex flex-col items-center text-gray-500  w-full">
                  <FaUpload />
                </div>
              )}
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className=" mb-7">
            <h1 className="text-[32px] font-bold text-left">
              {user?.full_name || "User Name"}
            </h1>
            <p className="text-sm text-left">
              {user?.email || "email@xyz.com"}
            </p>
          </div>

          <div className="border rounded-md h-11 w-[50%] p-2 font-poppins mb-5">
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
              <div className="flex p-1 rounded-md h-full items-center w-full justify-center">
                <p className="text-sm text-red-500">Not Verified</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-[50%]">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-5">
              <p className="mb-2 text-base">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                value={full_name}
                disabled={user ? user.is_verified : false}
                onChange={(e) => setfull_name(e.target.value)}
                className="border outline-none rounded-xl p-5 text-base w-full"
              />
            </div>

            <div className="flex w-full justify-between">
              <div className="mb-5 w-[48%]">
                <p className="mb-2 text-base">Email</p>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  disabled={user ? user.is_verified : false}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border outline-none rounded-xl p-5 text-base w-full"
                />
              </div>

              <div className="mb-5 w-[48%]">
                <p className="mb-2 text-base">Phone</p>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  disabled={user ? user.is_verified : false}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border outline-none rounded-xl p-5 text-base w-full"
                />
              </div>
            </div>

            <div className="mb-5">
              <p className="mb-2 text-base">Date of Birth</p>
              <input
                type="date"
                value={dob}
                disabled={user ? user.is_verified : false}
                onChange={(e) => setDob(e.target.value)}
                className="border outline-none rounded-xl p-5 text-base w-full"
              />
            </div>

            <div className="mb-5">
              <p className="mb-2 text-base">Address</p>
              <input
                type="text"
                placeholder="Enter your Address"
                value={address}
                disabled={user ? user.is_verified : false}
                onChange={(e) => setAddress(e.target.value)}
                className="border outline-none rounded-xl p-5 text-base w-full"
              />
            </div>

            <div className="mb-10">
              <p className="mb-2 text-base">Occupation</p>
              <input
                type="text"
                placeholder="Enter your occupation"
                value={occupation}
                disabled={user ? user.is_verified : false}
                onChange={(e) => setOccupation(e.target.value)}
                className="border outline-none rounded-xl p-5 text-base w-full"
              />
            </div>

            <div className="flex justify-between w-[100%] mx-auto">
              <button
                type="submit"
                className="border py-3 px-6 w-[45%] rounded-md bg-[#00943F] text-[14px] font-[700] text-white"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                className="border py-3 px-6 rounded-md text-[14px] font-[700] text-black w-[45%]"
                onClick={() => setEdit(!edit)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileDesktop;
