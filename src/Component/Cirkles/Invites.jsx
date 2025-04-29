import React, { useEffect, useState } from "react";
import InviteCard from "./InviteCard";
import axiosInstance from "../../service";
import { ROUTES } from "../../constants/routes";
import NoInvitesCard from "./NoInvitesCard";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { toastConfig } from "../../constants/toastConfig";
import { useModal } from "./ModalContext";

function Invites() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { showStatusReport } = useModal();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(ROUTES.CIRKLE.GET_USER_INVITES);
      if (response.data.success) {
        // Map the response data to the desired structure
        const formattedGroups = response.data.data.map((group, index) => ({
          name: group.name,
          id: group.id,
          memberName: group.is_owner,
          currentMembers: group.member_count,
          totalMembers: group.max_members,
          amount: `${group.contribution_amount} `,
          image: group.image_url,
        }));

        console.log(response.data.data);

        setGroups(formattedGroups);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response?.data?.message) {
        // toast.error(error.response.data.message,{ ...toastConfig });
        showStatusReport(error.response.data.message);
      } else {
        // toast.error("An error occurred. Please try again.",{ ...toastConfig });
        showStatusReport("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (group) => {
    console.log("Clicked Group ID:", group.id);

    // const payload = {
    //   id: group.id,
    //   user_id: group.user_id,
    //   category_id: group.category_id,
    //   name: group.name,
    //   description: group.description,
    //   contribution_amount: group.contribution_amount,
    //   contribution_frequency: group.contribution_frequency,
    //   contribution_week: group.contribution_week,
    //   contribution_month: group.contribution_month,
    //   contribution_day: group.contribution_day,
    //   privacy: group.privacy,
    //   max_members: group.max_members,
    //   state_id: group.state_id,
    //   locations: group.locations,
    //   currency: group.currency,
    //   status: group.status,
    //   created_at: "2024-12-14T21:56:35.000000Z",
    //   updated_at: "2024-12-14T23:00:17.000000Z",
    //   slug: group.slug,
    //   member_count: group.member_count,
    //   is_owner: false,
    // };

    // console.log("Payload:", payload);
    const cirkleId = group.id;

    axiosInstance
      .post(`/cirkles/${cirkleId}/join`)
      .then((response) => {
        if (response.data.success) {
          console.log("Cirkle created successfully!");
        } else {
          console.error("API responded with failure:", response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error:", error.response.data);
        } else if (error.request) {
          console.error("Network Error:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  const handleDecline = (group) => {
    console.log("Clicked Group ID:", group.id);
    const cirkleId = group.id;

    axiosInstance
      .post(`/cirkles/${cirkleId}/decline`)
      .then((response) => {
        if (response.data.success) {
          showStatusReport("Cirkle declined successfully!");
        } else {
          showStatusReport("API responded with failure:", response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error();
          showStatusReport("Error:", error.response.data);
        } else if (error.request) {
          showStatusReport("Network Error:", error.request);
        } else {
          showStatusReport("Error:", error.message);
        }
      });
  };

  const buttons = (group) => (
    <div className="flex gap-2">
      <button
        className="bg-[#00943F] text-white px-3 py-1 rounded-md text-xs font-semibold"
        onClick={() => {
          handleSubmit(group), navigate("/acceptedinvite");
        }}
      >
        Accept
      </button>
      <button
        className="border border-gray-400 text-gray-600 px-3 py-1 rounded-md text-xs font-semibold"
        onClick={() => {
          handleDecline(group);
        }}
      >
        Decline
      </button>
    </div>
  );

  return (
    <div>
      <div className="p-1 overflow-y-scroll hide-scrollbar">
        {groups.length > 0 ? (
          groups.map((group, index) => (
            <InviteCard key={group.id} group={group} buttons={buttons(group)} />
          ))
        ) : (
          <NoInvitesCard />
        )}
      </div>
    </div>
  );
}

export default Invites;
