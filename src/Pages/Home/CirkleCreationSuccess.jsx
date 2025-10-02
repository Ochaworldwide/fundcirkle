import React, { useEffect, useState } from "react";
import Confetti from "../../Component/Confetti/Confetti";
import { useModal } from "../../Component/Cirkles/ModalContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants/toastConfig";
import axiosInstance from "../../service";

const CirkleCreationSuccess = () => {
  const { isModalOpen, modalType, modalData, closeModal, openModal } =
    useModal();
  const [cirkleData, setCirkleData] = useState(null);
  const [membersData, setMembersData] = useState([]);
  const { showStatusReport } = useModal();

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all Cirkles to get the latest one (based on assumption of the last being newest)
        const membersResponse = await axiosInstance.get(`/cirkles`);
        if (membersResponse.data.success) {
          const allCirkles = membersResponse.data.data;
          const cirkleIds = allCirkles.map((item) => item.id);
          setMembersData(cirkleIds);

          const latestCirkleId = cirkleIds[cirkleIds.length - 1];
          if (latestCirkleId) {
            const response = await axiosInstance.get(
              `/cirkles/${latestCirkleId}`
            );
            if (response.data.success) {
              setCirkleData(response.data.data);
              console.log("Fetched Cirkle:", response.data.data);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        const errorMsg =
          error.response?.data?.message ||
          "An error occurred. Please try again.";
        // toast.error(errorMsg, toastConfig);
        showStatusReport(errorMsg);
      }
    };

    fetchData();


  }, [isModalOpen, modalType]);

  const transferData = cirkleData?.id;



  return (
    <div>
      <Confetti
        title="Congratulations Your Cirkle is Live!"
        message="You’ve successfully created a new Cirkle. Invite your friends and start contributing today!"
        primaryButtonText="Invite Members"
        secondaryButtonText="View Cirkle"
        primaryButtonAction={() => openModal("edit", transferData)}
        secondaryButtonLink="/home"
      />
    </div>
  );
};

export default CirkleCreationSuccess;

