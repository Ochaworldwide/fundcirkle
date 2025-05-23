import React, { useState, ChangeEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import { FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";
import { useModal } from "../../Component/Cirkles/ModalContext";
import { UserContext } from "../../contexts/userDetails";

const EditProfile = () => {
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
  const navigate = useNavigate();

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
          navigate("/profile");
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        // toast.error("Image upload failed!", { ...toastConfig });
        showStatusReport("Image upload failed!");
        console.log(error);
        setLoading(false);
        return;
      }
    }

    // Step 2: Update the rest of the profile info
    if ((full_name, email, phone, dob, address, occupation)) {
      try {
        const payload = {
          full_name,
          email,
          phone,
          dob,
          address,
          occupation,
        };

        const profileResponse = await axiosInstance.post(
          "/account/profile",
          payload
        );

        if (profileResponse.data.success) {
          showStatusReport("Profile updated successfully!", "success");
          navigate("/profile");
          
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
      <div className="bg-[#E5F7FF] p-5 h-36 flex justify-between items-center">
        <Link to="/profile">
          <img src="/images/arrowback.svg" alt="" srcset="" />
        </Link>

        <div className="flex p-1 border rounded-md space-x-1">
          <img src="/images/verified-badge.svg" alt="" srcset="" />
          <p className="text-[8px]">verified</p>
        </div>
      </div>

      <div className="w-32 h-32 rounded-full border-2 mx-auto flex items-center justify-center relative -mt-20 mb-3 ">
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

      <form onSubmit={handleSubmit} className="w-full p-5">
        <div className="mb-5">
          <p className="mb-2 text-[12px]">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={full_name}
            disabled={user ? user.is_verified : false}
            onChange={(e) => setfull_name(e.target.value)}
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
              disabled={user ? user.is_verified : false}
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
              disabled={user ? user.is_verified : false}
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
            disabled={user ? user.is_verified : false}
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
            disabled={user ? user.is_verified : false}
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
            disabled={user ? user.is_verified : false}
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

